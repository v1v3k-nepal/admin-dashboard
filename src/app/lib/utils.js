import mongoose from "mongoose";

export const connectToDB = async()=>{  
const connection = {};
try{
    if(connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    // connection.isConnected = mongoose.connection.readyState;
    console.log("i am connect to db: success")
    }catch(error){
        console.log("i am connect to DB: error");
        // throw new Error(error)
    }
}