const {Router} =require('express')
const User = require('../models/User')
const router = Router()
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

const jwtSecret = config.get('jwtsecret')

router.post('/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimal size of password 6 symbols').isLength({min: 6}),
        check('password', 'Maximum size of password 50 symbols').isLength({max: 50}),
        check('name', 'Name is necessary field').isLength({min:1}),
        check('name', 'Name is too long').isLength({max:20}),
        check('surname', 'Surname is Necessary field').isLength({min:1}),
        check('surname', 'Surname is too long').isLength({min:20})
    ],
    async(req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array, massage:'Incorrect register data'})
        }

        const {email, password, name, surname} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: 'Current email already in use'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User ({email, password: hashedPassword, name, surname})
        await user.save()
        res.status(201).json({message: 'User is already created'})
    } catch (error) {
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }
})

router.post('/login',
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'Write a password').exists()
    ],
    async(req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array, massage:'Incorrect login data'})
        }

        const {email, password} = req.body
        const user = User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'User is not found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.statusCode(400).json({message: 'Incorrect password, please try again'})
        }

        const token = jwt.sign(
            { UserId: user.id },
            jwtSecret,
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch (error) {
        res.status(500).json({message: 'Something error is occurred, please try again'})
    }

})

export default router