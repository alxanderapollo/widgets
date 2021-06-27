import {useEffect, useState} from 'react';


//takes the path and children
//sets the route for each of the pages
export default function Route({path, children}) {
    //this piece of state only exists go get our route path update
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {

        const onLocationChange = (event) => {
            //the value gets updated to the value of whatever current path the user is currently on
            setCurrentPath(window.location.pathname)
            
        };
  
        window.addEventListener('popstate',onLocationChange)

        //clean up function to remove addEventListener
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };

    //want this function to run only once
    },[]);
    return  currentPath === path ? children : null;
}
