import { describe, it, expect, beforeAll, afterAll, beforeEach } from "vitest";
import { buildServer } from "../app.js";
import { prisma } from "../plugins/prisma.js";

let app: ReturnType<typeof buildServer>;

beforeAll(async () => {
  app = buildServer();
  await app.ready();
});

afterAll(async () => {
  await prisma.user.deleteMany();
  await app.close();
});

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/api/v1/users",
      payload: { email: "a@b.com", name: "Alice", password: "1234567" }
    });

    expect(res.statusCode).toBe(201);
    const body = JSON.parse(res.body);
    expect(body.email).toBe("a@b.com");
    expect(body.name).toBe("Alice");
  });

  it("should get a user by id", async () => {
    const createRes = await app.inject({
      method: "POST",
      url: "/api/v1/users",
      payload: { email: "test@example.com", name: "Test User", password: "password123" }
    });

    const user = JSON.parse(createRes.body);
    const getRes = await app.inject({
      method: "GET",
      url: `/api/v1/users/${user.id}`
    });

    expect(getRes.statusCode).toBe(200);
    const body = JSON.parse(getRes.body);
    expect(body.email).toBe("test@example.com");
  });

  it("should return 404 for non-existent user", async () => {
    const res = await app.inject({
      method: "GET",
      url: "/api/v1/users/9999"
    });

    expect(res.statusCode).toBe(404);
  });

  it("should list all users", async () => {
    await app.inject({
      method: "POST",
      url: "/api/v1/users",
      payload: { email: "user1@example.com", name: "User 1", password: "password123" }
    });

    await app.inject({
      method: "POST",
      url: "/api/v1/users",
      payload: { email: "user2@example.com", name: "User 2", password: "password123" }
    });

    const res = await app.inject({
      method: "GET",
      url: "/api/v1/users"
    });

    expect(res.statusCode).toBe(200);
    const body = JSON.parse(res.body);
    expect(body.length).toBe(2);
    expect(body[0].email).toBe("user1@example.com");
    expect(body[1].email).toBe("user2@example.com");
  });

  it("should validate email format", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/api/v1/users",
      payload: { email: "invalid-email", name: "Invalid", password: "password123" }
    });

    expect(res.statusCode).toBe(400);
  });

  it("should validate password length", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/api/v1/users",
      payload: { email: "valid@example.com", name: "Test", password: "123" }
    });

    expect(res.statusCode).toBe(400);
  });
});