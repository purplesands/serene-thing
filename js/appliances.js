
window.addEventListener('DOMContentLoaded', (event) => {
let appliances =["air conditioner","air purifier","diffuser","fan","grill","bed side lamp","back boiler","can opener","camcorder","ceiling fan","vacuum cleaner","dryer","ironing board","coffee grinder","combo washer dryer","computer","dishwasher","DVD player","electric kettle","garbage disposal unit", "gas appliance","hair dryer","humidifier","HVAC","icebox","light fixture","light","microwave oven","MP3 player","nightlight","oil heater","oven","patio heater","paper shredder","radiator","radio receiver","refridgerator","internet refrigerator","thermal mass refrigerator","sewing machine","space heater","steam mop","stove","telephone","television","toaster ovens","toaster","trouser press","vacuum cleaner","roomba","washing machine","Water heater","window fan", 'toilet', 'sink', 'cheese grater', 'bathtub', 'staircase', 'back door', 'front door', 'doorway', 'lamp', 'countertop', 'stereo']
let nums=[]
function list(){
    let apps =[]
    while (apps.length<15){
        apps.push(appliances.splice(Math.floor(Math.random() * Math.floor(appliances.length)), 1).join())
    }
    console.log(apps)
    return apps.map((currentItem, index)=>{
        document.querySelector(`#appliance${index+1}`).innerHTML=currentItem.toUpperCase()
    })
}
list()
})
