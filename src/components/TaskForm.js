import "./TaskForm.scss";
import React from "react";

export default function TaskForm({ tasks }) {
  const [task, setTask] = React.useState("");

  return (
    <form
      className="TaskForm"
      onSubmit={(event) => {
        event.preventDefault();
        tasks(task);
        setTask("");
      }}
    >
      <input
        type="text"
        id="user-input"
        placeholder="I need to..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button id="submit">Add Task</button>
    </form>
  );
}
