import React from 'react';

import "./List.css";
import { Todo } from "./Todo/Todo";
export class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {text: 'раз ромашка', isChecked: false},
                {text: 'два ромашка', isChecked: false},
                {text: 'три ромашка', isChecked: false},
                {text: 'а я четвертую сорвал', isChecked:true},
                {text: 'пять два ромашка', isChecked:false},
                {text: 'шесть ромашка', isChecked:false},
                {text: 'семь', isChecked:false}
            ]
        }
    }

    render() {
        return(
            <div className='todo-list'>
                {this.state.todos.map( (item) => {
                    return (
                        <Todo text={item.text} isChecked={item.isChecked} />
                    )
                } )}
            </div>
        )
    }  
}
