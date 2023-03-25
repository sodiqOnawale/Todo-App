import React from "react";
import DeleteTodoLogo from "../DeleteTodo/DeleteTodoLogo";
import './TodoList.css'

function TodoLists({ items, handleRemoveTodo }) {
    function removeTodo() {
        handleRemoveTodo(items)
    }
    return (
        <div className="todo-list">
            <div className="todo-item">
                <input type="checkbox"></input>
                <span>{items}</span>
                <span onClick={removeTodo}>
                    <DeleteTodoLogo />
                </span>
            </div>
        </div>
    )
}

export default TodoLists