const { FormControl, Select } = require("@chakra-ui/react")

const InputForm = () => {
    return(
        <FormControl>
            <Select placeholder='Select Appliance'>
                <option value='Fridge'>Fridge</option>
                <option value='Kettle'>Kettle</option>
                <option value='Oven' > Oven</option>
            </Select>
        </FormControl>
    )
}

export default InputForm