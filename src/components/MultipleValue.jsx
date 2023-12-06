import { Button } from "react-bootstrap";
import Select from "react-select";
import {useState} from "react"

const MultipleValue = ({options,buttonContent, selectedValue,setSelectedValue}) => {
    
     
    const handleInputChange = (selectedOptions) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setSelectedValue(values);
    };
    
    return (
        <div className="d-flex gap-2">
        <Select
            isMulti
            name="Invoice List"
            options={options}
            classNamePrefix="select"
            onChange={handleInputChange}
            value={selectedValue.map(value => ({ value, label: value }))}
        />
            <Button variant="dark mb-2 mb-md-4" onClick={() => console.log(selectedValue)}>{ buttonContent}</Button>
        </div>
    );
}

export default MultipleValue;
