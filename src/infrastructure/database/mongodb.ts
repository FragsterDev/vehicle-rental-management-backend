import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI!);

    console.log(
      `MongoDB Connection was successful: ${connection.connection.host}`,
    );
  } catch (error) {
    console.log(`MongoDB Connection Failed with Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
