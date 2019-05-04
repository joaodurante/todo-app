import * as mongoose from 'mongoose';
import * as httpErrors from 'httperrors';
import { Common } from './common.class'

export class ModelRoutes extends Common{
    model: mongoose.Model<any>;

    constructor(model){
        super();
        this.model = model;
    }

    validateId = (req, res, next) => {
        if(mongoose.Types.ObjectId.isValid(req.params._id))
            next();
        else
            next(new httpErrors.NotFound('The thing you are looking for was not found'));
    }

    findAll = async (req, res, next) => {
        try{
            let documents = await this.model.find();
            this.render(res, next, documents);
        }catch(err){
            next(err);
        }
    }

    findOne = async (req, res, next) => {
        try{
            let document = await this.model.findById(req.params._id);
            this.render(res, next, document);
        }catch(err){
            next(err);
        }
    }

    insert = async (req, res, next) => {
        try{
            let document = await this.model.create(req.body);
            this.render(res, next, this.envelope(document));

        }catch(err){
            next(err);
        }
    }

    findAndUpdate = async (req, res, next) => {
        try{
            const options = { new: true, useFindAndModify: false, runValidators: true };
            let document = await this.model.findOneAndUpdate({_id: req.params._id}, req.body, options);
            this.render(res, next, this.envelope(document));
        }catch(err){
            next(err);
        }
    }

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

    envelope = (document) => {
        return document;
    }
}