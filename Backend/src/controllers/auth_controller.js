import {registerUser, loginUser} from '../services/auth_services.js';
import {cookiesOption} from '../config/cookie_data.js';
export const login=(req,res)=>{
    const {email,password}=req.body;
    if(email=="" || password==""){
        res.status(401).json({
            success:false,
            message:"Invalid email or password"
        });
    }
    const user=loginUser(email,password);
    res.status(200).json({
        success:true,
        message:"user Login Successfully"
    });
}


export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const token = await registerUser(name, email, password);
        res.cookie("token", token, cookiesOption).status(200).json({
            success: true,
            message: "User registered successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Registration failed",
        });
    }
};
