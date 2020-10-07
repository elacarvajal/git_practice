const todos = [{
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


const incompleteTodos = todos.filter(function (todo){
      return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todo left`
document.querySelector('body').appendChild(summary)


todos.forEach(function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// const ps = document.querySelectorAll('p')

// ps.forEach(function (paragraph){
//     if (paragraph.textContent.includes('ke')){
//         paragraph.remove()
//     }
// })