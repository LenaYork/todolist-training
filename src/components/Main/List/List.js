import React from 'react';

import "./List.css";

const todoList = [
    'раз ромашка',
    'два ромашка',
    'три ромашка',
    'а я четвертую сорвал',
    'пять два ромашка',
    'шесть ромашка',
    'семь'
]

export function List() {
    return(
        <div className='todo-list'>
            {todoList.map(todo => (
                <div className="todo-item">
                    {todo}
                </div>
            ))}
        </div>
    )
}
