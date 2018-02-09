// JUST TEST FILES TO TRY TO WORK WITH PROMISES
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

// This function calls an "API", getting back results asynchronously, some from file system,
// and progressively passing through methods that incrementally build out the complete introduction
function constructIntroduction () {
  return getNewspaperFromFile().then(newspaper => {
    return new Promise((resolve, reject) => {
      resolve(helloWorld()
        .then(helloMessage => addIntroduction(helloMessage))
        .then(helloAndIntro => addJobInfo(helloAndIntro))
        .then(helloIntroAndJob => addFileNewspaper(helloIntroAndJob, newspaper))
      )
    })
  })
}

// Consider the following three to be like remote API calls. I need to be able to call them async
// and I can't control the order in which they return. I simulate this behavior with Promises
function helloWorld () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succeed = true // lets me toggle back and forth to simulate getting errors from API
      succeed ? resolve('Hello World!') : reject(new Error("Couldn't get greeting..."))
    },
    3000)
  })
}

function addIntroduction (message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succeed = true // see above
      const name = 'Jonathan'
      succeed ? resolve(`${message} My name is ${name}.`) : reject(new Error("Couldn't get name..."))
    },
    1500)
  })
}

function addJobInfo (message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succeed = true // see above
      const job = 'software developer'
      succeed ? resolve(`${message} My job is ${job}.`) : reject(new Error("Couldn't get job..."))
    },
    600)
  })
}

function getNewspaperFromFile () {
  const filePath = './newspaper.data'
  return fs.readFileAsync(filePath, 'utf8')
}

function addFileNewspaper (message, newspaper) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succeed = true // see above
      succeed ? resolve(`${message} I read the ${newspaper}.`) : reject(new Error("Couldn't get newspaper..."))
    },
    600)
  })
}

module.exports = constructIntroduction
