const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const Form = require('./routes/form.route')
dotenv.config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

app.use('/',(req,res)=>{
    res.send('Welcome')
})

app.use('/',Form)

mongoose
  .connect(process.env.MONGODB_URL,)
  .then(() =>{
     console.log("connected")
    })
  .catch((e) => console.log(e));

app.listen(1000, ()=>{
    console.log('running port 1000 ');
})
