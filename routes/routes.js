const express = require("express")
const router = express.Router()
const {findAll, addNew, deleteTodo} = require('../controllers/todosCtrl.js')

router.get('/', findAll)

router.post('/', addNew)

router.delete('/:todoId', deleteTodo)

module.exports = router