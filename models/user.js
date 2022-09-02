import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: "String",
        require: [true, "PLese Enter Name"],
    },
    email: {
        type: "String",
        require: [true, "PLese Enter Email"],
        unique: true,
    },
});
export const User = mongoose.model("User", schema);