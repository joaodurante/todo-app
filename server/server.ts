import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import {env} from '../common/environment';
import { registerRouters } from './routes';

export class Server{
    app: express.Express;
    connection: any;

    initDb(){
        mongoose.connect(env.db.url, env.db.options);
    }

    initServer(){
        try{
            this.app = express();
            this.app.use(bodyParser.urlencoded({ extended: true }));
            this.app.use(bodyParser.json());
            registerRouters(this.app);
            
            this.connection = this.app.listen(env.server.port, () => {
                console.log(`Server is running at port ${env.server.port}`);
            })
        }catch(err){
            console.log(`The server failed to start`);
        }
    }

    async bootstrap(): Promise<Server>{
        await this.initDb();
        await this.initServer();
        return this;
    }

    async shutdown(){
        await mongoose.disconnect();
        this.connection.close();
    }
}