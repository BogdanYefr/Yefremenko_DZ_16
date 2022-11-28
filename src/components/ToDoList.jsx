import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, removeTask, handleToggle }) => {
  if (!todos) {
    return <span>Задачi вiдстутнi!</span>;
  }
  return (
    <div>
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
