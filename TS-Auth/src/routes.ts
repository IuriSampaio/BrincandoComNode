import { Router } from 'express';
import user from './controllers/user';
import auth from './middlewares/auth';

const routes = Router();

routes.post('/users', user.store)
	.post('/users/auth', user.login);

routes.use(auth);

routes.get('/users/:id', user.show)
	.delete('/users/:id', user.delete)
	.put('/users/:id', user.update)
	.get('/users', user.index);

export default routes;
