function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  elementBox: document.querySelector('#boxes'),
}

console.log(refs.input);
console.log(refs.buttonCreate);
console.log(refs.buttonDestroy);
console.log(refs.elementBox);



//    refs.input.addEventListener('input',
//  (event) => {const amount = Number(event.currentTarget.value);
//   console.log(amount);
// });


const boxesElem =[];

function createBoxes (amount) {

 for (let i = 1; i <= refs.input.value; i += 1) {

    const size = `${20 + i*10}px`;

    const markupElem = document.createElement('div');
    markupElem.style.width = size;
    markupElem.style.height = size;
    markupElem.style.backgroundColor = getRandomHexColor();

    boxesElem.push(markupElem);
        
     };

     console.log(boxesElem);


     refs.elementBox.append(...boxesElem);

      };
     

      function destroyBoxes() {

        refs.elementBox.innerHTML = "";
        refs.input.value = "";

        
          };

       

    refs.buttonCreate.addEventListener('click', createBoxes);
    refs.buttonDestroy.addEventListener('click', destroyBoxes);