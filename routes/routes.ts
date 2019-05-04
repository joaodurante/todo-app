import * as express from 'express';
import { usersRouter } from './users.routes';
import { errorHandler } from '../common/error.handler';

export const registerRouters = (app: express.Express) => {
    app.use('/users', usersRouter);
    app.use(errorHandler);
}