/*
create variables for each device(use objects)
Include device name and wattage
hold hours of use 
watts x hours gets watts pd
wattsph / 1000 = kwh per day
*/


let devices = {
    Coffee_maker:{
        watts:1000
    },
    Microwave:{
        watts:950
    },
    Toaster:{
        watts:1100
    },

    Dishwasher:{
        watts:1800
    },
    Washer:{
        watts:425
    },
    Dryer:{
        watts:2800
    },
    Iron:{
        watts:700
    },

    Ceiling_fan:{
        watts:100
    },
    Radiator:{
        watts:293
    },
    Hair_Dryer:{
        watts:1400
    },
    Laptop:{
        watts:50
    },
    Computer_Monitor:{
        watts:150
    },
    Computer:{
        watts:120
    },
    Television_below_36inch:{
         watts:133
    },
    Television_above_36inch:{
        watts:170
    }	
}