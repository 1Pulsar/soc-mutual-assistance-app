import express from "express"
import config from "config"
import mongoose from "mongoose"
import authRouter from "./routes/auth.routes.js"
import postRouter from "./routes/post.routes.js"
import paymentRouter from "./routes/payment.routes.js"
import userRouter from "./routes/user.routes.js"
import cors from "cors"

const app = express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/user', userRouter)


const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {})
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()