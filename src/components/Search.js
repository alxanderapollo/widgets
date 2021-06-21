import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function Search() {
    //1.need to create a piece of state to keep track of the value that is being generated inside the search by the user,
    //so in the search bar take in what is brought through the text box and store it as a value and update our term varaible(hooks) with it
    //2. wil use hooks for this
    const [term, setTerm] = useState('');

    // Use effect needs to be told when to carry out one of these three scenarios,
    // So to do that we need to pass a second argument inside of the function of useEffect. 
    // That Second argument controls when our code gets executed, 3 possible arguments, an empty array, an array 
    // with many elements in it or nothing [term, apples] ,[], ‘’
    useEffect(()=>{
        
    }, [term]);
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    {/* label that sits on top of the search bar */}
                    <label>Enter Search Term</label>
                        {/* input search box */}
                        <input className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        />

                </div>
            </div>
        </div>
    )
}
