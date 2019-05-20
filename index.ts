import {Server} from './server/server';

const server = new Server();
try{
    server.bootstrap();
}catch(err){
    console.error(err);
    process.exit(1);
}

export {server};