const Person = function (firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    
}

const me = new Person('Anyela', 'Carvajal', 27)
console.log(me)

const Person2 = new Person ('Fareez', 'Ahmed', 36)
console.log(Person2)