import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
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
    const [selected,setSelected] = useState(options[0]);
    return (
        <div>   
            <Header />
            {/* accordian path */}
         <Route path="/">
             {/* prvided as children to the outer component */}
             <Accordion items={items}/>
         </Route>
                  {/* Search Component path */}
        <Route path="/list">
             <Search/>
         </Route>

         {/* dropdown  path */}
         <Route path="/dropdown">
             <DropDown
             label="Select a color"
             options={options}
             selected={selected}
             onSelectedChange={setSelected}
             />
         </Route>

        {/* translate */}
         <Route path="/translate">
             <Translate/>
         </Route>
        </div>
    )
};

