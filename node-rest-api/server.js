const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
require('dotenv').config();

mongoose.connect(process.env.DB,
    {useNewUrlParser:true,useUnifiedTopology: true},()=>{
        console.log('Connected to DB !!')
})

app.use(express.json());
app.use(helmet())
app.use(morgan('common'))
app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/posts',postRoute)

app.get('/',(req,res)=>{
    res.send("welcome")
})


app.listen(3000,()=>{
    console.log("Server is running...")
})