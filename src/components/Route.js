
//takes the path and children
//sets the route for each of the pages
export default function Route({path, children}) {
    return  window.location.pathname === path 
    ? children 
    : null;
}
