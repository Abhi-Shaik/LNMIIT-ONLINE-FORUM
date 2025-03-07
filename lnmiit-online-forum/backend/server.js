//importing express module
const express = require('express')
const app=express()
//importing cross origin resourse sharing
const cors = require('cors')
 
const path = require('path')
const PORT= 80;
const db= require ('./db')
const router = require('./routes/indexs')

//database connection
db.connect();

//import middle ware bodyParser
const bodyParser = require('body-parser')
//middle ware for json & url encoded data
app.use(bodyParser.json({ limit:"50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}))
  
//cors
app.use((req, res, next) =>{
    req.header("Access-Control-Allow-Origin","*")
    req.header("Access-Control-Allow-Headers","*");
    next()
})

//routes
app.use("/api",router)


app.use("/uploads",express.static(path.join(__dirname,"/../uploads")));
app.use(express.static(path.join(__dirname,"/../frontend/build")));

app.get("*",(req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    } catch(e) {
        res.send("Oops! unexpected error");
    }
});

app.use(cors())

//server listening
app.listen(process.env.PORT || PORT, () =>{
    console.log('Listening on port no',PORT)
})