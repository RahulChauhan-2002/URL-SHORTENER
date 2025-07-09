import { registerUser, loginUser } from '../services/auth_services.js';
import { cookiesOption } from '../config/cookie_data.js';

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const token = await registerUser(name, email, password);
        return res.cookie("token", token, cookiesOption).status(200).json({
            success: true,
            message: "User registered successfully",
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message || "Registration failed",
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (email === "" || password === "") {
        return res.status(400).json({
            success: false,
            message: "Invalid email or password",
        });
    }

    try {
        const {token,user} = await loginUser(email, password);
        return res.cookie("token", token, cookiesOption).status(200).json({
            success: true,
            message: "User logged in successfully",
            user:user
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message || "Login failed",
        });
    }
};
