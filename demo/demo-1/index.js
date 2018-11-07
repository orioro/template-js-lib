const projectName = require('../../src')

console.log(projectName())

document.querySelector('body').innerHTML = `Demo: ${projectName()}`
