import { Button, Text, Box, FormControl, HStack,NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Checkbox } from "@chakra-ui/react"
import { setIn } from "formik"
import { useState } from "react"
import InputField from './InputField.js' 
import {kwhavg, wattHours, kwattDays}  from '../lib/calc.js'



const InputForm = () => {
    const [inputList, setInputList] = useState([{device:'Select Appliance',alwaysOn:true,hours:24,}])
    const [data, setData] = useState(null)

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        if(e.target.checked != null){
            list[index][name] = e.target.checked
        }else{
        list[index][name] = value;
        }
        setInputList(list);
    };

    const handleHourChange = (e, index) => {
        const value = e;
        const list = [...inputList];
        list[index]['hours'] = value;
        setInputList(list);
    }
    
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    const handleAddClick = () => {
        setInputList([...inputList, {device:'Select Appliance',alwaysOn:true,hours:24}])
    };

    const handleSubmit = () => {
        let totalhours = 0;
        for(let i = 0; i < inputList.length; i++)
        {
            totalhours = totalhours + wattHours(inputList[i])
        } 
        const days = kwattDays(totalhours)
        setData(kwhavg(days));
    }

    return(
        <>
        <FormControl>
        {inputList.map((x, i) => {
        return(
            <HStack key={i}>
            <FormControl>
                
                <HStack spacing='24px'>
                    <Select placeholder='Select Appliance' name="device" value={x.device} onChange={e => handleInputChange(e, i)}>
                        <option value='fridge'>Fridge</option>
                        <option value='coffee maker'>Coffee Maker</option>
                        <option value='microwave'> Microwave</option>
                        <option value='toaster'> Toaster</option>
                        <option value='dishwasher'> Dishwasher</option>
                        <option value='washer'> Washer</option>
                        <option value='dryer'> Dryer</option>
                        <option value='iron'> Iron</option>
                        <option value='hair dryer'> Hair Dryer</option>
                        <option value='laptop'> Laptop</option>
                        <option value='monitor'> Monitor</option>
                        <option value='computer'> Computer</option>
                        <option value='small tv'> Small TV</option>
                        <option value='big tv'> Big TV</option>
                    </Select>
                    <Checkbox defaultChecked name='alwaysOn' onChange={e => handleInputChange(e,i)}>
                        Always On?
                    </Checkbox>
                    {x.alwaysOn ?
                    <></> :
                    <NumberInput max={24} min={1} name='hours' onChange={e => handleHourChange(e, i)}>
                    <NumberInputField id="hours" />
                    <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                    </NumberInputStepper>
                    </NumberInput>}
                </HStack>
            </FormControl>  
            {inputList.length !== 1 && <Button key={i} onClick={handleRemoveClick}>Remove</Button>}
            </HStack>
        )})}
        <Button onClick={handleAddClick}>Add</Button>
        </FormControl>
        <Button m={5} onClick={handleSubmit}>Submit</Button>
        <Box>
        {data ?
         <>
         <Text>
             Kilowatt Days: {data.kwattdays}
         </Text>
         <Text>
             {data.message}
         </Text>
         </> 
         : <></>}
        </Box>
        </>
        )
}



export default InputForm