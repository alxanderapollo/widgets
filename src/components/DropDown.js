import React, {useState, useEffect,useRef} from 'react';
export default function DropDown({options, selected, onSelectedChange}) {
    //piece of state responsible for toggling the drop down menu
    const [open,setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
    
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);
    
      useEffect(() => {
        document.body.addEventListener(
          "click",
          () => {
            setOpen(false);
          },
          { capture: true }
        );
      }, []);
    

    const renderedOptions = options.map(option =>{
        //if the currently seclected item is equal to the selected option value  do nothing 
        if(option.value === selected.value){return null }

        // our key is the option value
        // the key is the value so red, green or blue
       {/*Then the label that is being printed is the one that was created in the previous page */}
       //items 
    return (
    
        <div
            key={option.value} 
            className="item"
            onClick={() => {
                // console.log("Item Clicked")
                onSelectedChange(option)
            }}
        >
        {option.label}
        </div>
    );
});


    //visible  active and visiable transition
    //inside of the div, these two things are responsible for whether the drop down closes 
    //or not so for us selection drop down, using the above peice of state we are saying, if its open keep the menu showing, otherwise close it and
    //for menu if we are still looking at oprions keep it visiable otherwise close the menu
    //will be using a piece of state to control when to toggle the drop down menu and when to not
    //!open means to set the opposite
    //! ui form is our most parent component which is why it contains useRef
    //console.log('my ref' + ref.current); //get a refrence to that 
    return (
        <div ref  = {ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                {/* if open is true set to visiable active meaning drop down the menus other wise close */}
                <div onClick={() => {
                    // console.log("DropDown Clicked");
                      setOpen(!open);
                }}
                className={`ui selection dropdown ${open ?'visible active': ''}`}>
                <i className="dropdown icon"></i>
                <div className="text"> {selected.label}</div>
                <div className={`menu ${open ? 'visible transition': ''}`}>
                    {renderedOptions}
                </div>

                </div>
            </div>
        </div>
    )
}
