class UserController {
    static instance: UserController;
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    get(req, res, next) {
        try {
            console.log('Inside get() method of User Controller');
            res.send({
                message: 'Users fetched sucsesfully!',
                data: [
                    {
                        name: 'Akhilesh',
                        address: 'Noida'
                    }
                ]
            });
        } catch (err) {
            console.log('Inside error', err);
        }
    }
    create(req, res, next) {
        try {
            console.log('Inside post() method of User Controller');
            res.send({
                message: 'Users created sucsesfully!',
                data: {
                        name: 'Akhilesh',
                        address: 'Noida'
                    }
            });
        } catch (err) {
            console.log('Inside error', err);
        }
    }
    update(req, res, next) {
        try {
            console.log('Inside put() method of User Controller');
            res.send({
                message: 'Users updated sucsesfully!',
                data: {
                        name: 'Akhilesh',
                        address: 'Noida'
                    }
            });
        } catch (err) {
            console.log('Inside error', err);
        }
    }
    Delete(req, res, next) {
        try {
            console.log('Inside delete() method of User Controller');
            res.send({
                message: 'Users deleted sucsesfully!',
                data: {
                        name: 'Akhilesh',
                        address: 'Noida'
                    }
            });
        } catch (err) {
            console.log('Inside error', err);
        }
    }
}
export default UserController.getInstance();