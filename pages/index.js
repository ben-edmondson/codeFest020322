import InputForm from "../components/InputForm"

const { Box, Text } = require("@chakra-ui/react")

const Home = () => {
    return(
        <Box>
            <Text>
                Welcome Page
            </Text>
            <InputForm/>
        </Box>
    )
}

export default Home