import React from 'react';
import "./Buttons.css";

export function Buttons() {
    return(
        <div className="buttons-container">
            <input type="text" className="total-counter" placeholder="0" title="total" disabled />
            <button type="button" className="done-button">Done</button>
            <button type="button" className="pending-button">Pending</button>
            <button type="button" className="all-button">All</button>
            <button type="button" className="delete-button">Del</button>
        </div>
    )
}