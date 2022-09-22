const inputRef = document.querySelector('input');

const dataLengthRef = inputRef.getAttribute('data-length');



const validationInput = (event) => {

    const textInput = event.currentTarget.value.length === Number(dataLengthRef);

    if (textInput) {

      changeClass('valid', 'invalid');
    }

    else {
        changeClass('invalid', 'valid');

        };

};

function changeClass (classAdd, classRemove) {

    inputRef.classList.add(classAdd);
    inputRef.classList.remove(classRemove)};




inputRef.addEventListener('blur', validationInput);