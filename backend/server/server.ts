import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { env } from '../common/environment';
import { registerRouters } from '../routes/routes';
import { defaultLogger, errorLogger } from '../common/logger';
import { tokenParser } from '../controllers/authorization';

export class Server {
    app: express.Express;
    connection: any;

    constructor(){
        this.app = express();
    }

    initDb() {
        mongoose.connect(env.db.url, env.db.options);
    }

    initServer() {
        try {
            this.app.options('*', cors())
            this.app.use(cors({
                allowedHeaders: ['Content-Type', 'Authorization']
            }));

            this.app.use(bodyParser.urlencoded({ extended: true }));
            this.app.use(bodyParser.json());

            // set the loggers
            this.app.use(defaultLogger);
            this.app.use(errorLogger);

            // middleware that verify the security token extracted
            this.app.use(tokenParser);

            // set the api routes
            registerRouters(this.app);

            this.connection = this.app.listen(env.server.port, () => {
                console.log(`Server is running at port ${env.server.port}`);
            });
        } catch (err) {
            console.log(`The server failed to start`);
        }
    }

    async bootstrap(): Promise<Server> {
        await this.initDb();
        await this.initServer();
        return this;
    }

    async shutdown() {
        await mongoose.disconnect();
        this.connection.close();
    }
}