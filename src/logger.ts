import * as winston from "winston";
import appConfig from './config';
import * as fs from "fs";

const newLineRegex: RegExp = /^\n{1,}/g;

// Generate logger file
const myFormat = winston.format.printf(({ level, message, label, timestamp }) => {
    const isNewLine: string | null = message.match(newLineRegex)
    return `${(isNewLine ? isNewLine.toString() : '') + timestamp} ${label} ${level}: ${message.replace(newLineRegex, '')}`;
});

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: '→' }),
        winston.format.timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: appConfig.logger.path })
    ]
});


// Generate unit-test file
const uniTestFormat = winston.format.printf(({ level, message, label, timestamp }) => {
    const isNewLine: string | null = message.match(newLineRegex)
    return `${(isNewLine ? isNewLine.toString() : '')}${message.replace(newLineRegex, '')}`;
});

export const loggerUnitTest = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: '→' }),
        winston.format.timestamp(),
        uniTestFormat
    ),
    transports: [
        // new winston.transports.Console(),
        new winston.transports.File({ filename: appConfig.config.outputPath })
    ]
});

export const clearLogger = () => {
    if (fs.existsSync(appConfig.logger.path)) {
        fs.unlinkSync(appConfig.logger.path);
    }

    // unit-test file logger
    if (fs.existsSync(appConfig.config.outputPath)) {
        fs.unlinkSync(appConfig.config.outputPath);
    }
}
