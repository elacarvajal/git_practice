//create an array with 5 todos
// You have X todos
//print the 1 and 2 items -> todo :walk the dog



const toDos = [{
      text: 'Make breakfast',
      completed: true
}, {
    text: 'Paint',
    completed: true
}, {
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Cook for bebe',
    completed: true
}, {
    text: 'Workout',
    completed: true
}]

const deleteToDo = function (toDos, toDoText){
    const index = toDos.findIndex (function (toDo){
        return toDo.text.toLowerCase() === toDoText.toLowerCase()
    })
    if (index > -1){
        toDos.splice(index, 1)
    }
    
}
deleteToDo(toDos, 'Paint')
console.log(toDos)

















// toDos.splice(2, 1)
// toDos.push('Buy milk')
// toDos.shift()


// console.log(`You have ${toDos.length} to Dos!`)

// toDos.forEach(function(toDo, index){
//     const num = index + 1
//     console.log(`${num}. ${toDo}`)
// });

// for (let count = 0; count < toDos.length; count ++){
//     const num = count + 1 
//     const toDo = toDos[count]
//     console.log(`${num}. ${toDo}`)
// }

