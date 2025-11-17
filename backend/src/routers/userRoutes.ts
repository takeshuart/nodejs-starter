import { FastifyInstance } from 'fastify';
import { UserService } from '../services/user.service.js';
import { userSchema } from '../schema/user.schema.js';

export default async function userRoutes(app: FastifyInstance) {
  const service = new UserService();

  app.post('/users', async (request, reply) => {
    const validation = userSchema.safeParse(request.body);
    if (!validation.success) {
      return reply.code(400).send({
        message: 'Validation error',
        errors: validation.error.flatten()
      });
    }
    const user = await service.createUser(validation.data);
    return reply.code(201).send(user);
  });

  app.get<{ Params: { id: string } }>('/users/:id', async (request, reply) => {
    const id = Number(request.params.id);
    const user = await service.getUserById(id);
    if (!user) {
      return reply.code(404).send({ message: 'User not found' });
    }
    return user;
  });

  app.get('/users', async () => {
    return service.listUsers();
  });
}
