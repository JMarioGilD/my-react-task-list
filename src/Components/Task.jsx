import React, { useState } from "react";

function Task(props) {
    const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    props.TaskList(value);
    setValue("");
    
    return false;
  };

  return (
    <form className="Task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Introduce una tarea"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default Task
