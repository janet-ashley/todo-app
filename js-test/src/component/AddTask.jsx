import React, { useState } from "react";
import { useStoreTasks } from "../Stores/tasks";

const AddTask = () => {
  const { addTask } = useStoreTasks();
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title) {
      addTask(newTask);
      setNewTask({ title: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
     
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        required
      />
      <input
      className="input"
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;