const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Do the math! Use /add, /subtract, or /double/number')
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

app.get('/double/:number', (request, response) => {
  let doubleNumber = parseInt(request.params.number) * 2
  response.send(doubleNumber.toString())
})

app.listen(3000, () => {
  console.log('Fun Express Math Server started on port 3000!!!')
})
