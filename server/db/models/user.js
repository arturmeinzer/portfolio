import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import {
    ROLE_GUEST,
    ROLE_ADMIN,
} from "../../../constants/roles.js";

const { Schema } = mongoose;

const userSchema = new Schema({
    avatar: String,
    email: {
        type: String,
        required: "Email is required!",
        lowercase: true,
        index: true,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/],
    },
    name: {
        type: String,
        minlength: [6, "Minimum length is 6 characters"],
    },
    username: {
        type: String,
        required: true,
        minlength: [6, "Minimum length is 6 characters"],
    },
    password: {
        type: String,
        minlength: [6, "Minimum length is 6 characters"],
        maxlength: [32, "Maximum length is 32 characters"],
        required: true,
    },
    role: {
        enum: [ROLE_GUEST, ROLE_ADMIN],
        type: String,
        required: true,
        default: "guest",
    },
    info: String,
    createdAt: { type: Date, default: Date.now },
});

// eslint-disable-next-line func-names
userSchema.pre("save", function (next) {
    const user = this;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);

    return next();
});

// eslint-disable-next-line func-names
userSchema.methods.validatePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model("User", userSchema);
