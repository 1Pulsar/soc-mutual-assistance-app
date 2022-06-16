import {Router} from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";
import auth from "../middleware/auth.middleware.js";
import expressValidator from "express-validator";

const router = Router()
const check = expressValidator.check
const validationResult = expressValidator.validationResult

router.post('/create', auth, [
    check('title', 'Incorrect length').isLength({min: 5, max: 30}),
    check('text', 'Incorrect length').isLength({min: 5, max: 300}),
    check('price', 'Price does not exist').exists(),
    check('city', 'City does not exist').exists()
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors, message: 'Incorrect post values'})
        }

        const {title, text, price, city} = req.body
        const {UserId} = req.user

        const post = new Post({title, text, price, city, owner: UserId})
        await post.save()
        res.status(201).json({post})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }
})

router.get('/', auth ,async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }
})

router.get('/:userId', auth ,async (req, res) => {
    try {
        const posts = await Post.find({owner: req.params.userId})
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }
})

router.get('/:postId', auth ,async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        if (post) {
            post.views++
            await post.save()
            const owner = await User.findById(post.owner)
            return res.json({post, owner})
        }

        res.status(404).json({message: 'Post not found'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }
})

export default router