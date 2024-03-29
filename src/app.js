import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();


// middleware for coars 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // form data do 
app.use(express.static("public"))

// middleware  for cookie 
app.use(cookieParser())


// routes started / import 
import userRouter from './routes/user.routes.js'

// routes declearation 

app.use('/api/v1/users', userRouter)





export { app };
