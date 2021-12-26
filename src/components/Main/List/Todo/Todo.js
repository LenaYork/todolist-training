import "./Todo.css";

export const Todo = (props) => {
    return(
    <div className="Todo">
        <input type="checkbox" className="todo-checkbox" checked={props.isChecked} disabled/>
        <p className="todo-text">{props.text}</p>
    </div>
    )
}