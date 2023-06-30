const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    heigth: 600,
  });
  mainWindow.loadFile('./src/index.html');
}

app.whenReady().then(() => {
  createWindow();
});
