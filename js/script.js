let money, time, expenses, optionalExpenses, appData;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income: [],
    savings: true,
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце');
    
            appData.expenses[i] = a;
        }
    },
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка!');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка!');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка!');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
        }
    },
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце');
                b = prompt('Во сколько обойдется?');
        
            if (typeof(a) === 'string' &&
            typeof(a) != null &&
            typeof(b) != null &&
            a != '' &&
            b != '' &&
            a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i -= 1;
            }
        }
    },
    chooseIncome: function() {
        let items;

        do {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        } while(items == '' || items == null || (typeof(items) != "string"))
        
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        
        appData.income.forEach( function(item, i){
            console.log('Способы доп. заработка: ' + (i + 1) + ' ' + item);
        })
    }
}





// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце');
//     b = prompt('Во сколько обойдется?');

//     if (typeof(a) === 'string' &&
//     typeof(a) != null &&
//     typeof(b) != null &&
//     a != '' &&
//     b != '' &&
//     a.length < 50) {
//         console.log('done!');
//         appData.expenses[a] = b;
//     } else {
//         console.log('second!');
//         i -= 1;
//     }
//     i++;
// }


// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце');
//         b = prompt('Во сколько обойдется?');

//     if (typeof(a) === 'string' &&
//     typeof(a) != null &&
//     typeof(b) != null &&
//     a != '' &&
//     b != '' &&
//     a.length < 50) {
//         console.log('done!');
//         appData.expenses[a] = b;
//     } else {
//         console.log('second!');
//         i -= 1;
//     }

//     i++;
// } while (i < 2);
