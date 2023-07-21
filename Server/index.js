const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const bodyParse = require('body-parser');
const apiRouter = require('./Routes/items');
const router = express.Router();

const app = express();

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());
app.use(cors());
app.use("/items", apiRouter);

const server = app.listen(8080, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("App is listening on port", port)

});