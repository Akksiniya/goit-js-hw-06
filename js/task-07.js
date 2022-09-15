const textRef = document.querySelector('#text');

console.log(textRef);

const inputRef = document.querySelector('#font-size-control');

console.log(inputRef);

const controlText = (event) => {

    textRef.style.fontSize =` ${event.target.value}px`;
};

inputRef.addEventListener('input', controlText);
