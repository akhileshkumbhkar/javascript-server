import * as express from 'express';
import UserController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';

const UserRouter = express.Router();

UserRouter.route('/me')
    .get(authMiddleWare(permissions.getUsers, 'all'), UserController.me);

UserRouter.route('/login')
    .post(validationHandler(config.login), UserController.login);

export default UserRouter;
