

const sendbtn = document.getElementById('id-send'),
    email = document.getElementById('id-To'),
    subject = document.getElementById('id-Subject'),
    msg = document.getElementById('id-Msg')
    ;


eventListener();

function eventListener() {

    //App init
    appInit();
    email.addEventListener('blur', validateForm);
    subject.addEventListener('blur', validateForm);
    msg.addEventListener('blur', validateForm);
}

function validateForm() {

    let error;

    validateLength(this);
    if (this.type === 'email') {
        validateEmail(this);
    }
    sendbtn.disabled = false;
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