import { React, useState } from "react";
import "./TodoApp.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoLists from "../TodoLists/TodoLists";

function TodoApp() {
  const [todoItems, setTodoItems] = useState([]);

  function handleTodoItems(inputValue) {
    setTodoItems(inputValue);
    inputValue.length && todoItems.push(inputValue);
    setTodoItems([...todoItems]);
  }

  function handleRemoveTodo(todoItem) {
    const todo = todoItems.filter(currentTodoItem => currentTodoItem !== todoItem)
    setTodoItems(todo)
  }

  return (
    <div className="TodoApp">
      <header>
        <div>TODOS</div>
      </header>
      <TodoInput handleTodoItems={handleTodoItems} />
      {todoItems.map((item) => {
        return <TodoLists 
                  items={item}
                  key={item}
                  handleRemoveTodo={handleRemoveTodo}
                />;
      })}
    </div>
  );
}

export default TodoApp;
