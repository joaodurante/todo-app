import 'jest';
import * as request from 'supertest';
import { env } from '../common/environment';

const address = `localhost:${env.jest.port}`;
let token: string;

test('main', async () => {
    try{
        /* authenticate the default user registered in jest.global.ts */
        let auth = await request(address)
            .post('/users/authenticate')
            .send({
                email: env.jest.user_test.email,
                password: env.jest.user_test.password
            });
        token = auth.body.accessToken;
        token = 'Bearer ' + token;

        expect(auth.status).toBe(200);
        expect(auth.body.accessToken).toBeDefined();

    }catch(err){
        fail(err);
    }
});

test('get all tasks', async () => {
    let getTasks = await request(address)
        .get('/user')
        .set('authorization', token);

    expect(getTasks.status).toBe(200);
});

test('insert task', async () => {
    let task = await request(address)
    .post('/user')
    .set('authorization', token)
    .send({
        content: 'first-task'
    });

    expect(task.status).toBe(200);
});

test('delete task', async () => {
    let task = await request(address)
    .post('/user')
    .set('authorization', token)
    .send({
        content: 'task'
    });

let deleteTask = await request(address)
    .delete(`/user/${task.body._id}`)
    .set('authorization', token);
            
    expect(task.status).toBe(200);
    expect(deleteTask.status).toBe(200);
})