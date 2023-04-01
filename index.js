require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Book =require('./models/books')
const app = express()
const PORT = process.env.PORT|| 4000
mongoose.set('strictQuery',false)
const connectDB=async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
app.get('/',(req,res)=>{
    res.send({
        title:'Books'
    })
})

app.get('/add-note',async(req,res)=>{
    try {
        await Book.insertMany([
            {
                title:'Son of Anarchy',
                body:'test body'
            }
        ])
        res.status(200).json({
            data:'success'
        })
    } catch (error) {
        console.log(error)
    }
})



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on port : ${PORT}`)
    })
})

