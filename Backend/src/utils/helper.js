import { nanoid } from "nanoid";
import jwt from 'jsonwebtoken';
import {cookiesOption} from '../config/cookie_data.js';
export const generate_nanoId=(length)=>{
    return nanoid(length);
}

export const signToken=(payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1m'})
}

export const verifyToken=(token)=>{
    return jwt.verify(token,process.env.JWT_SECRET)
}