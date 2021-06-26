import React, {useState} from 'react';
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
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
]


export default function App() {
    const [selected, setSelected] = useState(options[0]) ;
    //functionality to toggle whehter or not show the drop down at all
    const [showDropDown,setShowDropDown] = useState(true);//drop down shows by default

    return (
        <div>   
            {/* <Accordion items={items}/> */}
            {/* drop down has 3 diffrent items options, is all the possible colors 
            selected is currently the useEffect param it is pointing at 
            onSelectedChange will change everytime a user chooses a diffrent color*/}

            <button onClick = {() => setShowDropDown(!showDropDown)}>Toggle Drop Down</button>
            {showDropDown ? 
                <DropDown 
                    selected={selected} 
                    options={options}
                    onSelectedChange={setSelected}
                /> : null
            }
        </div>
    )
};

