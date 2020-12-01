import UserRepository from '../repositories/user/UserRepository';
import *as bcrypt from 'bcrypt';
import configuration from '../config/configuration';

const userRepository: UserRepository = new UserRepository();
export default async () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                const saltRounds = 10;
                const password = configuration.Password;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(password, salt);
                console.log('Data seeding in progress');
                userRepository.createUser({
                    name: 'head-trainer',
                    email: 'headtrainer@successivetech',
                    role: 'head-trainer',
                    password: hash
                }, undefined);
                userRepository.createUser({
                    name: 'trainer',
                    email: 'trainer@successivetech',
                    role: 'trainer',
                    password: hash
                }, undefined);
            }
        })
        .catch(err => console.log(err));
};
