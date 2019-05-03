import * as express from 'express';
import { usersRouter } from './users.routes';

export const registerRouters = (app: express.Express) => {
    app.use('/users', usersRouter);
}