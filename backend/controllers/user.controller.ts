/**
 * export: Class containing methods to routes of logged user
 */

import * as httpErrors from 'httperrors';
import * as mongoose from 'mongoose';
import { Common } from '../common/common.class';
import { User } from '../models/users.model';
import { Task } from '../models/tasks.model';
import { env } from '../common/environment';

export class UserRoutes extends Common {
    model: mongoose.Model<User>;

    constructor(){
        super();
        this.model = User;
    }

    /* Validate the logged user */
    validateUser = (req, res, next) => {
        if (req.authenticated)
            next();
        else
            next(new httpErrors.Forbidden('You are not allowed to do this!'));
    }

    getUser = async (req, res, next) => {
        this.render(res, next, req.authenticated);
    }

    /* Get all the not completed tasks */
    getAllTasks = async (req, res, next) => {
        try {
            let tasks = [];
            for (let i in req.authenticated.tasks) {
                if (req.authenticated.tasks[i].done === false)
                    tasks.push(req.authenticated.tasks[i])
            }
            this.render(res, next, tasks);
        } catch (err) {
            next(err);
        }
    }

    /* Get all the completed tasks */
    getAllCompletedTasks = async (req, res, next) => {
        try {
            let tasks = [];
            for (let i in req.authenticated.tasks) {
                if (req.authenticated.tasks[i].done === true)
                    tasks.push(req.authenticated.tasks[i])
            }
            this.render(res, next, tasks);
        } catch (err) {
            next(err);
        }
    }

    /* Get all the pending tasks of the actual day */
    getAllTodayTasks = async (req, res, next) => {
        try{
            let tasks = [];
            let date: Date = new Date();
            date.setHours(0, 0, 0, 0);

            for(let i in req.authenticated.tasks) {
                if(req.authenticated.tasks[i].date && req.authenticated.tasks[i].done === false){
                    if(req.authenticated.tasks[i].date.getTime() === date.getTime())
                        tasks.push(req.authenticated.tasks[i]);
                }
            }
            
            this.render(res, next, tasks);
        }catch(err){
            next(err);
        }
    }

    /* Create a new task */
    createTask = async (req, res, next) => {
        const options = { new: true, useFindAndModify: false, runValidators: true };
        let task: any = { content: req.body.content };
        try {
            if (req.body.date != undefined)
                task.date = req.body.date;
            task._id = req.authenticated.tasks.length;
            req.authenticated.tasks.push(task);

            await this.model.findOneAndUpdate(
                { _id: req.authenticated._id },
                { $push: { tasks: task } },
                options
            );

            next();
        } catch (err) {
            next(err);
        }
    }

    /* Delete a specified task */
    deleteTask = async (req, res, next) => {
        let removed;
        const options = { new: true, useFindAndModify: false, runValidators: true };
        try {
            let index = parseInt(req.params._id);
            removed = req.authenticated.tasks.splice(index, 1);
            this.updateId(req, index);

            if (removed){
                await this.model.findOneAndUpdate(
                    { _id: req.authenticated._id },
                    { $set: { tasks: req.authenticated.tasks } },
                    options
                );
            }else
                throw new httpErrors.NotFound('The thing you tried to delete does not exists!')

            next();
        } catch (err) {
            next(err);
        }
    }

    completeTask = async (req, res, next) => {
        const options = { new: true, useFindAndModify: false, runValidators: true };
        try{
            let idTask = parseInt(req.params._id);
            let task: Task = req.authenticated.tasks.find(task => task._id == idTask);
            if(task){
                task.done = true;
                await this.model.findOneAndUpdate(
                    {_id: req.authenticated._id},
                    {$set: {tasks: req.authenticated.tasks}},
                    options
                );
            }else
                throw new httpErrors.NotFound('The thing you tried to update does not exists!');
            
            next();
        }catch(err){
            next(err);
        }
    }

    /* Update task id when one of them has been deleted */
    updateId = (req, index) => {
        for (index; index < req.authenticated.tasks.length; index++)
            req.authenticated.tasks[index]._id = index;            
    }
}