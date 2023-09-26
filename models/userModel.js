import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true // it won't allow the duplicate emails
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    role: {
        type: Number,
        default: 0
    }
}, {timestamps: true})// it wil add created time

export default mongoose.model('users', userSchema)