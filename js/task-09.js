function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');

const colorTextRef = document.querySelector('.color');

const buttonRef = document.querySelector('.change-color');


const ChangeBodyColor = () => {

  bodyRef.style.backgroundColor = getRandomHexColor();
  colorTextRef.textContent = getRandomHexColor();
};

buttonRef.addEventListener('click', ChangeBodyColor);