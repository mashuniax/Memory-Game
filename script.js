let card1,
    card2,
    blockGame,
    reverseCardAdd = false,
    countWin = 0;
    countStep = 0;
const cards = document.querySelectorAll('.card-item');
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

for (let i = 0; i < cards.length; i++) {
    cards[i].style.order = shuffledArray[i]
}

const reverseCard = i => {
    if (blockGame == true) return;
    const target = i.target.parentElement;
    if (target === card1) return;
    
    target.classList.add('reverse');

    
    if (!reverseCardAdd) {
        reverseCardAdd = true;
        card1 = target;

    } else {
        reverseCardAdd = false;
        card2 = target; 
        checkCards()
    }
   
};
    

function checkCards() {
    if (card1.dataset.name === card2.dataset.name) {
        
        card1.removeEventListener('click', reverseCard)
        card2.removeEventListener('click', reverseCard)
        countWin += 1;
        if (countWin == 8) {
            setTimeout(() => {
                alert('Ваш результат: ' + (countStep*2 + 16))
            }, 1500);
           
        }
        
    }  else {
        blockGame = true;
        setTimeout(() => {
            card1.classList.remove('reverse');
            card2.classList.remove('reverse');
            countStep += 1;
            blockGame = false;
        }, 1500)
       
    } console.log(countStep)
};

cards.forEach(item => {
    item.addEventListener('click', reverseCard);
     
})


function reset() {

    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    for (let k = 0; k < cards.length; k++) {
        cards[k].removeEventListener('click', reverseCard);
        cards[k].classList.remove('reverse');
        cards[k].style.order = shuffledArray[k]
       
    }
   
    reverseCardAdd = false;
    blockGame = false;
    countWin = 0;
    countStep = 0;
    cards.forEach(item => {
        item.addEventListener('click', reverseCard);
         
    })
}
