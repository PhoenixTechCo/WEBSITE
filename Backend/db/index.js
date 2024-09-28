import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js"



const connectDB = async ()=> {
    try {
        const conInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected sucessfully at : ${conInstance.connection.host}`);
        
        
    } catch (error) {

        console.log("Mongodb Connection Error ", error);
        process.exit(1);
        
    }
}

export default connectDB