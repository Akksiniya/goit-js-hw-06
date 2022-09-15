const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

const firstData = nameOutput.textContent;

const nameEvent = (event) => {

    const texName = event.currentTarget.value;
    nameOutput.textContent = texName || firstData;

};

nameInput.addEventListener("input", nameEvent);