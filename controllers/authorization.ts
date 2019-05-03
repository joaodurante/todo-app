import * as jwt from 'jsonwebtoken';
import { env } from '../common/environment';
import { User } from '../models/users.model';

// verify the token extracted
const tokenParser = async (req, res, next) => {
    const token = extractToken(req);
    try{
        const decoded = await jwt.verify(token, env.security.apiSecret);
        applyBearer(req, res, decoded);
    }catch(err){
        next(err);
    }
}

// extract the token from header
const extractToken = (req): string => {
    let auth = req.header('authorization');
    if(auth){
        const parts: string[] = auth.split(' ');
        if(parts[0] === 'Bearer' && parts.length == 2)
            return parts[1];
    }else
        return undefined;
}

// get the user from db and put it in the request
const applyBearer = async (req, next, decoded) => {
    try{
        if(decoded){
            let user = await User.findById(decoded._id);
            if(user)
                req.authenticated = user;
            next();
        }
    }catch(err){
        next(err);
    }
}

export { tokenParser };