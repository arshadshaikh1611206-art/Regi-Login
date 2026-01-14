import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/LginForm")
        if (conn.connection) {
            console.log("MongoDB connect Succesfully");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
