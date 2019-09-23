window.addEventListener('DOMContentLoaded', (event) => {
  let key = '28c30019fc58a1278645bb6ce74ea529';
  let lat = 40.7044
  let lon = -73.9018
  let temperatureBox = document.querySelector('.temperature')
  let summaryBox = document.querySelector('.summary-box')
  let messageToggleBtn = document.querySelector('#messageToggle')
  let messageFormBox = document.querySelector('#messageFormBox')
  let messageForm = document.querySelector('#messageForm')
  let thankYou = document.querySelector('#thankYou')


  let cloudBox = document.querySelector('.cloud-box')
  
  let testBtn = document.querySelector('#testBtn')

  messageToggleBtn.addEventListener("click", e=>{
    toggleMessageBox()
  })
  messageForm.addEventListener("submit", (e) => {
    toggleMessageBox()
    messageToggleBtn.style.display="none"
    thankYou.style.display="block"
  })
  
  

  function toggleMessageBox(){
    if (messageFormBox.style.display === "none") {
      messageFormBox.style.display = "block";
      messageToggleBtn.innerHTML="x"
    } else {
      messageFormBox.style.display = "none";
      messageToggleBtn.innerHTML="leave a message"
    }  
  }

  
  fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${lon}`)
    .then(r=>r.json())
    .then(updateWeather)
  
      function updateWeather(weather){
        let result =""
        let cloudPercentage = weather.currently.cloudCover.toFixed(2) * 100 + "%"
        switch(weather.currently.icon){
          case "clear-day":
            result = "clear";
            break;
          case "clear-night":
            result = "clear";
            break;
          case "rain":
            result = "raining";
            break;
          case "snow":
            result = "snowing";
            break;
          case "sleet":
            result = "sleeting!";
            break;
          case "wind":
            result = "windy";
            break;
          case "fog":
            result = "foggy";
            break;
          case "cloudy":
            result = "cloudy";
            break;
          case "partly-cloudy-day":
            result = "cloudy";
            break;
          case "partly-cloudy-night":
            result = "cloudy";
            break;
        }
        console.log(weather)
        summaryBox.innerHTML = result.toLowerCase()
        cloudBox.innerHTML = cloudPercentage
      }

      fetch('https://api.spotify.com/v1/users/12152915562')
      .then(r=>r.json())
      .then(console.log)
      

      function sendMessage(message){}
      function toggleMessage(e){
        console.log(e)
      }

      
})

