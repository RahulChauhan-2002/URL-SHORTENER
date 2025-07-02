import User from '../models/userModel.js';
import {signToken} from '../utils/helper.js';


export const registerUser= async (name,email,password)=>{
    const user = await User.findOne({ email });
    console.log(user.email);
    if(user){
        throw new Error("User already exists");
    }
    const newUser=new User({name,email,password});
    await newUser.save();

    const token=signToken({id:newUser._id});
    return token;
}

export const loginUser= async (email,password)=>{

}