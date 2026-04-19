import  mongoose  from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mwvkqjr.mongodb.net/?appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbLink);
    console.log("DB connected");
  } catch (err) {
    console.log("err", err.message);
  }
};

export default connectDB;