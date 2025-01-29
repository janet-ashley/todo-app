import React, { useEffect, useState } from "react";
import { useStoreTasks } from "../Stores/tasks";

const TasksPage = () => {
  const { data, loading, error, fetchTasks, addTask, deleteTask } = useStoreTasks();
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = () => {
    if (newTask.title) {
      addTask(newTask);
      setNewTask({ title: "", description: "" });
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Tasks</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading tasks!</p>}
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {data?.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
