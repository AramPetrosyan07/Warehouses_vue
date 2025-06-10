Warehouses (Vue.js, JavaScript)

This project is a **Vue 3 Single Page Application (SPA)** built with **Vite**. It uses **Pinia** for state management, **Vue Router 4** for routing, **Axios** for API requests, and **SCSS** for styling. The app fetches and displays user data in Card and List views with sorting and view persistence.

---

## Table of Contents

- Project Overview
- Project Structure
- Getting Started
- Customizing Configuration
- Project Specifics
- Contributing

---

## 1. Project Overview

Technologies and libraries used:

- **Vue 3** – Progressive JavaScript framework
- **Vite** – Fast build tool
- **Pinia** – State management (JavaScript only)
- **Vue Router 4** – SPA routing
- **Axios** – HTTP requests
- **SCSS** – Modular styling
- **Lazy Loading** – Route-based code splitting with dynamic imports

---

## 2. Project Structure

```
/src
│
├── assets/                Static files (images, icons, fonts)
│
├── components/            Reusable Vue components (e.g., UserCard.vue, UserList.vue)
│
├── composables/           Custom Vue hooks
│
├── stores/                Pinia stores
│   └── userStore.js
│
├── services/              Axios setup and API
│   └── api.js
│
├── router/                Vue Router configuration
│   └── index.js
│
├── styles/                Global SCSS files
│   ├── base.scss
│   └── theme.scss
│
├── config/                App config constants (JavaScript)
│
├── tests/                 Unit and integration tests (if any)
│
├── App.vue                Root component
├── main.js                Entry point
└── index.html             HTML template
```

---

## 3. Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit the app at `http://localhost:5173`

---

## 4. Customizing Configuration

Edit `vite.config.js` for build options, plugins, and aliases.
Environment variables are not used; update config constants manually.

---

## 5. Project Specifics

### 5.1 API Requests

Axios is configured in `services/api.js` with the base URL from config.
Interceptors for authentication or error handling can be added here.

### 5.2 State Management

State is managed with **Pinia** in JavaScript.
Feature stores are under `stores/`. Use store hooks inside components.

### 5.3 View Modes

Supports Card View and List View.
User's selected view mode is saved in `localStorage`.

### 5.4 Sorting

Users can sort the user list by name (A-Z or Z-A).

### 5.5 Styles

Uses SCSS modules and global styles imported into main components.

### 5.6 Lazy Loading

Routes and components are lazy loaded via Vue Router with dynamic `import()`.

---

If you'd like, I can also help generate example files or snippets for any part of this setup!
