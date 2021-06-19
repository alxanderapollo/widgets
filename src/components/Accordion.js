//importing in the useState component from the React library 
import React, {useState} from 'react';


// recives an object with a list of items
export default function Accordion({items}) {
    //1.first arg is the piece of state we are calling, its a refrence to some varaible or so some value that is going to change over time(getter)
    //2. the second arg is a function that we use to update our piece of state(setter), and we update with SetActiveIndex 
    //the names themselves arent special and can be changed to whatever we desire
    const [activeIndex, setActiveIndex] = useState(null);//null is the initally set val for activeIndex

    //helper function to know if a user clicked any of the accordian fans 
    const onTitleClick = (index) =>{
        //will console log when the user clicks
        //console.log('Title clicked', index+1);

        //hooks version of class initlization
        setActiveIndex(index+1);
    };
    
    // function to map each title with the corrsponding content in a map
    // index is the postion of the drow down accordion option, added so we can display it on the screen
    const renderedItems = items.map((item, index) => {
        //if the index of the item that we are currently on is equal to the activeIndex piece of state then set to active otherwise to nothing
        const active = index+1 === activeIndex ? 'active' : '';

        return (
        // the reason the key is title is because it is unique across all the objects
        //the html div element is in confluct with the styling of ui-semantics, its loading as an extra elt
        // to change that will use a React fragment which wont return an html elt, but be read as a  jsx elt 
        <React.Fragment key = {item.title}>
            <div 
            className={`title ${active}`}
            // arrow function is necessary becasue we dont want the function to run the instant the page is reloaded but only when a user clicks on it
            onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>

                {/* title  */}
                {item.title}
            </div>

            <div className= {`content ${active}`}>
                {/* content of the obj */}
                <p>{item.content}</p>
            </div>
            {/* outter div */}
        </React.Fragment>   
        )
        
    });
    return (
        <div className="ui styled accordion">
            {/* prints out the number of items in the object  */}
            {renderedItems}
        </div>
    )
};
