const search = document.getElementById("searchMeal");


search.addEventListener("keyup", function(){
    let value = search.value.toLowerCase();
    let cards = document.querySelectorAll(".meal-card");
    cards.forEach(card => {
        let name = card
            .querySelector("h3")
            .textContent
            .toLowerCase();
        if(name.includes(value)) {
            card.style.display="block";
        } else {
            card.style.display="none";
        }
    });
});