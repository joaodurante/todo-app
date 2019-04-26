import * as mongoose from 'mongoose';
import { Task, taskSchema } from '../tasks/tasks.model';

interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    tasks: Task[]
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

const User = mongoose.model<User>('User', userSchema);
export { User };