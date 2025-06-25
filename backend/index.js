import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import geminiResponse from "./gemini.js"
dotenv.config({})


const app=express()

//middleware
app.use(cors({
    origin:"https://chatbot-frontend-oszs.onrender.com",
    credentials:true
}))
const port=process.env.PORT
app.use(express.json())
app.use(cookieParser())


//api's
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port,()=>{
    connectDb()
    console.log(`server started at port ${port}`)
})

