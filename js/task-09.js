function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');

console.log(bodyRef);

const colorTextRef = document.querySelector('.color');

console.log(colorTextRef);

const buttonRef = document.querySelector('.change-color');

console.log(buttonRef);

const ChangeBodyColor = () => {

  bodyRef.style.backgroundColor = getRandomHexColor();
  colorTextRef.textContent = getRandomHexColor();
};

buttonRef.addEventListener('click', ChangeBodyColor);