const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.get('/zero', (request, response) => {
  response.send('0')
})

app.listen(3000, () => {
  console.log('Express Server started on port 3000')
})
