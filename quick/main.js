/* 앱의 주요 프로세스
   
   앱을 실행하고 HTML을 렌더링하는 브라우저 창을 만드는 등의 일을 하는 코어

*/

/* 앱의 전반적인 라이프싸이클을 제어하는 모듈 */
const electron = require('electron');

const app = electron.app;

/* 네이티브한 브라우저 윈도우를 구성 */
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
  
  /* 브라우저 창 생성 */
  mainWindow = new BrowserWindow({width: 800, height: 600})

  /* index.html을 로드 */
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  /* 창이 닫힐 때 받는 콜백 */
  mainWindow.on('closed', function () {
    
    mainWindow = null;

  })
}

/* 코어가 사용될 준비가 되었음을 알리는 콜백 (init) */
app.on('ready', createWindow)

/* 모든 창이 닫히면 종료하라는 이벤트 */
app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') app.quit(); /* 앱 종료 */

})

app.on('activate', function () {

  /* On OS X it's common to re-create a window in the app when the */
  
  if (mainWindow === null) createWindow();

})