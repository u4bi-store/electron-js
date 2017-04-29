const remote = require('electron').remote
const main = remote.require('./index.js')

var button = document.createElement('button')

button.textContent = '창열기'

button.addEventListener('click', () => {
    var window = remote.getCurrentWindow() /* 현재 창을 window에 담음 */
    
    main.openWindow('pageTwo') /* 새창으로 열릴 페이지 */

    window.close() // 이후 window 변수에 미리 정의받은 창을 닫는다

}, false)

document.body.appendChild(button)