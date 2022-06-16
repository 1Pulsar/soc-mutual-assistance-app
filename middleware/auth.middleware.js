import jwt from "jsonwebtoken"
import config from "config"

const auth = async (req, res, next) => {
    if(req.method === 'OPTIONS') {
        return next()
    }

    try{
        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
        if (!token) {
            res.status(401).json({ message: 'You are not authorized' })
        }
        req.user = await jwt.verify(token, config.get('jwtsecret') )

        next()
    } catch (e) {
        console.log(e)
        res.status(401).json({message:'You are not authorized'})
    }
}

export default auth