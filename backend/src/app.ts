import Fastify from "fastify";
import userRoutes from "./routers/userRoutes.js";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import prismaPlugin from "./plugins/prisma.js";


export function buildServer() {
  const app = Fastify();

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(prismaPlugin);
  app.register(userRoutes, { prefix: "/api/v1" });

  return app;
}
