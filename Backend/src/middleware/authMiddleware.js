import { verifyToken } from "../utils/helper.js";
import User from '../models/userModel.js';

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token not found",
            });
        }

        const decoded = verifyToken(token);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
