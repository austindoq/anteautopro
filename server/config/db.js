import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(`There was an issue connecting to MongoDB: ${error}`);
  }
}

export default connectDb;
