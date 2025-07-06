import { verifyToken } from "./helper.js";
import User from "../models/userModel.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return next(); 

    try {
        const decode = verifyToken(token);

        const user = await User.findById(decode.id); 
        if (!user) return next(); 

        req.user = user;
        return next(); 
    } catch (error) {
        console.log("Error in attachUser middleware:", error);
        return next(); 
    }
};
