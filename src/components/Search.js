import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function Search() {
    //1.need to create a piece of state to keep track of the value that is being generated inside the search by the user,
    //so in the search bar take in what is brought through the text box and store it as a value and update our term varaible(hooks) with it
    //2. wil use hooks for this
    
    const [term, setTerm] = useState('programming'); //default search 
    const [results, setResults] = useState([]);//resulting json query will live in this array

    // Use effect needs to be told when to carry out one of these three scenarios,
    // So to do that we need to pass a second argument inside of the function of useEffect. 
    // That Second argument controls when our code gets executed, 3 possible arguments, an empty array, an array 
    // with many elements in it or nothing [term, apples] ,[], ‘’
    useEffect(()=>{
        //valid varaible, the paren at the end invokes the function
      const search = async () => {
          //url will go towiki and do a search
          //whats returned is the desired data whcih will be picked apart for results we need
      const {data} =  await axios.get('https://en.wikipedia.org/w/api.php', {
            //any valyes written in here will be appended to the end
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format:'json',
                srsearch: term,
            },
        });
        setResults(data.query.search); //setting results to the data that we obtained from the api request
      };
    if(term && !results.length){
        search();

    }else{
        //we want a few seconds to go before the search starts when a user enters, 500 mili seconds 
        //any additional change should restart the timer, we can use the clear timeout
        const timeoutId = setTimeout(() => {
            //if term isnt empty run a search otherwise dont do anything
            if(term){
                //invoke the above
                search();
            }
        //500 mili second timer
        },500);

        return () =>{
            clearTimeout(timeoutId);
        };
    }
    }, [term]);

    //pulling out the data want using a map
    const renderedResults = results.map((result)=>{
        // each reust query has a page id
        return (
        <div key ={result.pageid} className="item">
            <div className="right floated content">
                <a className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                    Go
                </a>

            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                <span dangerouslySetInnerHTML = {{ __html:result.snippet}}></span>
              
                </div>
                
            </div>
        </div>
        )
    });

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
            <div className="ui celled list">
                {renderedResults}

            </div>
        </div>
    )
}
