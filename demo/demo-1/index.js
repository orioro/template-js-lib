const templateBrowserJsLib = require('../../src')

console.log(templateBrowserJsLib())

document.querySelector('body').innerHTML = `Demo: ${templateBrowserJsLib()}`
