const form  = document.getElementById('form');
const firstName  = document.getElementById('FN');
const lastName = document.getElementById('LN');
const email = document.getElementById('E');
const organisation  = document.getElementById('Org');
const position = document.getElementById('Pos');
const password = document.getElementById('Pass');
const passwordRe = document.getElementById('RePass');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('')
}


