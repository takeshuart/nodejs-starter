# Tech Stack

This backend service is built with a modern TypeScript-first Node.js stack, focused on performance, type safety, and developer efficiency.

### Runtime & Language

* **Node.js (ES Modules)** — Native ESM environment for clean import/export.
* **TypeScript** — Static typing and compile-time safety.
* **tsx** — Fast TypeScript runner used in development (`npm run dev`).

### **Framework**

* **Fastify** — High-performance web framework with plugin-based architecture.
* **fastify-type-provider-zod** — Enables full request/response schema validation and type inference.

### **Data & ORM**

* **Prisma ORM** — Database access layer with auto-generated, strongly typed client.
* **SQLite** — Simple, file-based relational database used for development.

### **Schema Validation**

* **Zod** — Runtime validation + TypeScript type inference for request schemas and DTOs.

### **HTTP & Utilities**

* **Axios** — HTTP client for external API calls.
* **supertest** — HTTP testing utilities for integration tests.

### **Testing**

* **Vitest** — Modern Vite-native test framework with TypeScript and ESM support.

### **Tooling**

* **ts-node-dev / tsx** — Used in development to run TypeScript files directly without building.
* **TypeScript Compiler (tsc)** — Used in production to compile TypeScript into JavaScript.
 (`npm run build`).

# Project Setup Commands
```bash
# Initialize project metadata,generate `package.json`
npm init -y 
# Install core dependencies
npm install fastify fastify-cookie fastify-cors zod axios
# Install development tools
npm install -D typescript ts-node-dev prisma @types/node` 
npx tsc --init` # generate `tsconfig.json`
# creates `prisma/schema.prisma` and `.env`
npx prisma init` 
# Install TSX for fast TypeScript execution during development
npm install -D tsx` 
# Generate Prisma client
npx prisma generate` 
# Create initial database schema and migration
npx prisma migrate dev --name init` 
npm run test
```

