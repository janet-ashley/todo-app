import express from "express";
import cors from "cors";
import { tasks } from "./data/tasks.js";

const app = express();
const port = 3000;

// Middleware pour permettre les requêtes CORS
app.use(cors());

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// GET /tasks - Get all tasks
app.get("/", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});

// POST /tasks - Create a new task
app.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description: description || "",
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Update a task
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  // Update task properties
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.status(200).json(task);
});

// DELETE /tasks/:id - Delete a task
app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const index = tasks.findIndex((t) => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);
  res.status(200).json({ message: "Task deleted successfully" });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
