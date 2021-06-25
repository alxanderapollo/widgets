import React from 'react';
export default function DropDown({options}) {
const renderedOptions = options.map(option =>{
    return (
        // our key is the option value
        <div key={option.value} className="item">
            {/* print out the label */}
            {option.label}
        </div>
    )
});

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">
                    Select a Color
                </label>
                <div className="ui selection dropdown visible active">
                <i className="dropdown icon"></i>
                <div className="text"> Select Color</div>
                <div className="menu visible transition">
                    {renderedOptions}
                </div>

                </div>
            </div>
        </div>
    )
}
