const listNumber = document.querySelector('#categories');

console.log (`Number of categories: ${listNumber.children.length}`);




const itemList = document.querySelectorAll('.item');

itemList.forEach ((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.querySelectorAll('li').length}`);
});





