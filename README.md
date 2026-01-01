# React + Vite + TypeScript + Redux Toolkit

This project demonstrates how to create a **React application using Vite and TypeScript**, and how to set up **Redux Toolkit** for state management.

It is mainly a **learning project** to understand:
- Redux concepts
- Project structure
- How state flows in a Redux application

---

## 🛠 Tech Stack

- React
- Vite
- TypeScript
- Redux Toolkit
- React Redux

---

## 🚀 1. Create a React + TypeScript project with Vite

From your desired project directory, run:

```bash
npm create vite@latest .
```

You will be prompted with the following options:

```text
Select a framework:
  React

Select a variant:
  TypeScript + React Compiler

Use rolldown-vite (Experimental)?
  No

Install with npm and start now?
  No
```

Vite will scaffold the project.

Then run:

```bash
npm install
npm run dev
```

---

## 📦 2. Install Redux dependencies

Install Redux Toolkit and React Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

> ⚠️ Note:  
> The correct package name is `@reduxjs/toolkit` (not `reduxjs/toolkit`).

---

## 🧠 3. Redux core concept (mental model)

The most important thing to remember:

```text
UI → dispatch(action) → reducer → store → UI updates
```

### What this means:
- **UI (React components)** trigger actions
- **Actions** describe what happened
- **Reducers** decide how the state changes
- **Store** holds the global application state
- When the store updates, the UI re-renders

---

## 🧱 4. What is the Store?

The **store** is the single source of truth for your application state.

Example:

```ts
{
  counter: { value: 0 },
  user: { isSignedIn: false }
}
```

- All global state lives here
- Components read from the store
- Components never modify state directly

---

## 📁 5. Recommended Project Structure

```text
src/
 ├─ components/
 │   └─ counter/
 │       ├─ Counter.tsx
 │       └─ Counter.css
 ├─ state/
 │   ├─ store.ts
 │   ├─ hooks.ts
 │   └─ counter/
 │       └─ counterSlice.ts
 ├─ App.tsx
 └─ main.tsx
```

**Rules of thumb:**
- Components handle UI
- Redux slices handle logic
- Store wires everything together

---

## 🔄 6. Redux Flow Example

When a button is clicked:

1. Component dispatches an action
2. Reducer runs
3. State updates in the store
4. UI re-renders automatically

---

## 🧪 7. Initialize Git Repository

```bash
git init
git add .
git commit -m "First commit"
```

---

## 🎯 Purpose of this Project

- Learn Redux Toolkit step by step
- Understand state flow clearly
- Practice TypeScript with Redux
- Build a solid mental model for larger apps

---

## 📌 Notes

- Redux is powerful but not needed for every project
- It shines when you have shared or complex state
- Redux Toolkit removes most of the old Redux boilerplate

---

## ✅ Status

✔ Project scaffolded  
✔ Redux Toolkit installed  
✔ Store and slices implemented  
✔ Counter example working  

---
