import express, { Express, Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";
import connection from './connection'


dotenv.config();


const app: Express = express();
app.use(express.json());
app.use(cors())



 
