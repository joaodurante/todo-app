import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Task, taskSchema } from '../tasks/tasks.model';
import { env } from '../common/environment';

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

const hashPassword = async (obj, next) => {
    try{
        let hash = await bcrypt.hash(obj.password, env.security.saltRounds);
        obj.password = hash;
        next();
    }catch(err){
        next(err);
    }
}

userSchema.pre('save', function(next){
    const user = this;
    if(user.isModified('password'))
        hashPassword(user, next);
    else
        next();
})

userSchema.pre('findOneAndUpdate', function(next){
    const user = this;
    if(user.getUpdate().password)
        hashPassword(user.getUpdate(), next);
    else
        next();
})

const User = mongoose.model<User>('User', userSchema);
export { User };