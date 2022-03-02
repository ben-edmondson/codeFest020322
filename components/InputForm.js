import { Button, FormControl, HStack,NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Checkbox } from "@chakra-ui/react"
import { setIn } from "formik"
import { useState } from "react"
import InputField from './InputField.js' 




const InputForm = () => {
    const [inputList, setInputList] = useState([{device:'Select Appliance',alwaysOn:true,hours:24,}])

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        if(e.target.checked != null){
            list[index][name] = e.target.checked
        }else{
        list[index][name] = value;
        }
        setInputList(list);
        console.log(inputList);
    };

    const handleHourChange = (e, index) => {
        const value = e;
        const list = [...inputList];
        list[index]['hours'] = value;
        setInputList(list);
        console.log(inputList);
    }
    
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    const handleAddClick = () => {
        setInputList([...inputList, {device:'Select Appliance',alwaysOn:true,hours:24}])
    };

    return(
        
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
    )
}



export default InputForm