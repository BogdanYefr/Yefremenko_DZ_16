import { useState } from "react";
import MyInput from "./Input";
import MySelect from "./Select";

function ToDoForm({ addTask }) {
  const defaultFormValue = {
    title: "",
    description: "",
    status: "Open",
  };

  const statusOptions = [
    { value: "Open", name: "Open" },
    { value: "In progress", name: "In progress" },
    { value: "Done", name: "Done" },
  ];

  const [formValue, setFormValue] = useState(defaultFormValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formValue);
    setFormValue(defaultFormValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        label="Title:"
        name="title"
        placeholder="Enter title"
        formValue={formValue}
        setFormValue={setFormValue}
        handleSubmit={handleSubmit}
      />
      <br />
      <MyInput
        label="Description:"
        name="description"
        placeholder="Enter description"
        formValue={formValue}
        setFormValue={setFormValue}
        handleSubmit={handleSubmit}
      />
      <br />
      <MySelect
        className={"input-form"}
        options={statusOptions}
        name="status"
        label="Status:"
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <br />
      <button>Створити задачу</button>
    </form>
  );
}

export default ToDoForm;
