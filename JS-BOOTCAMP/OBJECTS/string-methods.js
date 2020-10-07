let name = '  Anyela Carvajal  '

//length property 
console.log(name.length)


/// convert to upper case
console.log(name.toUpperCase())

//convert to Lover case
console.log(name.toLowerCase())

//includes method
let password = 'abc123pcc098'
console.log(password.includes('password'))

//trim 
console.log(name.trim())


//isValidPassword
//length is more than 8 - and doesn't contain the word password

let isValidPassword = function (password){
    return password.length > 8 && !password.includes('password')  
}

console.log(isValidPassword('pcc'))
console.log(isValidPassword('jdhfuiwhfi'))
console.log(isValidPassword('pciwehfic'))