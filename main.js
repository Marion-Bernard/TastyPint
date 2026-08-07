const express = require('express');
const axios = require("axios");
const app = express();
const API_URL = "https://punkapi-alxiw.amvera.io/v3";

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("pages/home");
});



app.listen(8080);
console.log("server listenning at http://127.0.0.1:8080. Press ctrl+c to exit");