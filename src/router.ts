import { Router } from 'express';
import { traineeRouter,userRouter } from './controllers';

const mainRouter = Router();
mainRouter.use('./trainee', traineeRouter);
userRouter.use('./user',userRouter);

export default mainRouter;
