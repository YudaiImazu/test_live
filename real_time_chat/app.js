const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");


app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("./public"));


app.get("/", (req,res) => {
    res.send("Welcome to the home page baby");
})