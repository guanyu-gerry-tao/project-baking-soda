let cards = document.querySelectorAll('.card');

function createCard() {
    const newCard = document.createElement('div');
    newCard.className = 'card preload';
    newCard.innerHTML = "<span>CONTENT</span>";
    console.log('Creating new card');
    document.querySelector('.container').appendChild(newCard);
    cards = document.querySelectorAll('.card');
    requestAnimationFrame(() => {
        newCard.className = 'card entered';
    });

    return newCard;
}

function removeCard() {
    if (cards.length > 0) {
        const cardToRemove = cards[cards.length - 1];
        cardToRemove.className = 'card exited';
        cardToRemove.remove();
        cards = document.querySelectorAll('.card');
    }
}

function initCards() {
    createCard();
    let cardsBottom = cards[cards.length-1].getBoundingClientRect().bottom;
    let i = 0;
    while (cardsBottom < window.innerHeight && i < 100) {
        console.log('Adding new card');
        createCard();
        cardsBottom = cards[cards.length-1].getBoundingClientRect().bottom;
        i++;
    }
}

initCards();

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight;
    let cardsBottom = cards[cards.length-1].getBoundingClientRect().bottom;
    if (cardsBottom < triggerBottom) {
        console.log('Card is in view');
        createCard();
        cardsBottom = cards[cards.length-1].getBoundingClientRect().bottom;
    }else if (cardsBottom > triggerBottom * 1.2) {
        console.log('Card is not in view');
        removeCard();
    }
})
