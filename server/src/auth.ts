import express, { NextFunction, Request, Response } from "express";

import {AUTH_KEY_SECRET,FAKE_USERNAME} from "./config.json"

import jwt from "jsonwebtoken";


 
//verify auth token with api, that was generated with login api
export const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers["auth"];
    try {
        jwt.verify(token, AUTH_KEY_SECRET);
    } catch (error) {
        res.status(401).send();
        return;
    }
    next();
}

//create auth token
export const createAuthToken=(name:string):string =>{
    return  jwt.sign(FAKE_USERNAME, AUTH_KEY_SECRET)
}