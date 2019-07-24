let money, time, expenses, optionalExpenses, appData;

let btnStart = document.getElementById('start');
valBud = document.getElementsByClassName('budget-value')[0],
    valDayBud = document.getElementsByClassName('daybudget-value')[0],
    valLvl = document.getElementsByClassName('level-value')[0],
    valExp = document.getElementsByClassName('expenses-value')[0],
    valOpt = document.getElementsByClassName('optionalexpenses-value')[0],
    valInc = document.getElementsByClassName('income-value')[0],
    valMonth = document.getElementsByClassName('monthsavings-value')[0],
    valYear = document.getElementsByClassName('yearsavings-value')[0],
    inputExp = document.getElementsByClassName('expenses-item'),
    btns = document.getElementsByTagName('button'),
    btnApprove1 = btns[0],
    btnApprove2 = btns[1],
    btnCalc = btns[2],
    inputsOpt = document.querySelectorAll('.optionalexpenses-item'),
    inputChoose = document.querySelector('.choose-income'),
    checkboxSav = document.querySelector('#savings'),
    inputSum = document.querySelector('#sum'),
    inputPerc = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');





function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }

    appData.budget = money;
    appData.timeData = time;
    valBud.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
}

btnStart.addEventListener('click', start);

btnApprove1.addEventListener('click', function () {
    if (btnStart.classList.contains('active')) {
        let sum = 0;

        for (let i = 0; i < inputExp.length; i++) {
            let a = inputExp[i].value;
                b = inputExp[++i].value;

            if (typeof (a) === 'string' &&
                typeof (a) != null &&
                typeof (b) != null &&
                a != '' &&
                b != '' &&
                a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i -= 1;
            }
        }

        valExp.textContent = sum;
    } else {
        return false;
    }
})

btnApprove2.addEventListener('click', function () {
    if (btnStart.classList.contains('active')) {

        for (let i = 0; i < inputsOpt.length; i++) {
            let opt = inputsOpt[i].value;

            appData.expenses[i] = opt;
            valOpt.textContent += appData.expenses[i] + ' ';
        }
    } else {
        return false;
    }
});

btnCalc.addEventListener('click', function () {
    if (btnStart.classList.contains('active')) {
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - +valExp.textContent ) / 30).toFixed();
            valDayBud.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                valLvl.textContent = 'Минимальный уровень достатка!';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                valLvl.textContent = 'Средний уровень достатка!';
            } else if (appData.moneyPerDay > 2000) {
                valLvl.textContent = 'Высокий уровень достатка!';
            } else {
                valLvl.textContent = 'Произошла ошибка!'
            }
        } else {
            valDayBud.textContent = 'Произошла ошибка!';
        }
    } else {
        return false;
    }
});

inputChoose.addEventListener('input', function () {
    let items = this.value;

    appData.income = items.split(', ');
    valInc.textContent = appData.income;
});

checkboxSav.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savigs = false;
    } else {
        appData.savings = true;
    }
});

inputSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +inputSum.value,
            percent = +inputPerc.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        valMonth.textContent = appData.monthIncome.toFixed(1);
        valYear.textContent = appData.yearIncome.toFixed(1);
    }
});

inputPerc.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +inputSum.value,
            percent = +inputPerc.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        valMonth.textContent = appData.monthIncome.toFixed(1);
        valYear.textContent = appData.yearIncome.toFixed(1);
    }
});


btnStart.addEventListener('click', function () {
    this.classList.add('active');
})


appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};