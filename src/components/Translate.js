import React, {useState} from 'react';
import DropDown from './DropDown'
import Convert from './Convert'

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
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Irish',
        value: 'ga'
    },
    {
        label: 'Korean',
        value: 'ko'
    },
    {
        label: 'Turkish',
        value: 'tr'
    },
    {
        label: 'Vietnamese',
        value: 'vi'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];
//providing our list otions to our componetn
export default function Translate() {
    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('')

    //DropDown expects certain params look at drop down 
    return (
        <div>
              {/* text box so use can enter values */}
            <div className="ui form">
                <div className="field">
                    <labe>Enter Text</labe>
                    <input value={text} onChange={(e) =>setText(e.target.value)}/>
                </div>
            </div>

            <DropDown 
            label="Select a Language"
            selected={language} 
            onSelectedChange= {setLanguage}
            options={options}
            />
            <hr/>
            <h3 className="ui header">OUTPUT</h3>
            <Convert text={text} language={language}/>
        </div>
    );
}
