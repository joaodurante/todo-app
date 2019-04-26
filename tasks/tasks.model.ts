import * as mongoose from 'mongoose';

interface Task extends mongoose.Document{
    content: string,
    date: Date
}

const taskSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        maxlength: 120,
        minlength: 1
    },
    date:{
        type: Date,
        required: false
    }
});

export { Task, taskSchema };