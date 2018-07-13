const express = require('express')
const app = express()
const port = 3000
const max = 6

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  let value = getRandomInt(max)
  request.chance = value
  next()
})

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(port)
