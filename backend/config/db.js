// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();
// const connectDB = async () => {
//   try {
//     // const conn = await mongoose.connect(process.env.MONGO_URI);
//     const conn = await mongoose.connect("mongodb+srv://sunil:sunil123@cluster0.8zxotgq.mongodb.net/myDB?retryWrites=true&w=majority");

//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`❌ MongoDB Connection Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;