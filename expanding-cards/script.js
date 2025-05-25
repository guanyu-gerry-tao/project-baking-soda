const cards = document.querySelectorAll(".container div");
let cards_expended_index = 0;

function click_image() {
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            cards[cards_expended_index].classList.remove("expended_card");
            card.classList.add("expended_card");

            cards_expended_index = index;
        })
    })
    
}

click_image()