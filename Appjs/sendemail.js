

const sendbtn = document.getElementById('id-send'),
    email = document.getElementById('id-To'),
    subject = document.getElementById('id-Subject'),
    msg = document.getElementById('id-Msg'),
    reset = document.getElementById('id-reset'),
    form = document.getElementById('id-email-form')
    ;


eventListener();

function eventListener() {

    //App init
    appInit();
    email.addEventListener('blur', validateForm);
    subject.addEventListener('blur', validateForm);
    msg.addEventListener('blur', validateForm);
    reset.addEventListener('click', resetForm);
    sendbtn.addEventListener('click', sendForm);
}

function validateForm() {

    let error;

    if (this.type === 'email') {
        validateLength(this);
        validateEmail(this);
    }
    else {
        validateLength(this);
    }

    error = document.getElementsByClassName('error');

    if (error.length <= 0) {
        sendbtn.disabled = false;
    }
    else {
        sendbtn.disabled = true;
    }

}

function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderColor = 'green';
        field.classList.remove('error');
        return true;
    } else {
        field.style.borderColor = 'red';
        field.classList.add('error');
        return false;
    }
}

function validateEmail(field) {
    let email = field.value;
    if (email.indexOf('@') != -1) {
        field.style.borderColor = 'green';
        field.classList.remove('error');
        return true;
    } else {
        field.style.borderColor = 'red';
        field.classList.add('error');
        return false;
    }
}


function appInit() {
    sendbtn.disabled = true;
}

function resetForm() {
    form.reset();
    sendbtn.disabled = true;
}

function sendForm() {
    sendbtn.disabled = true;
    const spinner = document.querySelector("#id-spinner");
    spinner.style.display = 'block';
    spinner.style.marginLeft = 'auto';
    spinner.style.marginRight = 'auto';
    spinner.style.width = '50%';

    setTimeout(function () {

        spinner.style.display = 'none';

        const sent = document.querySelector("#id-sent");
        sent.style.display = 'block';
        sent.style.marginLeft = 'auto';
        sent.style.marginRight = 'auto';
        sent.style.width = '50%';

        setTimeout(function () {
            form.reset();
            sent.style.display = 'none';
        }, 3000);

    }, 5000)

}

