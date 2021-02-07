import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.countData()
        .then(res => {
            if (res === 0) {
                console.log('Data seeding in progress');
                userRepository.createUser({
                    name: 'Head-trainer',
                    email: 'headtrainer@successive.tech',
                    role: 'head-trainer',
                    password: configuration.Password,
                }, undefined);
                userRepository.createUser({
                    name: 'trainer',
                    email: 'trainer@successive.tech',
                    role: 'trainee',
                    password: configuration.Password,
                }, undefined);
                userRepository.createUser({
                    name: 'akhilesh',
                    email: 'akhilesh@successive.tech',
                    role: 'trainee',
                    password: configuration.Password,
                }, undefined);
                userRepository.createUser({
                    name: 'akhilesh kumar',
                    email: 'akhileshkumar@successive.tech',
                    role: 'trainee',
                    password: configuration.Password,
                }, undefined);
            }
        })
        .catch(err => console.log(err));
};
