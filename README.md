# 📝 Minimalist & Responsive Todo App

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20UI-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

A full-stack, responsive, and accessible Todo application built with **Node.js**, **Express**, **Vanilla JavaScript**, and **CSS3**. Features a sleek, modern card interface with real-time progress tracking, optimistic client-side updates, and an intuitive RESTful API.

---

## ✨ Features

- **⚡ Fast & Lightweight**: Zero bloated frontend libraries—built with high-performance Vanilla JS and modern CSS.
- **🎨 Modern Aesthetic Design**: Styled with a cohesive color palette, subtle elevation shadows, glass-like borders, and responsive typography.
- **📊 Real-time Progress Tracking**: Dynamic animated progress bar and counter tracking completed vs. pending tasks.
- **♿ Accessibility Built-in**: Full ARIA support (`role="progressbar"`, `aria-live="polite"`, `aria-label`), keyboard navigation, and semantic HTML5 elements.
- **🛡️ Robust Input Validation**: Dual-layer validation (client & server) preventing blank tasks and invalid payloads.
- **🔄 RESTful Backend API**: Clean endpoints for complete CRUD operations (Create, Read, Update, Delete) built with Express.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/) & [Express.js 5](https://expressjs.com/)
- **Frontend**: HTML5, Vanilla JavaScript (ES6+ Fetch API, async/await), and CSS3
- **Data Persistence**: In-memory task management (with pre-built structure ready for MongoDB, PostgreSQL, or SQLite integration)

---

## 📁 Project Structure

```text
to-do-list/
├── public/
│   ├── index.html       # Semantic HTML5 layout and accessibility markup
│   ├── styles.css       # Design tokens, responsive layout, animations
│   └── app.js           # Frontend client logic & REST API integration
├── .gitignore           # Git ignore rules for node_modules and logs
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Deterministic dependency lockfile
├── server.js            # Express server and REST API routes
└── README.md            # Documentation and setup instructions
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer recommended) and `npm` installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pasta-07/TODO-list.git
   cd TODO-list
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000) to start managing your tasks.

---

## 🔌 API Reference

The backend provides a RESTful JSON API under `/api/todos`:

| Method | Endpoint | Description | Request Body | Response |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/todos` | Fetch all tasks | *None* | `200 OK` + Array of todo items |
| `POST` | `/api/todos` | Create a new task | `{ "text": "Task description" }` | `201 Created` + Created todo item |
| `PATCH` | `/api/todos/:id` | Update task text or status | `{ "text"?: string, "completed"?: boolean }` | `200 OK` + Updated todo item |
| `DELETE` | `/api/todos/:id` | Delete a task by ID | *None* | `204 No Content` |

### Example Todo Object

```json
{
  "id": "1",
  "text": "Complete project documentation",
  "completed": false
}
```

---

## 🔮 Future Enhancements

- [ ] Persistent database storage (SQLite / MongoDB)
- [ ] Task categories, tags, and priority levels
- [ ] Due dates and reminder notifications
- [ ] Dark / Light mode toggle
- [ ] Drag-and-drop task reordering

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
