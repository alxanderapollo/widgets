//The link is just going to display a link as anchor element, which will be on cllick event 
//the point of this is that before with the navigation bar, each page reload would request information
//this could be a problem if you're constantly pulling from an API 
//so now that event.PreventDefault is written into the code editor there isnt that problem
//now we should be able to change the url without causing a page refresh and we do that by using the window.history.pushState({},'',href);
import React from 'react';

//takes the class name, a link to the routing page 
export default function Link({className,href, children}) {
    const onClick =( event)=>{

        // if a user is on mac or PC and on mac want to use the command key to open up a new page inside of a new window or ctrl (windows)
        if(event.metaKey || event.ctrlKey){
            return;
        }

        // prevents a full page reload
        event.preventDefault();
        //will allow us to change url's without  the need of refreshing a page
        window.history.pushState({},'',href);
        // the next two lines of code will communicate to react that the url just changed
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    };
    return <a onClick= {onClick}className= {className} href={href}>{children}</a>
}
