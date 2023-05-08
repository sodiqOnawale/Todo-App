import { React, useState } from "react";
import "./TodoApp.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoLists from "../TodoLists/TodoLists";
import TodoFooter from "../TodoFooter/TodoFooter";

let nextId = 0;

function TodoApp() {
        const [todoItems, setTodoItems] = useState([]);

        const [isChecked, setIsChecked] = useState(null)

        function handleTodoItems(inputValue) {
            if (inputValue) {
                setTodoItems([
                    ...todoItems,
                    {
                        inputValue: inputValue,
                        checked: false,
                        id: nextId++,
                    },
                ]);
                }
        }

    function handleRemoveTodo(todoItem) {
        const todo = todoItems.filter(
        (currentTodoItem) => currentTodoItem.id !== todoItem.id
        );
        setTodoItems(todo);
    }

    function handleChecked(itemID, nextCheck) {
        setTodoItems(
        todoItems.map((todoItem) => {
            if (todoItem.id === itemID) {
            return { ...todoItem, checked: nextCheck };
            } else {
            return todoItem;
            }
        })
        );
    }

    function handleAllTodo() {
        setIsChecked(null)
    }

    function handleActiveTodo() {
        setIsChecked(false)
    }

    function handleCompletedTodo() {
        setIsChecked(true)
    }

    const visibleTodos = todoItems.filter(item => {
        if (isChecked === null) {
            return true
        }
        return item.checked === isChecked
    })

    function handleClearCompletedTodo() {
        const  activeTodos = todoItems.filter(item =>  item.checked === false)
        setTodoItems(activeTodos)
    }

    return (
        <div className="TodoApp">
        <div>
            <header>
            <div>TODOS</div>
            </header>
            <TodoInput handleTodoItems={handleTodoItems} />
            <TodoLists
                todoItems={visibleTodos}
                handleRemoveTodo={handleRemoveTodo}
                handleChecked={handleChecked}
            />
        </div>
        <TodoFooter
            todoItems={todoItems}
            handleAllTodo={handleAllTodo}
            handleCompletedTodo={handleCompletedTodo}
            handleActiveTodo={handleActiveTodo}
            isChecked={isChecked}
            handleClearCompletedTodo={handleClearCompletedTodo}
        />
        </div>
    );
}

export default TodoApp;
