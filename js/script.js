let money, time, expenses, optionalExpenses, ask1, appData;

money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');
ask1 = prompt('Введите обязательную статью расходов в этом месяце');
ans1 = prompt('Во сколько обойдется?');

appData = {
    budget: money,
    timeData: time,
    expenses : {
    },
    optionalExpenses : {},
    income: [],
    savings: false
}

appData.expenses[ask1] = ans1; 

alert(appData.budget / 30);