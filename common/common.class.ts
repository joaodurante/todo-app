/*
 * Simple class with simple and useful methods like render
*/

import * as httpErrors from 'httperrors';
import * as mongoose from 'mongoose';
import * as express from 'express';

export class Common {
    render(res: express.Response, next: express.NextFunction, document){
        if(document)
            res.status(200).json(document);
        else
            new httpErrors.NotFound('Document was not found');
        return next(false);
    }
}