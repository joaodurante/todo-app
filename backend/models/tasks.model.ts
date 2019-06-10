/**
 * Task interface and mongoose schema
 * export: Task schema and interface
 */

import * as mongoose from 'mongoose';

interface Task extends mongoose.Document{
    _id: number,
    content: string,
    date: Date
}

const taskSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
        sparse: true
    },
    content:{
        type: String,
        required: true,
        maxlength: 150,
        minlength: 1
    },
    date:{
        type: Date,
        required: false
    },
    done:{
        type: Boolean,
        required: true,
        default: false
    }
});

export { Task, taskSchema };