import mongoose from "mongoose";

const schema=mongoose.Schema;


const newuser=new schema({
    email:String,
    password:String
})


const hash_password=mongoose.model('hash_password',newuser)

export default hash_password

