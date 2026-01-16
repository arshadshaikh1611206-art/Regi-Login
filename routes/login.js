import express from "express";
import { USER } from "../model/user.js";
import bcrypt from "bcrypt";

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await USER.findOne(email);
        const isMatch = await bcrypt.compare(password, user.password)

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill the following details" })
        }

        if (!user) {
            return res.status(401).json({ message: "The current user not Exist" })
        }

        if (user) {
            if (!isMatch) {
                return res.status(200).json({ message: "Invalid Password" })
            }
            return res.status(200).json({ data: USER.findOne(email) })
        }

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
    finally {
        console.log(req.body);
    }
});

export default router;