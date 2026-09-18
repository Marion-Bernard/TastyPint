const searchMeal = document.getElementById("searchMeal");

if (searchMeal) {
  searchMeal.addEventListener("keyup", function () {
    let value = searchMeal.value.toLowerCase();
    let cards = document.querySelectorAll(".meal-card");
    cards.forEach(card => {
      let name = card.querySelector("p").textContent.toLowerCase();
      card.style.display = name.includes(value) ? "block" : "none";
    });
  });
};

const searchBeer = document.getElementById("searchBeer");

if (searchBeer) {
  searchBeer.addEventListener("keyup", function () {
    let value = searchBeer.value.toLowerCase();
    let cards = document.querySelectorAll(".beer-card");
    cards.forEach(card => {
      let name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(value) ? "flex" : "none";
    });
  });
};