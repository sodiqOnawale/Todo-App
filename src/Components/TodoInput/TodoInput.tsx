import React, {useState} from "react";
import "./TodoInput.css"

interface TodoInputProps {
    handleCreateTodo: (inputValue: string) => void
}

function TodoInput({ handleCreateTodo }: TodoInputProps) {
    const [inputValue, setInputValue] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setInputValue('')
        handleCreateTodo(inputValue)
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