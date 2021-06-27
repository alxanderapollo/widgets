import React, {useState} from 'react';
import DropDown from './DropDown'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];
//providing our list otions to our componetn
export default function Translate() {
    const [language,setLanguage] = useState(options[0]);

    //DropDown expects certain params look at drop down 
    return (
        <div>
            <DropDown 
            label="Select a Language"
            selected={language} 
            onSelectedChange= {setLanguage}
            options={options}
            />
        </div>
    )
}
