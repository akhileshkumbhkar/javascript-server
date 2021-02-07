import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import IRequest from '../../IRequest';
import UserRepository from '../../repositories/user/UserRepository';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';

class UserController {
    userRepository: UserRepository = new UserRepository();
    static instance: UserController;
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            data
        });
    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        const user = new UserRepository();
        await user.getUser({ email })
            .then((userData) => {
                if (userData === null) {
                    res.status(404).send({
                        err: 'User Not Found',
                        code: 404,
                        status: 404
                    });
                    return;
                }
                const { password } = userData;
                if (!bcrypt.compare(req.body.password, password)) {
                    res.status(401).send({
                        err: 'Invalid Password',
                        code: 401,
                        status: 401
                    });
                    return;
                }
                const token = jwt.sign(userData.toJSON(), config.KEY, {
                    expiresIn: Math.floor(Date.now() / 1000) + (15 * 60),
                });
                res.status(200).send({
                    message: 'Login Successfull',
                    code: 200,
                    status: 200,
                    'token': token,
                    data: token
                });
                return;
            });
    }
}

export default new UserController();
