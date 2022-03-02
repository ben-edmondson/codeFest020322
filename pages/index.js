import InputForm from "../components/InputForm"
import { useState } from "react"
import Image from "next/image"

const { Box, Text, Button, Heading } = require("@chakra-ui/react")

const Home = () => {

    return(
        <>
        <Box alignContent='center'>
            <Heading align='center'>
                Energy Calculator
            </Heading>
            <Image src='/uob logo.png' alt="uni logo" width='200px' height='200px'/>
            <InputForm/>
        </Box>
        </>
    )
}

export default Home