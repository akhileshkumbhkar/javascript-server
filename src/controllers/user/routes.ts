import * as express from 'express';
import UserController from './controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';

const UserRouter = express.Router();
UserRouter.route('/')
    .get(UserController.get)
    .post(UserController.create)
    .put(UserController.update)
    .delete(UserController.delete);

UserRouter.route('/me')
    .get(authMiddleWare(permissions.getUsers, 'all'), UserController.me);

UserRouter.route('/login')
    .post(validationHandler(config.login), UserController.login);

export default UserRouter;
