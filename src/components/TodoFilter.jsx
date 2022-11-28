import React from "react";
import MySelect from "./Select";

const TodoFilter = ({
  filterSettings,
  setFilterSettings,
  filterLabel,
  sortLabel,
}) => {
  const sortOptions = [
    { value: "", name: "Default" },
    { value: "creationDate", name: "Creation Date" },
    { value: "updateDate", name: "Update date" },
  ];
  const filterOptions = [
    { value: "", name: "All" },
    { value: "Open", name: "Open" },
    { value: "In progress", name: "In progress" },
    { value: "Done", name: "Done" },
  ];

  return (
    <div>
      <MySelect
        className={"input-form"}
        label={sortLabel}
        name="sort"
        formValue={filterSettings}
        setFormValue={setFilterSettings}
        options={sortOptions}
      />
      <br />
      <MySelect
        className={"input-form"}
        options={filterOptions}
        formValue={filterSettings}
        name="filter"
        label={filterLabel}
        setFormValue={setFilterSettings}
      />
    </div>
  );
};

export default TodoFilter;
