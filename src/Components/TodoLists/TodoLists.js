import React from "react";
import DeleteTodoLogo from "../DeleteTodo/DeleteTodoLogo";
import './TodoList.css'

function TodoLists({todoItems, handleRemoveTodo, handleChecked }) {
    return (
        <ul className="todo-list">
                {
                    todoItems.map(todoItem => {
                        return (
                            <li key={todoItem.id} className="todo-item">
                                <input
                                    type="checkbox"
                                    checked={todoItem.checked}
                                    onChange={e => {
                                        handleChecked(todoItem.id, e.target.checked)
                                    }}
                                />
                                {todoItem.checked ? <s>{todoItem.inputValue}</s> : <span>{todoItem.inputValue}</span>}
                                <span onClick={() => handleRemoveTodo(todoItem)} className="deleteTodo" >
                                    <DeleteTodoLogo />
                                </span>
                            </li>
                        )
                    })
                }     
        </ul>
    )
}

export default TodoLists;