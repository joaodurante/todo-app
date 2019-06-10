/**
 * Authorization methods
 * export: tokenParser and tokenRemove
 */

import * as jwt from 'jsonwebtoken';
import { env } from '../common/environment';
import { User } from '../models/users.model';

/* verify the token extracted */
const tokenParser = async (req, res, next) => {
    const token = extractToken(req);
    try{
        if(token){
            const decoded = await jwt.verify(token, env.security.apiSecret);
            await applyBearer(req, next, decoded);
        }
        next();  
    }catch(err){
        next(err);
    }
}

/* remove the authenticated object in the request when the token is not set */
const tokenRemove = (req, res, next) => {
    try{
        if(extractToken(req) == undefined)
            req.authenticated = undefined;
        next();
    }catch(err){
        next(err);
    }
}

/* extract the token from header */
const extractToken = (req): string | undefined => {
    let auth = req.header('authorization');
    if(auth){
        const parts: string[] = auth.split(' ');
        if(parts[0] === 'Bearer' && parts.length == 2){
            return parts[1];
        }
    }
    return undefined;
}

/* get the user from db and put it in the request */
const applyBearer = async (req, next, decoded) => {
    try{
        if(decoded){
            let user = await User.findById(decoded.sub);
            if(user)
                req.authenticated = user;
        }
    }catch(err){
        next(err);
    }
}

export { tokenParser, tokenRemove };