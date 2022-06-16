import {Router} from "express";
import expressValidator from "express-validator";
import auth from "../middleware/auth.middleware.js";
import User from "../models/User.js";

const router = Router()
const check = expressValidator.check
const validationResult = expressValidator.validationResult

router.put('/task', auth, [
    check('price', 'Incorrect price').isLength({min: 1, max: 5})
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors, message: 'Incorrect post values'})
        }

        const {price, recipientId} = req.body
        const {UserId} = req.user
        const user = await User.findById(UserId)
        const recipientUser = await User.findById(recipientId)
        if (user && recipientUser && Number(user.balance) >= Number(price)) {
            user.balance = user.balance - price
            recipientUser.balance = recipientUser.balance + price
            await user.save()
            await recipientUser.save()
            res.status(200)
        } else {
            res.status(400).json({message:'Insufficient funds'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }
})

export default router