import * as express from 'express';
import UserController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';

const UserRouter = express.Router();
UserRouter.route('/')
    .get(authMiddleWare(permissions.getUsers, 'read'), UserController.get)
    .post(authMiddleWare(permissions.getUsers, 'read'), UserController.create)
    .put(authMiddleWare(permissions.getUsers, 'read'), UserController.update)

UserRouter.route('/:id').delete(authMiddleWare(permissions.getUsers, 'read'), UserController.delete);

UserRouter.route('/me')
    .get(authMiddleWare(permissions.getUsers, 'all'), UserController.me);

UserRouter.get('/getall', authMiddleWare('getUser', 'all'), validationHandler(config.get),
    UserController.getAll);

UserRouter.route('/login')
    .post(validationHandler(config.login), UserController.login);

export default UserRouter;
