import * as httpErrors from 'httperrors';
import { Common } from '../common/common.class';
import { User } from '../models/users.model';
import { Task } from '../models/tasks.model';

/**
 * TODO:
 * DeleteTask
 * UpdateTask
 */
export class UserRoutes extends Common{
    validateUser = (req, res, next) => {
        if(req.authenticated)
            next();   
        else
            next(new httpErrors.Forbidden('You are not allowed to do this!'));
    }

    getAllTasks = (req, res, next) => {
        let tasks: Task[] = [];
        for(let i in req.authenticated.tasks){
            if(req.authenticated.tasks[i].done === false)
                tasks.push(req.authenticated.tasks[i])
        }
        this.render(res, next, tasks);
    }

    getAllCompletedTasks = async (req, res, next) => {
        try{
            let tasks = [];
            for(let i in req.authenticated.tasks){
                if(req.authenticated.tasks[i].done === true)
                    tasks.push(req.authenticated.tasks[i].task)
            }
            this.render(res, next, tasks);
        }catch(err){
            next(err);
        }
    }

    createTask = async (req, res, next) => {
        const options = { new: true, useFindAndModify: false, runValidators: true };
        let task: any = {content: req.body.content};
        try{
            if(req.body.date != undefined)
                task.date = req.body.date;

            req.authenticated.tasks.push(task);
            await User.findOneAndUpdate({ _id: req.authenticated._id }, {$push: {tasks: task}}, options);
            next();
        }catch(err){
            next(err);
        }
    }

    deleteTask = async (req, res, next) => {
        try{
            for(let i in req.authenticated.tasks)
                if(req.authenticated.tasks[i]._id === req.body._id)
                    var pop = req.authenticated.tasks[i].pop();
            
            if(pop)
                await User.findOneAndDelete({ _id: req.body._id});
            else
                throw new httpErrors.NotFound('The thing you tried to delete does not exists!')
            
            next();
        }catch(err){
            next(err);
        }
    }
}