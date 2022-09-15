
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');

const buttonIncrementRef = document.querySelector('button[data-action="increment"]');


const valueEl = document.querySelector('#value');


let counterValue = 0;

const decrementClick = () => {
    counterValue -=1;
    valueEl.textContent = counterValue;
}

const incrementClick = () => {
    counterValue +=1;
    valueEl.textContent = counterValue;
}

buttonDecrementRef.addEventListener("click", decrementClick);
buttonIncrementRef.addEventListener("click", incrementClick);