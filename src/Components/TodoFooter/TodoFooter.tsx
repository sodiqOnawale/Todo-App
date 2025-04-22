import React from "react";
import './TodoFooter.css'
import { TodoItem } from "../TodoApp/TodoApp";

interface TodoFooterProps {
    todoItems: TodoItem[],
    handleCompletedTodo: () => void,
    handleActiveTodo: () => void,
    handleAllTodo: () => void,
    isChecked: boolean
    handleClearCompletedTodo: () => void
}

function TodoFooter({   
                        todoItems,
                        handleCompletedTodo, 
                        handleActiveTodo, 
                        handleAllTodo, 
                        isChecked, 
                        handleClearCompletedTodo 
                    }: TodoFooterProps) {
    let count = 0;
    todoItems.map(item => item.checked === false ? count++ : count)

    return (
        <div className="todo-footer">
            {
                todoItems.length > 0 ? <div className="todo-item">
                    <span>{count} items left</span>
                    <div className="todo-footer-action2">
                        <button className={`filter-button${isChecked === null ? ' is-checked' : ''}`} onClick={()=> handleAllTodo()}>all</button>
                        <button className={`filter-button${isChecked === false ? ' is-checked' : ''}`} onClick={() => handleActiveTodo()}>active</button>
                        <button className={`filter-button${isChecked === true ? ' is-checked' : ''}`} onClick={() => handleCompletedTodo()}>completed</button>
                    </div>
                    <button onClick={() => handleClearCompletedTodo()}>clear completed</button>
                </div> : "" 
            }
        </div>
    )
}

export default TodoFooter