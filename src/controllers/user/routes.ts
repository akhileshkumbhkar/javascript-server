import { Router } from 'express';
import userController from './Controller';
const userRouter = Router();
userRouter.route('/')
    .get(userController.get)
    .post(userController.create)
    .put(userController.update)
    .delete(userController.Delete);
export default userRouter;
