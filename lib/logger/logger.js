const {createLogger,format,transports} = require('winston');

const { combine, timestamp, colorize, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => colorize().colorize(level, `[${timestamp}][${level}] ${message}`))

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        customFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/info.log', level: 'info' }),
        new transports.File({ filename: 'logs/warn.log', level: 'warn' }),
        new transports.File({ filename: 'logs/all.log' }),
    ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console());
}

module.exports =logger