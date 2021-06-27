//The link is just going to display a link as anchor element, which will be on cllick event 
//the point of this is that before with the navigation bar, each page reload would request information
//this could be a problem if you're constantly pulling from an API 
//so now that event.PreventDefault is written into the code editor there isnt that problem
//now we should be able to change the url without causing a page refresh
import React from 'react';

const onClick =( event)=>{
    // prevents a full page reload
    event.preventDefault();
};
//takes the class name, a link to the routing page 
export default function Link({className,href, children}) {
    return <a onClick= {onClick}className= {className} href={href}>{children}</a>
}
