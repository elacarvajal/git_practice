const notes = [{
    title: 'My next trip',
    body:'I would like to go to Spain'
}, {
    title:'Habbits to work on',
    body:'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body:'Get a new seat'
}]


const sortNotes = function (notes){
    notes.sort(function(a, b){
        

    })
}

// const findNote = function (notes, noteTitle){
//      const index = notes.findIndex (function(note, index){
//             return note.title === noteTitle
//         })
//     return notes[index]
// }

// const filteredNotes = notes.filter(function (note, index){
//        return true
// })
// console.log(filteredNotes)

// const note = findNote(notes, 'Office modification')
// console.log(note)


// console.log(notes.length)
// console.log (notes)

// const index = notes.findIndex(function(note, index){
//     return note.title === 'Habbits to work on'
// })
// console.log(index)









// //counting... 1 

// for (let count = 2; count  >= 0; count--) {
//     console.log (count)
// }
    

// for (let count = notes.length - 1; count >= notes.length; count--){
// console.log (notes[count])
// }



// console.log (notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1,1, 'This is the new second item')

// notes[2] =  'This is now the new note 3'

// notes.forEach(function (item,index) {
//     console.log(index)
//     console.log(item)
// });