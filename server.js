const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/ping', (req, res) => {
    res.send("This is an express app with ping route")
})
  
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error: ", err))


app.get('/', (req, res) => {
    if(mongoose.connection.readyState === 1){
        res.send("Connected to MongoDB")
    }else{
        res.send("Did not connect to MongoDB")
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})