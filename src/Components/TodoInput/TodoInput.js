import {React, useState} from "react";
import "./TodoInput.css"

function TodoInput({ handleTodoItems }) {
    const [inputValue, setInputValue] = useState('')

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setInputValue('')
        handleTodoItems(inputValue)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="todo-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="What needs to be done?"
                />
            </form>
            
        </div>
    )
}

export default TodoInput