import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generateUsersMock =  (usersNum) => {
    const users = [];
    for (let i = 0; i < usersNum; i++) {
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync('coder123', 10),
            role: Math.random() < 0.8 ? 'user' : 'admin',
            pets: []
        });
    }
    return users;
};