import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age: Number,
    email:{
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema);