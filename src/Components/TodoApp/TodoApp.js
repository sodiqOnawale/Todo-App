import { React, useState } from "react";
import "./TodoApp.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoLists from "../TodoLists/TodoLists";

let nextId = 0

function TodoApp() {
    const [todoItems, setTodoItems] = useState([]);

    function handleTodoItems(inputValue) {
        if(inputValue) {
            setTodoItems([
            ...todoItems,
            {
                inputValue: inputValue, 
                checked: false,
                id: nextId++
            }
            ])
        }
    }

    console.log('items>>>', todoItems)          

    function handleRemoveTodo(todoItem) {
        const todo = todoItems.filter(currentTodoItem => currentTodoItem.id !== todoItem.id)
        setTodoItems(todo)
    }

    function handleChecked(itemID, nextCheck) {
        setTodoItems(todoItems.map(todoItem => {
            if(todoItem.id === itemID) {
                return {...todoItem, checked: nextCheck}
            } else {
                return todoItem
            }
        }))
    }

    return (
        <div className="TodoApp">
            <header>
                <div>TODOS</div>
            </header>
            <TodoInput handleTodoItems={handleTodoItems} />
            <TodoLists 
                todoItems={todoItems}
                handleRemoveTodo={handleRemoveTodo}
                handleChecked={handleChecked}
            />
        </div>
    );
}

export default TodoApp;
