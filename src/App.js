import { useMemo, useState } from "react";
import TodoFilter from "./components/TodoFilter";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterSettings, setFilterSettings] = useState({
    sort: "",
    filter: "",
  });

  const addTask = (formValue) => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: formValue.title,
      description: formValue.description,
      status: formValue.status,
      creationDate: new Date(),
      updateDate: new Date(),
    };
    setTodos([...todos, newItem]);
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const sortedTodos = useMemo(
    () =>
      filterSettings.sort
        ? [...todos].sort((a, b) =>
            a[filterSettings.sort].getTime() < b[filterSettings.sort].getTime()
              ? 1
              : -1
          )
        : todos,
    [filterSettings.sort, todos]
  );

  const sortedAndFilteredTodos = useMemo(
    () =>
      filterSettings.filter
        ? sortedTodos.filter((todo) => todo.status === filterSettings.filter)
        : sortedTodos,
    [sortedTodos, filterSettings.filter]
  );

  const changeStatus = (status) =>
    status === "Open"
      ? "In progress"
      : status === "In progress"
      ? "Done"
      : "Open";

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: changeStatus(todo.status),
              updateDate: new Date(),
            }
          : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <ToDoForm addTask={addTask} />
      <hr style={{ margin: "15px 0" }}></hr>
      <TodoFilter
        sortLabel="Cортувати по:"
        filterLabel="Фiльтрувати по статусу:"
        filterSettings={filterSettings}
        setFilterSettings={setFilterSettings}
      />
      <hr style={{ margin: "15px 0" }}></hr>
      <ToDoList
        todos={sortedAndFilteredTodos}
        handleToggle={handleToggle}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
