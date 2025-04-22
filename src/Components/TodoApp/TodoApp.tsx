import React, { useState } from "react";
import "./TodoApp.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoLists from "../TodoLists/TodoLists";
import TodoFooter from "../TodoFooter/TodoFooter";

let nextId = 0;

export interface TodoItem {
    inputValue: string;
    checked: boolean;
    id: number;
}

function TodoApp() {
    const [todoItems, setTodoItems] = useState<TodoItem[]>(
        JSON.parse(localStorage.getItem('items') || '[]')
    );

    const [isChecked, setIsChecked] = useState(
        typeof JSON.parse(localStorage.getItem('isChecked') || '[]') === 'boolean' ? JSON.parse(localStorage.getItem('isChecked') || '[]') : null
    );

    function handleCreateTodo(inputValue: string) {
        if (inputValue) {
            setTodoItems([
                ...todoItems,
                {
                    inputValue: inputValue,
                    checked: false,
                    id: nextId++,
                },
            ]);
            console.log('todoitems>>', todoItems)
            localStorage.setItem('items', JSON.stringify(
                [
                    ...todoItems,
                    {
                        inputValue: inputValue,
                        checked: false,
                        id: nextId++,
                    },
                ]
            ));      
        }
    }

    function handleRemoveTodo(todoItem: TodoItem) {
        const todo = todoItems.filter(currentTodoItem => currentTodoItem.id !== todoItem.id);
        setTodoItems(todo);
        localStorage.setItem('items', JSON.stringify(todo));      
    }

    function handleChecked(itemID: number, nextCheck: boolean) {
        setTodoItems(
            todoItems.map((todoItem) => {
                if (todoItem.id === itemID) {
                    return { ...todoItem, checked: nextCheck };
                } else {
                    return todoItem;
                }
            })
        );
        localStorage.setItem('items', JSON.stringify(
            todoItems.map((todoItem) => {
                if (todoItem.id === itemID) {
                    return { ...todoItem, checked: nextCheck };
                } else {
                    return todoItem;
                }
            })
        ));      
    }

    function handleAllTodo() {
        setIsChecked(null)
        localStorage.setItem('isChecked', JSON.stringify(null))
    }

    function handleActiveTodo() {
        setIsChecked(false)
        localStorage.setItem('isChecked', JSON.stringify(false))
    }

    function handleCompletedTodo() {
        setIsChecked(true)
        localStorage.setItem('isChecked', JSON.stringify(true))
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
        localStorage.setItem('items', JSON.stringify(activeTodos));      
    }

    return (
        <div className="TodoApp">
        <div>
            <header>
            <div>TODOS</div>
            </header>
            <TodoInput handleCreateTodo={handleCreateTodo} />
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
