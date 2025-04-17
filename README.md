# 📘 React Exercises

This is a series of exercises designed to help you practice core React concepts. The exercises are categorized by difficulty and cover common front-end use cases.

---

## 🟢 Beginner

### 01 - Simple Counter
- **Goal**: Create a component with a counter that can increment and decrement.
- **Concepts**: `useState`, event handling (`onClick`)
- **Bonus**: Add a "Reset" button.

### 02 - Controlled Form
- **Goal**: Create a form with a text input and display the value in real-time.
- **Concepts**: `useState`, input binding (`onChange`)

### 03 - Toggle Visibility
- **Goal**: Show or hide a text/message when clicking a button.
- **Concepts**: `useState`, conditional rendering (`{ condition && <Element /> }`)

### 04 - Dynamic List
- **Goal**: Add items to a list from an input field.
- **Concepts**: `useState`, arrays, rendering lists with `.map()`

---

## 🟡 Intermediate

### 05 - To-Do List
- **Goal**: Add, delete, and mark tasks as completed.
- **Concepts**: `useState`, working with arrays, `map`, `filter`, conditional styles
- **Bonus**: Add a filter (All / Active / Completed)

### 06 - Timer Counter
- **Goal**: Create a counter that automatically increments every second.
- **Concepts**: `useEffect`, `setInterval`, cleanup with `clearInterval`

### 07 - Weather App (API)
- **Goal**: Enter a city and fetch its weather using an API (e.g., OpenWeatherMap).
- **Concepts**: `useState`, `useEffect`, API requests with `fetch` or `axios`

### 08 - Dark Mode Toggle
- **Goal**: Switch between light and dark themes.
- **Concepts**: `useState`, dynamic classNames, CSS themes

---

## 🔴 Advanced

### 09 - Notes App with localStorage
- **Goal**: Create, update, and delete notes stored in the browser.
- **Concepts**: `useEffect`, `localStorage`, array management

### 10 - API Pagination
- **Goal**: Load and display paginated data from an API.
- **Concepts**: `useEffect`, API requests, pagination logic

### 11 - Drag & Drop List
- **Goal**: Reorder a list of items using drag and drop.
- **Concepts**: `react-beautiful-dnd` or HTML5 Drag & Drop API

### 12 - Debounced Search Filter
- **Goal**: Create a search input that filters a list with a delay.
- **Concepts**: `useEffect`, `setTimeout`, performance optimization (
