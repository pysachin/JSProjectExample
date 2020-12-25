
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }

    subtractBudget(amout) {
        return this.budgetLeft -= amout;
    }

}

class HTML {

    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    printMsg(msg, cssClass) {

        const msgWrapper = document.createElement('div');
        msgWrapper.classList.add('text-center', 'alert', cssClass);
        msgWrapper.appendChild(document.createTextNode(msg));

        // insert into HTML file
        document.querySelector('.primary').insertBefore(msgWrapper, addExpenseForm);

        setTimeout(function () {
            document.querySelector('.alert').remove();
            addExpenseForm.reset();
        }, 3000);

    }

    addExpenseToList(expenseName, amount) {
        const expenseList = document.querySelector('#expenses ul');

        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            ${expenseName}
            <span  class="badge badge-primary badge-pill"> ${amount} </spam>
        `;
        expenseList.appendChild(li);
    }

    updateBudget(amount) {
        const left = budget.subtractBudget(amount);
        budgetLeft.innerHTML = `${left}`;

        if ((budget.budget / 4) > left) {

            budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');

        } else if ((budget.budget / 2) > left) {

            budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-danger');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }

    }

}

const addExpenseForm = document.getElementById("add-expense"),
    budgetTotal = document.querySelector("span#total"),
    budgetLeft = document.querySelector("span#left");

let budget, userBudget;

const html = new HTML();

eventListeners();

function eventListeners() {

    appInit();

    addExpenseForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if (expenseName === '' || amount === '') {
            html.printMsg('All fields are mandatory.', 'alert-danger');
        } else {
            html.addExpenseToList(expenseName, amount);
            html.updateBudget(amount);
            html.printMsg('Added...', 'alert-success');
        }

    })
}

function appInit() {

    userBudget = 500;

    if (userBudget === null || userBudget === '' || userBudget === '0') {
        window.location.reload();
    }

    budget = new Budget(userBudget);
    html.insertBudget(budget.budget);
}