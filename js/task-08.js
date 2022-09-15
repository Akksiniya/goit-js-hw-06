const formRef = document.querySelector('.login-form');

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {

        window.alert("Please fill in all the fields!");
    };

    console.log(`Email: ${email.value}, Password: ${password.value}`);

    event.currentTarget.reset();

};

formRef.addEventListener("submit", handleSubmit);


