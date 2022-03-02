import InputForm from "../components/InputForm"

const { Box, Text } = require("@chakra-ui/react")

const Home = () => {
    return(
        <Box>
            <Text>
                Welcome Page
                {/*
                
Coffee maker	900-1200 watts
Microwave	750-1100 watts
Toaster	800-1400 watts
Dishwasher	1200-2400 watts
Washer	350-500 watts
Dryer	1800-5000 watts
Iron	100-1800 watts
Ceiling fan	65-175 watts
Space heater (40gal)	4500-5500 watts
Hair dryer	1200-1875 watts
Laptop	50 watts
Computer monitor	150 watts
Computer tower	120 watts
Television 19″-36″	65-133 watts
Television 53″-61″	170 watts
                 */}
            </Text>
            <InputForm/>
        </Box>
    )
}

export default Home