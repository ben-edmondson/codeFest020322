/*
create variables for each device /
Include device name and wattage /
hold hours of use 
watts x hours gets watts pd 
wattsph / 1000 = kwh per day
*/

const devices = new Map();
devices.set('coffee maker',1000);
devices.set('microwave', 950);
devices.set('toaster',1100);
devices.set('dishwasher', 1800);
devices.set('washer', 425);
devices.set('dryer',2500);
devices.set('iron', 700);
devices.set('hair dryer', 1400);
devices.set('laptop', 50);
devices.set('monitor',150);
devices.set('computer',120);
devices.set('small tv', 133);
devices.set('big tv',170);

function wattHours(device){
    let watts = devices.get(device.name);

    return watts * device.hours;
}

function totalWattHours(wattHours){
    totalWattHours = totalWattHours + wattHours;
    return totalWattHours;
}
function kwattDays(totalWattHours){

    kwattDays = totalWattHours / 1000;
    return kwattDays;
}