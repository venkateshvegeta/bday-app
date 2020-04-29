const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000
const publicDirPath = path.join(__dirname,'../public')
app.use(express.static(publicDirPath))
app.set('views',path.join(__dirname,'../public/html'))
app.set('view engine', 'hbs')
app.get("/",(req,res) => {
    res.render('index',{})
})

app.get("/conts",(req,res) => {
    res.render('conts',{})
})

app.listen(port,() => {
    console.log("Server is up on Port: ",port)
    
})