import { Checkbox, FormControl, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"
import { useState } from "react"

const InputField = () => {
    const[alwaysOn, setAlwaysOn] = useState(true)
    return(
        <FormControl>
        <HStack spacing='24px'>
        <Select placeholder='Select Appliance'>
                <option value='Fridge'>Fridge</option>
                <option value='Kettle'>Kettle</option>
                <option value='Oven' > Oven</option>
        </Select>
        <Checkbox defaultChecked value="deviceAlwaysOn" onChange={(c) => setAlwaysOn(c.target.checked)}>
            Always On?
        </Checkbox>
        {alwaysOn ?
        <></> :
        <NumberInput max={24} min={1}>
            <NumberInputField id="hours"/>
            <NumberInputStepper>
            <NumberIncrementStepper/>
            <NumberDecrementStepper/>
            </NumberInputStepper>
        </NumberInput>} 
        </HStack>
        </FormControl>
    )
}

export default InputField