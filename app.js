const btns = document.querySelectorAll('.btn');
const submitEl = document.querySelector('#submit-btn');
const containerOne = document.querySelector('.container');
const containerTwo = document.querySelector('.container2');
const ratingEl = document.querySelector('#rating');
const submitEl2 = document.querySelector("#submit-btn-2")
let scoreRating = 3;


submitEl.addEventListener('click', onSubmit);
submitEl2.addEventListener('click', rateAgain);
btns.forEach(function(btn){
    btn.addEventListener('click', handleBtns);
})



function onSubmit() {
    containerTwo.style.display = 'block';
    ratingEl.textContent = scoreRating;
}


function handleBtns(e) {
    scoreRating = e.target.textContent;
    console.log(scoreRating)
}

function rateAgain() {
    containerOne.style.display = 'block'
    containerTwo.style.display = 'none'
}