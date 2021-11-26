import React from 'react';
import { Button } from "./../../common/Button";
import "./Input.css";

export function Input() {
    return(
        <div className="inputForm">
            <Button className="green-button" text="add"/>
            <input type="text" className="inputItem" placeholder="Enter your to-do here" maxlength="50"></input>
        </div>
    )
}