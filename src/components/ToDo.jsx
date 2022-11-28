const ToDo = ({ todo, toggleTask, removeTask }) => {
  const creationDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(todo.creationDate);
  const updateDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(todo.updateDate);

  return (
    <div key={todo.id} className="item-todo">
      <div>
        <span>Title: {todo.title}</span>
        <br />
        <span> Description: {todo.description}</span>
        <br />
        <span> Creation Date: {creationDate}</span>
        <br />
        <span> Update Date: {updateDate}</span>
        <br />
        <span> Status: {todo.status}</span>
      </div>
      <div>
        <button className="edit-button" onClick={() => toggleTask(todo.id)}>
          Змiнити статус
        </button>
        <button className="delete-button" onClick={() => removeTask(todo.id)}>
          Закрити задачу
        </button>
      </div>
    </div>
  );
};

export default ToDo;
