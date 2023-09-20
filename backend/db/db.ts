
const mongoose = require("mongoose");

async function connectDB() {
  try {
    // mongoose.set("strictQuery",false);
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
}

export default connectDB