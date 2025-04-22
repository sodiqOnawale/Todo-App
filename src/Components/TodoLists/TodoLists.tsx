import React from "react";
import DeleteTodoLogo from "../DeleteTodo/DeleteTodoLogo";
import './TodoList.css'
import { TodoItem } from "../TodoApp/TodoApp";

interface TodoListProps {
    todoItems: TodoItem[],
    handleRemoveTodo: (TodoItem: TodoItem) => void
    handleChecked: (itemID: number, nextCheck: boolean) => void
}

function TodoLists({todoItems, handleRemoveTodo, handleChecked}: TodoListProps) {
    return (
        <ul className="todo-list">
                {
                    todoItems?.map((todoItem: TodoItem) => {
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
                                <span onClick={() => handleRemoveTodo(todoItem)} className="deleteTodo">
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