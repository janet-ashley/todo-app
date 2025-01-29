import React, { useEffect } from "react";
import { useStoreTasks } from "../Stores/tasks";
import { useParams } from "@tanstack/react-router";

const Task = () => {
const {taskid} = useParams({ from: '/task/$taskid' })
  return (
  <h1>Task {taskid} </h1>
  );
};

export default Task;