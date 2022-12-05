import mongoose from "mongoose";
import type { IPin } from "../../types";

const pinSchema = new mongoose.Schema<IPin>({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 5,
        max: 15
    },
    description: {
        type: String,
        required: true,
        min: 4,
        max: 30
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    }
},{timestamps: false})

const Pin = mongoose.model('Pin', pinSchema)

export default Pin