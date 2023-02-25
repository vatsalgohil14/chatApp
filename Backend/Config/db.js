const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo DB Connected ${conn.connection.host}`.bgGreen);
  } catch (err) {
    console.log(`Error : ${err.message}`.bgRed);
    process.exit();
  }
};

module.exports = connectDB;
