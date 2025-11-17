## Frontend Tech Stack

This project uses the following modern frontend technologies:

* **React** — Core UI framework.
* **Vite** — Fast development server and build tool.
* **TanStack Query** — Data fetching, caching, and request state management.
* **TanStack Router** — Type-safe, file-based router (preferred over React Router).
* **Tailwind CSS / Material UI (MUI)** — Utility-first and component-based UI styling.
* **Axios** — HTTP client for backend API calls.
* **TanStack Form** — Form management with pluggable schema validators (Zod or Yup).

---

## Project Setup Commands

Below are the essential commands used to create and initialize the frontend project:

```bash
# 1. Create Vite + React project
npm create vite@latest my-app -- --template react-ts
cd my-app

# 2. Install UI libraries [https://tailwindcss.com/docs/installation/using-vite]
npm install tailwindcss @tailwindcss/vite

npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

# 3. Install TanStack packages
npm install @tanstack/react-query
npm install @tanstack/router
npm install @tanstack/react-query-devtools

# 4. Install Axios
npm install axios

# 5. Install TanStack Form + validators
npm install @tanstack/react-form
npm install zod    # or: npm install yup

# 6. (Optional) ESLint + Prettier
npm install -D eslint prettier

# 7. Start development
npm run dev
```
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
