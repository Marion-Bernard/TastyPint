const express = require('express');
const axios = require("axios");
const app = express();
const API_URL = "https://punkapi-alxiw.amvera.io/v3";
const { getOneBeerByFood } = require('./services/BrewdogApiService');
const { getFoodList } = require('./services/BrewdogApiService');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var food = getFoodList();
  res.render("pages/Home", { meals : food });
});

app.get('/beerList', async function (req, res) {
  const meal = req.query.meal;
  const beers = await getOneBeerByFood(meal);
  res.render("pages/BeerList", { beers });
});


app.listen(8080);
console.log("server listenning at http://127.0.0.1:8080. Press ctrl+c to exit");