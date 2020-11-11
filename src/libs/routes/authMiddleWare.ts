import * as jwt from 'jsonwebtoken';
import hasPermissions from './Permission';
import IRequest from '../../IRequest';
import { Response, NextFunction } from 'express';

export default (module: any, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        console.log(token);
        const User = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log('user', User.result);
        req.userData = User.result;
        console.log(User.result.role);
        const result = hasPermissions(module, User.result.role, permissionType);
        console.log('Result is', result);
        if (result === true)
            next();
        else {
            next({
                message: 'Unauthorised',
                status: 403
            });
        }
    }
    catch (err) {
        next({
            message: err
        });
    }
};
