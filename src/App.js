import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
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
        label: 'The Color Gree',
        value: 'gree'
    },
    {
        label: 'The Color blue',
        value: 'blue'
    },
]


export default function App() {
    return (
        <div>   
            {/* <Accordion items={items}/> */}
            <DropDown options={options}/>
        </div>
    )
};

