# React + Vite + Redux Toolkit — Logic-Only Guide

This README explains the **logic and flow** of the project without showing any code.
It is intended as a **learning guide** to understand how the pieces fit together.

---

## 1. Project Creation

- A React project is created using Vite.
- JavaScript is chosen instead of TypeScript to reduce complexity.
- The development server is used to verify the setup works.

---

## 2. Adding Redux

- Redux Toolkit is installed to manage global application state.
- React Redux is installed to connect Redux to React components.
- Redux is used only for shared or complex state.

---

## 3. Core Redux Mental Model

Redux follows a one-way data flow:

- The UI triggers an event
- An action is dispatched
- A reducer calculates the new state
- The store updates
- The UI re-renders automatically

This predictable flow is the key benefit of Redux.

---

## 4. The Store

- The store is the single source of truth.
- It holds all global state for the application.
- The store combines multiple feature reducers (slices).
- The store is provided to the React app at the root level.

---

## 5. Slices

- Each slice represents one feature of the app.
- A slice defines:
  - Initial state
  - How state can change
  - Optional async behavior
- Slices keep logic isolated and organized.

---

## 6. Async Logic

- Async actions are used for side effects like API calls.
- Each async action has a lifecycle:
  - Loading
  - Success
  - Error
- The UI reacts to these states automatically.

---

## 7. Using Redux in Components

- Components read data from the store.
- Components dispatch actions to update state.
- Components never modify state directly.
- Redux logic stays outside UI components.

---

## 8. Project Structure Logic

- Components focus only on rendering UI.
- Redux handles global state and business logic.
- Clear separation makes the project scalable and maintainable.

---

## 9. Why Redux Toolkit

- Reduces boilerplate
- Encourages best practices
- Makes Redux easier to learn
- Scales well for larger applications

---

## 10. Learning Goal

The goal of this project is to build a **clear mental model** of Redux:
- What lives in the store
- How state changes
- How React connects to Redux

Once this logic is understood, adding more features becomes straightforward.
