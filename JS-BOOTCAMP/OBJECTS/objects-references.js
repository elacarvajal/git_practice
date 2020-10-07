// let myAccount = {
//     name: 'Angela Carvajal',
//     expenses: 0,
//     income: 0
// }

// let addExpense = function (account, amount){
//     account = {}
//     //account.expenses = account.expenses + amount
//     console.log (account)
// }
// addExpense(myAccount, 2.50)
// console.log (myAccount)

//addIncome

//resetAccount to zero

//getAccountSummary
//Account for Angela has $900.  $1000 in income. $100 in expenses.console.log

//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary

let myAccount = {
    name: 'Angela Carvajal',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
   account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account){
    account.expenses = 0
    account.income = 0 
}

let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount (myAccount)
console.log(getAccountSummary(myAccount))