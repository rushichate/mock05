const express = require("express")
require("dotenv").config()
const cors = require("cors")
const { connection } = require("./db")
const app = express()

app.use(express.json())
app.use(cors())


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`Connected to DB and running on port ${process.env.port}`)
    }catch(error){
        console.log(error)
    }
})