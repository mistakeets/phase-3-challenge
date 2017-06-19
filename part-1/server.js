const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.get('/zero', (request, response) => {
  response.send('0')
})

app.get('/add', (request, response) => {
  let addNumbers = parseInt(request.query.a) + parseInt(request.query.b)
  response.send(addNumbers.toString())
})

app.get('/subtract', (request, response) => {
  let subtractNumbers = parseInt(request.query.a) - parseInt(request.query.b)
  response.send(subtractNumbers.toString())
})

app.listen(3000, () => {
  console.log('Express Server started on port 3000')
})
