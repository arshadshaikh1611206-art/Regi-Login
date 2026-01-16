import express from "express";
import { USER } from "../model/user.js";
import bcrypt from "bcrypt";

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Checking if there are any empty field
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Every Field should be fill" })
        }

        // Checking if user Exist
        const userExist = await USER.findOne({ username })
        if (userExist) {
            return res.status(400).json({ message: "User already exist" })
        }

        // Hashing password 
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        // saving user
        const user = await USER.create({ username, email, password: hashPass });
        return res.json({ message: "User registered sucessfully!" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
    finally {
        console.log(req.body);
    }
});

export default router;