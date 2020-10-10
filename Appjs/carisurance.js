
const requestQuoteForm = document.getElementById('request-quote');
const name = document.getElementById('name');
const eemail = document.getElementById('email');
const make = document.getElementById('make');
const year = document.getElementById('year');

class HTMLUI {

}

    HTMLUI.prototype.displayYears = function () {

    const max = new Date().getFullYear(),
    min = max - 20;

    const selectYears = document.getElementById('year');

    for (let i = max; i>= min; i--) {

    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYears.appendChild(option);
}
}

HTMLUI.prototype.showResults = function(price,icar){
    
    const result = document.getElementById('result');
    const div = document.createElement('div');    
    
    let make = "";
    
    switch(icar.make)
    {
        case '1':
            make = 'American';
            break;
        case '2':
            make = 'Asian';
            break;
        case '3':
            make = 'European';
            break;
    }

    const spinner = document.querySelector("#loading img");
    spinner.style.display = 'block';

    div.innerHTML = `
        <p class="header"> Summary </p>
        <p> Make : ${make} </p>
        <p> Year : ${icar.year} </p>
        <p> Level : ${icar.level} </p>
        <p class="total"> Total: $ ${price} </p>
    `;

    setTimeout(()=>{
        spinner.style.display = 'none';
        result.appendChild(div);
    },3000)

    
}

class Insurance {

    constructor(make, year, level) {
        this.make = make;
        this.year = year;
        this.level = level;
    }

    calculateQuotation() {
        let price;

        price = this.calculateQuotationOnMake(price);
        price = this.calculateQuotationOnYear(price);
        price = this.calculateQuotationOnLevel(price);
        
        return price;
    }

    calculateQuotationOnMake(price) {
        const base = 2000;

        switch (this.make) {
            case '1':
                price = base * 1.15;
                break;
            case '2':
                price = base * 1.05;
                break;
            case '3':
                price = base * 1.35;
                break;
        }
        return price;
    }

    calculateQuotationOnYear(price) {
        const ydiff = new Date().getFullYear() - this.year;
        price = price - ((ydiff * 3) * price) / 100;
        return price;
    }

    calculateQuotationOnLevel(price) {

        if (this.level === 'basic') {
            price = price * 1.30;
        } else {
            price = price * 1.50;
        }
        return price;
    }

}

eventListener();

function eventListener() {
    //App init    
    const html = new HTMLUI();
    html.displayYears();

    name.addEventListener('focus', () => {
        name.classList.remove('error');
    });
    eemail.addEventListener('focus', () => {
        name.classList.remove('error');
    });
    make.addEventListener('focus', () => {
        name.classList.remove('error');
    });
    year.addEventListener('focus', () => {
        name.classList.remove('error');
    });
}

requestQuoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const level = document.querySelector('input[name="level"]:checked');
    const isValidName = ValidateLength(name);
    const isValidEmail = ValidateLength(eemail);
    const isValidMake = ValidateLength(make);
    const isValidYear = ValidateLength(year);
    const isValidLevel = ValidateLength(level);

    if (isValidName && isValidEmail && isValidMake && isValidYear && isValidLevel) {
        
        const resultdiv = document.querySelector("#result div");
        if(resultdiv != null)
        {
            resultdiv.remove();
        }
        const icar = new Insurance(make.value, year.value, level.value);
        const price = icar.calculateQuotation();
        const html = new HTMLUI();
        html.showResults(price,icar);
    }

})

function ValidateLength(el) {
    if (el === null || el === undefined || el.value.length <= 0) {
        el.classList.add('error');
        return false;
    } else {
        el.classList.remove('error');
        return true;
    }
}

