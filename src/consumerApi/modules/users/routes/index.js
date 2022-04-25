import { Router } from 'express';
import { retrieveUserUseCase } from '../useCases/retrieveUserUseCase.js';
import { deleteAllUsersUseCase } from '../useCases/deleteAllUsersUseCase.js';

const routes = Router();

routes.get('/users', retrieveUserUseCase);
routes.delete('/users', deleteAllUsersUseCase);

export default routes;
