import express from "express";
import { USER } from "../model/user.js";
import bcrypt from "bcrypt";
import path from "path"
import { fileURLToPath } from "url";

const router = express.Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill the following details" })
        }

        const user = await USER.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "The current user not Exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Password" })
        }

        return res.status(200).json({
            message: "User login Sucessfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
    finally {
        console.log(req.body);
    }
});

export default router;