
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// In-memory storage for todos
let todos = [];
let nextId = 1;

// GET: Fetch all todos
app.get("/api/todos", (req, res) => {
  res.status(200).json(todos);
});

// POST: Create a new todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body;

  // Validate input
  if (typeof text !== "string" || text.trim() === "") {
    return res.status(400).json({
      message: "Task text cannot be empty."
    });
  }

  const newTodo = {
    id: String(nextId++),
    text: text.trim(),
    completed: false
  };

  todos.push(newTodo);

  return res.status(201).json(newTodo);
});

// PATCH: Update a todo
app.patch("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  const todo = todos.find((item) => item.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found."
    });
  }

  // Update task text if provided
  if (text !== undefined) {
    if (typeof text !== "string" || text.trim() === "") {
      return res.status(400).json({
        message: "Task text cannot be empty."
      });
    }

    todo.text = text.trim();
  }

  // Update completion status if provided
  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({
        message: "Completed must be true or false."
      });
    }

    todo.completed = completed;
  }

  return res.status(200).json(todo);
});

// DELETE: Remove a todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex((item) => item.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({
      message: "Todo not found."
    });
  }

  todos.splice(todoIndex, 1);

  return res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Todo app is running at http://localhost:${PORT}`);
});
