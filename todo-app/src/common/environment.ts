export const env = {
    server: {
        port: process.env.SERVER_PORT || 3001
    },
    security:{
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRET || 'todo-secret',
        userKey: 'user_token'
    },
    application:{
        name: 'toDo-app'
    }
}