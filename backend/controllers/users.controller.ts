/**
 * export: Class containing general methods to routes of users
 */

import * as mongoose from 'mongoose';
import * as httpErrors from 'httperrors';
import * as jwt from 'jsonwebtoken';
import { Common } from '../common/common.class'
import { env } from '../common/environment';
import { User } from '../models/users.model';


export class UsersRoutes extends Common{
    model: mongoose.Model<any>;

    constructor(){
        super();
        this.model = User;
    }

    /* Check the id passed by param */
    validateId = (req, res, next) => {
        if(mongoose.Types.ObjectId.isValid(req.params._id))
            next();
        else
            next(new httpErrors.NotFound('The thing you are looking for was not found'));
    }

    /* Find all registered users */
    findAll = async (req, res, next) => {
        try{
            let documents = await User.find();
            this.render(res, next, documents);
        }catch(err){
            next(err);
        }
    }

    /* Find a specified user */
    findOne = async (req, res, next) => {
        try{
            let document = await this.model.findById(req.params._id);
            this.render(res, next, document);
        }catch(err){
            next(err);
        }
    }

    /* Insert a new user */
    insert = async (req, res, next) => {
        try{
            let document = await this.model.create(req.body);
            this.render(res, next, this.envelope(document));

        }catch(err){
            next(err);
        }
    }

    /* Find and delete a specified user */
    findAndDelete = async (req, res, next) => {
        try{
            let document = await this.model.findOneAndDelete({_id: req.params._id});
            if(document){
                res.status(204).json({});
                next(false);
            }
        }catch(err){
            next(err);
        }
    }

    /* Simple function to manipulate some data */
    envelope = (document) => {
        document.password = undefined;
        return document;
    }

    /* Function that authenticate the user using email and password */
    authenticate = async (req, res, next) => {
        try{
            let user = await this.model.findOne({email: req.body.email}, '+password');
            if(user && user.matches(req.body.password)){
                const token = jwt.sign(
                    {sub: user._id, iss: env.application.name},
                    env.security.apiSecret
                );

                res.json({ name: user.name, email: user.email, accessToken: token });
            }else
                return next(new httpErrors.Forbidden('Invalid credentials'));
        }catch(err){
            next(err);
        }
    }

    /* Function that check if the user is authorized */
    authorize = (req, res, next) => {
        if(req.authenticated !== undefined)
            next();
        else
            throw new httpErrors.Forbidden('You are not allowed to do this!');
    }
}