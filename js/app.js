window.addEventListener('DOMContentLoaded', (event) => {
  let key = '28c30019fc58a1278645bb6ce74ea529';
  let lat = 40.7044
  let lon = -73.9018
  let sunBox = document.querySelector('.sun-box')
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



 
  function setWeather(){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${lon}`)
      .then(r=>r.json())
      .then(updateWeather)
  }
  
  function updateWeather(weather){
    let sunsetToday = new Date(weather.daily.data[0].sunsetTime * 1000)
    let sunriseToday = new Date(weather.daily.data[0].sunriseTime * 1000)
    let sunriseTomorrow = new Date(weather.daily.data[1].sunriseTime * 1000)
    let currentTime = new Date()
    let nextSun = checkSun(sunriseToday, sunsetToday, sunriseTomorrow, currentTime)
    let minutesToSun = calculateMinutesToSun(currentTime, nextSun)
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
    // cloudBox.innerHTML = cloudPercentage
    sunBox.innerHTML = minutesToSun

  }

      // fetch('https://api.spotify.com/v1/users/12152915562')
      // .then(r=>r.json())
      // .then(console.log)
      
      function checkSun(sunriseToday, sunsetToday, sunriseTomorrow, currentTime){
        if (currentTime < sunriseToday){
          return sunriseToday
        } else if (currentTime < sunsetToday){
          return sunsetToday
        } else if (currentTime < sunriseTomorrow){
          return sunriseTomorrow
        } 
        debugger
      }

      function calculateMinutesToSun(currentTime, nextSun){
        let hours = parseInt((nextSun-currentTime)/1000) / 60 / 60
        let minutes = Math.floor((hours % 1) * 60)
        if (hours < 1){
          return `${minutes} minutes`
        } else {
          return `${Math.floor(hours)} hours and ${minutes} minutes`
        }
        debugger
      }
      function sendMessage(message){}
      function toggleMessage(e){
        console.log(e)
      }

      setWeather()
      setInterval(setWeather, 60000)
})

