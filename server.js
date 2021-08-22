const express = require("express");
const app = express();
const port = 5000
const expressParser = require('express-parser');
const dotenv = require("dotenv");
'dotenv'.config();

// json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const { default: User } = require("./models/userModel");
mongoose.connect(
    process.env.MONGODB_URL,
    {
        useNewUrlParser: true, 
        useUnifiedTopology:true,
        useCreateIndex: true, 
        useFindAndModify: false
    }).then(() => console.log("Connection Successful"))
      .listen(port, ()=> console.log('Server started!'))
      .catch(err => console.log(err))

    
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {

    const user = new User(req.body)
})