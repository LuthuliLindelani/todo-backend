const pool = require('../db/db.js')

let todos = [
    {id: 1, text: "eat", isDone: false},
    {id: 2, text: "sleep", isDone: false},
]

const findAll = (request, response) => {
    response.json(todos)
}

const addNew = (request, response) => {

    const {text} = request.body

    const todo = {
        id: todos.length + 1,
        text,
        isDone: false
    }

    todos.push(todo)

    response.json(todos)
}


const deleteTodo = (request, response) => {
    const {todoId} = request.params

    todos = todos.filter(todo => todo.id !== parseInt(todoId))


    response.json(todos)
}


module.exports = {findAll, addNew, deleteTodo}