const express = require ('express');
const cors = require('cors');
const routes = require('./routes/index');
const postsRoute = require('./routes/posts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//const PORT = process.env.PORT;
const dbURL = "mongodb:" + process.env.MONGO_USER + ":" + process.env.MONGO_PW + "@ds263146.mlab.com:63146/react-express";

mongoose.connect(dbURL, { useNewUrlParser: true }, err=> {
    if(err){
        console.log("error to connect to db");
    }
    else{
        console.log("connected to db");
    }
});

app.use(cors());
app.options('*', cors());

app.use('/', routes);
app.use('/posts', postsRoute);

app.listen(5000, function(){
    console.log(`Listening to port 5000`);
});
