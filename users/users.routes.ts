import * as mongoose from 'mongoose';
import * as httpErrors from 'httperrors';
import { ModelRoutes } from '../common/model.routes';

export class UsersRoutes extends ModelRoutes{
    constructor(model){
        super(model);
    }

    envelope = (document) => {
        document.password = undefined;
        return document;
    }
}