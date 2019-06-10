/**
 * User interface and mongoose schema
 * export: User schema and interface
 */

import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Task, taskSchema } from './tasks.model';
import { env } from '../common/environment';

interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    tasks: Task[],
    matches(password: string): boolean,
    findByEmail(email: string, projection?: string)
}

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    tasks:{
        type: [taskSchema],
        required: false,
        default: []
    }
});

/*
 * Use methods on individual documents if you want to manipulate the individual document like adding tokens etc
 * Use the statics approach if you want query the whole collection
*/

/* Function to find a user by his email */
userSchema.methods.findByEmail = function(email: string, projection?: string){
    return this.findOne({email: email}, projection);
}

/* Compare the password received by user and the password stored */
userSchema.methods.matches = function(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
}

/* Encrypt the password of the object received */
const hashPassword = async (obj, next) => {
    try{
        let hash = await bcrypt.hash(obj.password, env.security.saltRounds);
        obj.password = hash;
        next();
    }catch(err){
        next(err);
    }
}

/* Before saving a new document, make some adjustments */
userSchema.pre('save', function(next){
    const user = this;
    if(user.isModified('password'))
        hashPassword(user, next);
    else
        next();
})

/* Before updating a document, make some adjustments */
userSchema.pre('findOneAndUpdate', function(next){
    const user = this;
    if(user.getUpdate().password)
        hashPassword(user.getUpdate(), next);
    else
        next();
})

const User = mongoose.model<User>('User', userSchema);
export { User };