import mongoose from "mongoose";

interface Tconnection {
  isConnected?: number;
}

export const connectToDB = async () => {
  const connection: Tconnection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process?.env?.MONGO as string);
    connection.isConnected = db.connections[0].readyState;
    // connection.isConnected = mongoose.connection.readyState;
    console.log("i am connect to db: success");
  } catch (error) {
    console.log("i am connect to DB: error", error);
    // throw new Error(error)
  }
};
