const helloWorld = require('./Async')
helloWorld()
  .then(result => console.log(result))
  .catch(error => console.log(error))
