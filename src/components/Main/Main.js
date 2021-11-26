import React from 'react';
import {Input} from './Input';
import { List } from './List';
import { Buttons } from './Buttons';
import './Main.css';

export function Main() {
    return( 
        <div className="main-container">
            <Input />
            <List />
            <Buttons />
        </div>
    )
}