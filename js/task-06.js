const inputRef = document.querySelector('input');

const dataLengthRef = inputRef.getAttribute('data-length');


const validationInput = (event) => {

    const textInput = event.currentTarget.value.length === Number(dataLengthRef);

    if (textInput) {

        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }

    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    };

};

inputRef.addEventListener('blur', validationInput);