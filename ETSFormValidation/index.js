const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const name = document.getElementById('name');
const pob = document.getElementById('pob');
const telephone = document.getElementById('telephone');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const genderMale = document.getElementById('male');
const genderFemale = document.getElementById('female');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const nameValue = name.value.trim(); 
    const pobValue = pob.value.trim();
    const telephoneValue = telephone.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (pobValue === '') {
        setError(pob, 'Place of birth is required');
    } else {
        setSuccess(pob);
    }

    if (nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    const telephonePattern = /^08\d{8,10}$/;
    if (telephoneValue === '') {
        setError(telephone, 'Telephone is required');
    } else if (!telephonePattern.test(telephoneValue)) {
        setError(telephone, 'Provide a valid telephone number (e.g., 08xxxxxxxx)');
    } else {
        setSuccess(telephone);
    }

    if (day === '' || month === '' || year === '') {
        setError(document.querySelector('.dob-options'), 'Complete your date of birth');
    } else {
        setSuccess(document.querySelector('.dob-options'));
    }

    if (!genderMale && !genderFemale) {
        setError(document.querySelector('.gender-options'), 'Select your gender');
    } else {
        setSuccess(document.querySelector('.gender-options'));
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
