import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("MONGODB connected");
  } catch (error) {
    console.log("MONGODB connection Failed", error);
  }
};

export default connectDB;
