import User from '../models/userModel.js';
import { signToken } from '../utils/helper.js';
import bcrypt from 'bcrypt';

export const registerUser = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = signToken({ id: newUser._id });
    return token;
};

export const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid Credentials!");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid Credentials!");
    }

    const token = signToken({ id: user._id });
    return token;
};
