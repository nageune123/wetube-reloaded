import express from "express";
import {trending,serch } from "../controllers/videoController";
import {join,login} from "../controllers/userController";


const globalRouter = express.Router();



globalRouter.get("/",trending);
globalRouter.get("/join",join);
globalRouter.get("/login",login);
globalRouter.get("/serch",serch);


export default globalRouter;