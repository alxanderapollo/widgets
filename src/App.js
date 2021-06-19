import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
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


export default function App() {
    return (
        <div>   
            {/* <Accordion items={items}/> */}
            <Search/>
        </div>
    )
};

