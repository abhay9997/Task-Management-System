require('dotenv').config();
const mongoose = require('mongoose');


const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

const fetchTasksFromDB = async (userId) => {
    await connectDB();
    return await mongoose.connection.collection("properties").find({ userId }).toArray();
};

const updateTaskInDB = async (id, status) => {
    console.log("Original ID:", id);
    await connectDB();
    
    // Ensure it's an ObjectId
    const objectId = new mongoose.Types.ObjectId(id);
    console.log("Converted ObjectId:", objectId);

    const updateFields = { $set: status };
    console.log("_id:", objectId);
    console.log("$set:", updateFields);

    const result = await mongoose.connection.collection("properties").findOneAndUpdate(
        { _id: objectId },
        updateFields,
        { returnDocument: 'after'} // use returnDocument instead of returnOriginal
    );

    console.log("result", result);
     return result ;
};

module.exports = { connectDB ,fetchTasksFromDB, updateTaskInDB };
