import { Request } from 'express'
import { User } from './models/users.model';

// insert 'authenticated' property on the request
declare global{
    namespace Express{
        interface Request{
            authenticated: User
        }
    } 
}
