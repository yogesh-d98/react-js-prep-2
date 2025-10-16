# React JS Prep 2 - Sample Components Project

This is a React practice project covering essential React concepts, hooks, routing, and component lifecycle. It is designed for learning and experimenting with React features in a structured way.

---

## 📂 Project Structure

react-js-prep-2/
├─ react2/
│ ├─ public/
│ │ ├─ posts.mockdata.json # Mock JSON data for posts
│ │ └─ vite.svg # Vite logo asset
│ ├─ src/
│ │ ├─ assets/
│ │ │ └─ react.svg # React logo asset
│ │ ├─ Components/
│ │ │ ├─ Counter.jsx # Counter component demonstrating state, refs, context
│ │ │ ├─ Home.jsx # Home page listing posts and demonstrating context & navigation
│ │ │ ├─ Login.jsx # Login form with controlled inputs and validation
│ │ │ ├─ Notfound.jsx # 404 page for unmatched routes
│ │ │ └─ Post.jsx # Post details page using dynamic route param
│ │ ├─ doc-react-component-life-cycle/
│ │ │ └─ reactlifecycle.md # Documentation on React component lifecycle
│ │ ├─ index.css # Global CSS
│ │ └─ main.jsx # App entry point with router setup
│ ├─ .gitignore
│ ├─ eslint.config.js
│ ├─ index.html
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ README.md # This README
│ └─ vite.config.js
└─ README.md


---

## 🚀 Features

- **React Router v6**: Navigation between pages using `createBrowserRouter` and `RouterProvider`.
- **Functional Components**: All components are functional, leveraging hooks.
- **Hooks**:
  - `useState` → Local state management (`Counter`, `Login`).
  - `useEffect` → Side effects, fetch API data, cleanup with `AbortController`.
  - `useContext` → Sharing data globally (`Home` → `Counter` example).
  - `useRef` → Mutable values across renders (`Counter` component).
- **Dynamic Routes**: View post details with route params (`/post/:id`).
- **Error Handling**: 404 page using `Notfound` component.
- **Event Handling & Forms**: Controlled inputs, password validation, checkbox handling.
- **Conditional Rendering**: Render UI based on state or fetched data.
- **Navigation**: `Link` vs `<a>` tags for SPA-friendly routing.
- **Styling**: Bootstrap classes for cards, forms, and buttons.

---

## 📚 Documentation

- Detailed React **component lifecycle documentation** is available in `src/doc-react-component-life-cycle/reactlifecycle.md`.

---

## ⚡ How to Run

1. Clone the repository:

```bash
git clone <repo-url>
cd react-js-prep-2/react2
Install dependencies:

npm install


Start the development server:

npm run dev


Open the app in your browser:

http://localhost:5173

🔗 Routes Overview
Route	Component	Description
/	Home	Lists posts with navigation to individual posts
/login	Login	Login form with validation
/counter	Counter	Counter with state, refs, and context demonstration
/post/:id	Post	Displays a single post based on dynamic route param
*	Notfound	Fallback 404 page
🛠 Key Concepts Covered

React Hooks: useState, useEffect, useContext, useRef

Functional components and component composition

Context API for global state

Client-side routing with React Router v6

Controlled forms and event handling

Conditional rendering and dynamic content

Fetching mock data and handling async operations

Cleanup in useEffect with AbortController