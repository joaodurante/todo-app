import * as jestcli from 'jest-cli';
import { User } from '../models/users.model';
import { Server } from '../server/server';
import { env } from '../common/environment';

let server: Server;

const beforeTests = async () => {
    env.db.url = env.jest.db_url;
    env.server.port = env.jest.port;
    server = new Server();

    try{
        const server = new Server();
        await server.bootstrap();

        await User.deleteMany({}).exec();
        createUser();
    }catch(err){
        console.log(err);
    }
}

const createUser = async () => {
    let user = new User();
    user.name = env.jest.user_test.name;
    user.email = env.jest.user_test.email;
    user.password = env.jest.user_test.password;

    return user.save();
}

const afterTests = async () => {
    return server.shutdown();
}

beforeTests()
    .then(() => jestcli.run())
    .then(() => afterTests())
    .catch(error => {
        console.error;
        process.exit(1);
    })