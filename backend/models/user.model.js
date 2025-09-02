import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    role: {
        type: String, enum: ['user', 'owner', 'deliveryBoy'], required: true
    },
    resetOtp: {
        type: String
    },
    otpExpires: {
        type: Date
    },
    isOtpVerified: {
        type: Boolean,
        default: false
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }],
    location: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], default: [0, 0] }
    },
    isOnline: { type: Boolean, default: false },
    socketId: { type: String, default: null },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
   
}, { timestamps: true })

userSchema.index({ location: "2dsphere" });

const User = mongoose.model("User", userSchema)
export default User