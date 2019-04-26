import * as express from 'express';
import { usersRouter } from '../users/users.router';

export const registerRouters = (app: express.Express) => {
    app.use('/users', usersRouter);
}