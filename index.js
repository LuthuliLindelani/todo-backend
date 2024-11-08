const express = require("express")
const app = express()
const router = require('./routes/routes.js')
const PORT = process.env.PORT || 8000


app.use(express.json())

app.use('/api/todos', router)

app.get('/', (request, response) => {
    response.json({message: "Hello there"})
})


app.listen(PORT, () => {
    console.log(`the server is up http://localhost:${PORT}`)
})