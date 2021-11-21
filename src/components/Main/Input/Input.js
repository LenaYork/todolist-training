import React from 'react';
import "./Input.css";

export function Input() {
    return(
        <div className="inputForm">
            <button className="addInputButton">add</button>
            <input type="text" className="inputItem" placeholder="Enter your to-do here" maxlength="50"></input>
        </div>
    )
}