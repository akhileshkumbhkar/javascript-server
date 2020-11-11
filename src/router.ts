import { traineeRoutes } from './controllers/trainee';
import { UserRouter } from './controllers/user';
import { Router } from 'express';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRoutes);
mainRouter.use('/user', UserRouter);

export default mainRouter;
