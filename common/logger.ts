/**
 * Loggers functions
 * export: defaultLogger, errorLogger
 */

import * as morgan from 'morgan';

// default logs (ignore errors)
const defaultLogger = morgan('dev', {
    skip: function(req, res){
        return res.statusCode >= 400
    },
    stream: process.stdout
});

// errors logs (ignore default)
const errorLogger = morgan('dev', {
    skip: function (req, res){
        return res.statusCode < 400
    },
    stream: process.stderr
})

export { defaultLogger, errorLogger };