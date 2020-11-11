import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside get method of User');
            res.send({
                message: 'User fetched succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside post method of User');
            res.send({
                message: 'User created succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    update(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside put method of user');
            res.send({
                message: 'Trainee updated succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside delete method of user');
            res.send({
                message: 'Trainee deleted succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    login(req: IRequest, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            userModel.findOne({ email: req.body.email }, (err, result) => {
                if (result) {
                    if (password === result.password) {
                        console.log('result is', result.password);
                        const token = jwt.sign({
                            result
                        }, 'qwertyuiopasdfghjklzxcvbnm123456');
                        console.log(token);
                        res.send({
                            data: token,
                            message: 'Login Permited',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            message: 'Password Doesnt Match',
                            status: 400
                        });
                    }
                }
                else {
                    res.send({
                        message: 'Email is not Registered',
                        status: 404
                    });
                }
            });
        }
        catch (err) {
            res.send(err);
        }
    }

    me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            data
        });
    }
}

export default UserController.getInstance();
