import {Router} from "express";
import auth from "../middleware/auth.middleware.js";
import User from "../models/User.js";

const router = Router()

router.get('/profile/:userId', auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if (user) {
            res.status(200).json({
                name: user.name,
                surname: user.surname,
                email: user.email,
                phoneNumber: user.phoneNumber
            })
        } else {
            res.status(400).json({message: 'User is not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }
})

export default router