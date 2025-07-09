import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
});

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password; // remove password field
    delete ret.__v;
    return ret;
  },
});

const User=mongoose.model('User',userSchema);
export default User;