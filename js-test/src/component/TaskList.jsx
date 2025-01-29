import React, { useEffect } from "react";
import { useStoreTasks } from "../Stores/tasks";
import { Link } from "@tanstack/react-router";

const TaskList = () => {
  const { data, loading, error, fetchTasks, deleteTask } = useStoreTasks();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks!</p>;

  return (
    <ul>
      {data?.map((task) => (
        <li key={task.id}>
          <h3>{task.title}

            <Link  to={`/task/${task.id}`}> {task.title} </Link>
          </h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
