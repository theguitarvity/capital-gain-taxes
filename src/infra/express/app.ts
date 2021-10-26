import express from 'express'
import routes from './routes'
import {errors} from "celebrate";
import {logger} from "express-winston";
import winston from "winston";

const app = express()

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use(logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: false,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
}))
app.use(routes(express.Router()))
app.use(errors())
export default app