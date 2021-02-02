import { Router } from 'express';
import users from "./controllers/users";


const routes = Router();

routes.get( '/users' , users.index )

export default routes;
