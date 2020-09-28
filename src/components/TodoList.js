// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"

import Todo from "./Todo"

const TodoList = props => {
    return (
        <div className = "todo-list">
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggleTask={props.toggleTask}/>
            ))}
            <button className="clear-button" onClick={props.clearComplete}>
                clear completed tasks
            </button>
        </div>
    )
}

export default TodoList