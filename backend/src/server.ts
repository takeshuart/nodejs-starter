import { buildServer } from "./app.js";

const app = buildServer();

app.listen({ port: 3000 }, () => {
  console.log("Server running on http://localhost:3000");
});
