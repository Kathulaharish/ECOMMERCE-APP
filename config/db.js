import mongoose, { connect } from "mongoose"
import colors from "colors"
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);// bgMagenta.white--in terminal result background "Magenta" text-color : white
    }catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
};

export default connectDB;