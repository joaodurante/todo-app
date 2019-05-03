import * as httpErrors from 'httperrors';
import * as jwt from 'jsonwebtoken';
import { ModelRoutes } from '../common/model.routes';
import { env } from '../common/environment';


export class UsersRoutes extends ModelRoutes{
    constructor(model){
        super(model);
    }

    envelope = (document) => {
        document.password = undefined;
        return document;
    }

    authenticate = async (req, res, next) => {
        try{
            let user = await this.model.findOne({email: req.body.email}, '+password');
            if(user && user.matches(req.body.password)){
                const token = jwt.sign(
                    {sub: user._id, iss: env.application.name},
                    env.security.apiSecret,
                    {expiresIn: '24h'}
                );

                res.json({ name: user.name, email: user.email, accessToken: token });
            }else
                return next(new httpErrors.Forbidden('Invalid credentials'));
        }catch(err){
            next(err);
        }
    }
}