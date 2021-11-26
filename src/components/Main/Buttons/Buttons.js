import React from 'react';
import { Button } from "../../common/Button";
import "./Buttons.css";

export function Buttons() {
    return(
        <div className="buttons-container">
            <input type="text" className="total-counter" placeholder="0" title="total" disabled />
            <Button className="green-button" text="Done"/>
            <Button className="green-button" text="Pedning"/>
            <Button className="red-button" text="All"/>
        </div>
    )
}