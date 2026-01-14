// import express from "express"
// import { USER } from "../model/user";
// import brcypt from "bcrypt"

// export const router = express.Router()

// router.post("/registration", (rerq, res) => {
//     async function register() {
//         let name = document.getElementById("name").value
//         let Email = document.getElementById("email").value
//         let Password = document.getElementById("pass").value
//         try {
//             const { username, email, password } = [name, Email, Password];

//             // Checking if user Exist
//             const userExist = await USER.findOne({ username })
//             if (userExist) {
//                 return res.status(400).json("User already exist")
//             }

//             // Hashing password 
//             const salt = await brcypt.genSalt(10)
//             const hashPass = await brcypt.hash(password, salt)

//             // saving user
//             const user = await USER.create({ username, email, password: hashPass });
//             return res.json({ message: "User registered sucessfully!" })
//         } catch (err) {
//             return res.status(404).json({ error: err.message })
//         }
//     }
// });