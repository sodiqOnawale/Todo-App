import {React, useState} from "react";
import "./TodoInput.css"

function TodoInput({ handleTodoItems }) {
    const [inputValue, setInputValue] = useState('')

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
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="What needs to be done?"
                />
            </form>        
        </div>
    )
}

export default TodoInput