import winston from "winston";

export default winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
})