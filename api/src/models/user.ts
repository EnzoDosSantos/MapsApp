import mongoose from "mongoose";
import type { IUser } from "../../types";

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 10
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 15,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 10
    }
},{timestamps: false})

const User = mongoose.model<IUser>('User', userSchema)

export default User