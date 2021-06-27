import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
const items =[
    
    {
        title: 'What is React',
        content:'React is a front end javascript framework '
    },
    {
        title: 'Why use React?',
        content:'React is a fav javascript framework  among engineers'
    },
    {
        title: 'How do you use React?',
        content:'you use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
]


export default function App() {
    //functionality to toggle whehter or not show the drop down at all

    return (
        <div>   
            <Translate/>
        </div>
    )
};

