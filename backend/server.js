const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls =require('./routes/routes')
dotenv.config()
const cors = require('cors')

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("DataBase Connected"))


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000,()=> console.log("Server is Running")) 