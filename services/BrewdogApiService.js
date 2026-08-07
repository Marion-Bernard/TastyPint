let https;
try {
  https = await import('node:https');
} catch (err) {
    console.error('https support is disabled!');
}

const BASE_URL = 'https://punkapi-alxiw.amvera.io/v3/';

export async function getBeerList(pagenumber) {
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

export async function getOneBeer(beerId) {
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

export async function getOneBeer(foodName) {
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