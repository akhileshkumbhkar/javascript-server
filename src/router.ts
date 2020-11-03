import { traineeRoutes } from './controllers/trainee';
import { Router } from 'express';

const mainRouter = Router();
mainRouter.use( '/trainee' , traineeRoutes );

export default mainRouter;
