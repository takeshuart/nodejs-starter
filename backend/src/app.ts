import Fastify from "fastify";
import pino from "pino";
import userRoutes from "./routers/userRoutes.js";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import prismaPlugin from "./plugins/prisma.js";

//https://fastify.dev/docs/v2.15.x/Documentation/Logging/
export function buildServer() {
  const app = Fastify({
    genReqId: req => crypto.randomUUID(),
    logger: {
      serializers: {
        req(request) {
          return {
            id: request.id,
            method: request.method,
            url: request.url,
            // ensure non-undefined types to satisfy Fastify's logger typings
            remoteAddress: request.socket.remoteAddress ?? '',
            remotePort: request.socket.remotePort ?? 0,

            query: request.query,
            body: request.body,
          };
        },
        res(reply) {
        // The default
        return {

        }
      },
        
      },
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
          singleLine: true
        }
      }
    }
  });


  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(prismaPlugin);
  app.register(userRoutes, { prefix: "/api/v1" });

  return app;
}
