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

// export function List() {
//     return(
//         <div className='todo-list'>
//             {todoList.map(todo => (
//                 <div className="todo-item">
//                     {todo}
//                 </div>
//             ))}
//         </div>
//     )
// }

export class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "state1" : "I am state! Use me please!!!"
        }
    }

    render() {
        return(
            <div className='todo-list'>
                {todoList.map(todo => (
                    <div className="todo-item">
                        {todo}
                    </div>
                ))}
                <div>
                    <p>{this.state.state1}</p>
                    <p>{this.props.crazyProps}</p>
                </div>
            </div>
        )
    }  
}
