import React, {useState, useEffect} from 'react';
import axios from 'axios'
//will recive the language and text as props
export default function Convert({language, text}) {

    const[translated, setTranslated] = useState('');
    const[debouncedText, setDebouncedText] = useState(text);

    //to prevent making requests everytime a user types in a single character
    useEffect( () => {
        const timerID =setTimeout(() =>{
            setDebouncedText(text);
        },500);
        //clean up function
        return () =>{
            clearTimeout(timerID);
        };
    }, [text]);

    useEffect(() => {
        //piece of state that will take the translating and help to output it
        const doTranslation = async () => {

            //3 args the first is the website, the second is for the body, but we dont want to do anything w/ that and the third
            //destructuring data so we can solely pick at the translation
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {
                 params: {
                     q: debouncedText,
                     target: language.value,
                     key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    
                 }
             }
            );
            //data from axios, acctual data
            setTranslated(data.data.translations[0].translatedText)
        };
        doTranslation(); //runs evertime we make a request with a new language 

        //anytime we get a new langauge or text we will run (rerender) that new piece of language
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
            
        </div>
    )
}
