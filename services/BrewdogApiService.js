let https;
try {
  https = require('node:https');
} catch (err) {
  console.error('https support is disabled!');
}
const foodList = require('./foodList');


const BASE_URL = 'https://punkapi-alxiw.amvera.io/v3/';

function getFoodList() {
    try{
        return foodList;
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

// This function is to be used strictly in the test file (testBrewdogApiService.js)
// the following way:
// node testBrewdogApiService.js

// It creates an array of unique values. The array is saved in foodList.js
async function getDistinctFoodList() {
    try{
        const foodSet = new Set();
        for(let i = 1; i <= 14; i++) {
            const res = await fetch(`${BASE_URL}beers?page=${i}`);
            console.log(`${BASE_URL}beers?page=${i}`);
            const beers = await res.json();

            if (beers) {beers.forEach(beer => {
                beer.food_pairing.forEach(food => foodSet.add(food));
            });}
        }
        console.log([...foodSet]);
        return [...foodSet];
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

async function getBeerList(pagenumber) {
    try{
        const res = await fetch(`${BASE_URL}/beers?page=${pagenumber}`);
        const APIResp = await res.json();
        if (APIResp) {
            return APIResp
        }
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

async function getOneBeer(beerId) {
    try{
        const res = await fetch(`${BASE_URL}/beers/${beerId}`);
        const APIResp = await res.json();
        if (APIResp) {
            return APIResp
        }
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

async function getOneBeerByFood(foodName) {
    // https://punkapi-alxiw.amvera.io/v3/beers?food=Sashimi
    try{
        const res = await fetch(`${BASE_URL}/beers?food=${foodName}`);
        const APIResp = await res.json();
        if (APIResp) {
            return APIResp
        }
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

module.exports = {
    getDistinctFoodList,
    getFoodList,
    getBeerList,
    getOneBeer,
    getOneBeerByFood
};