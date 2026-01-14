import express from "express";
import mongoose, { connect } from "mongoose";
import { connectDB } from "./database/ConnectDb.js";
import { USER } from "./model/user.js"
import register from "./routes/regis.js";

const port = 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use("/register", register);
app.use(express.static('src'))

const startServer = async () => {
    await connectDB(); // connect to MongoDB first
    app.listen(port, () => {
        console.log(`Server running on http://127.0.0.1:${port}`);
    });
};
startServer();