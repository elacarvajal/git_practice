// // multiple arguments
// let add = function (a, b, c){
//      return a + b + c 
// }

// let result = add(10, 1, 5)
// console.log(result)


// // deatful arguments

let getScoreText = function (name = 'Anonymous', score = 0){
     return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('Anyela')
console.log(scoreText)

//total.tipPercent -- challenge


let getTip = function (total = 40, tipPercent = .25){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip} `
}

let tip = getTip (60)
console.log(tip)
     

    