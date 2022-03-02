/*
create variables for each device /
Include device name and wattage /
hold hours of use 
watts x hours gets watts pd 
wattsph / 1000 = kwh per day
*/

export const devices = new Map();
devices.set('fridge', 300);
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

export function wattHours(device){
    let watts = devices.get(device.name);

    return watts * device.hours;
}


export function kwattDays(totalWattHours){

    let kwhDays = totalWattHours / 1000;
    return kwhDays;
}

export function kwhavg(kwattDays){
    const avgkwh = 9;
    const kdays = kwattDays;
    if(kwattDays > avgkwh){
        console.log("User is above average in energy consumption consider reducing.")
        return{
            message:'User is above average in energy consumption consider reducing.',
            kwattdays: kdays
        }
    }else{
        console.log("User is below the average in energy consumption. Good job! :)")
        return{
            message:'User is below the average in energy consumption. Good job! :)',
            kwattdays: kdays

        }
    }
}