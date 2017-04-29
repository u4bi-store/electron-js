const remote = require('electron').remote
const main = remote.require('./index.js')

var button = document.createElement('button')

button.textContent = '창열기'

button.addEventListener('click', () => {
    main.openWindow('pageTwo')
}, false)

document.body.appendChild(button)