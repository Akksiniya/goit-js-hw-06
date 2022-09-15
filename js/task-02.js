const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

console.log(listEl);

const createItems = ingredients.map(ingredient => {

  const listItem = document.createElement('li');
  listItem.classList.add('item');

  listItem.textContent = `${ingredient}`;



  return listItem;

  
});


listEl.append(...createItems);


