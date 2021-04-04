const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 1200, 
    height: 680,
    transparent: true,
    titleBarStyle: "hidden",
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
  });
  
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${__dirname}/../build/index.html`
  );
  
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.webContents.on('did-create-window', (childWindow) => {
    // For example...
    childWindow.webContents('will-navigate', (e) => {
      return {
        width: 300, 
        height: 300,
        frames: true,
        transparent: false,
      }
    })
  })
  
  mainWindow.setResizable(true);
  mainWindow.on('closed', () => (mainWindow = null));
  mainWindow.focus();
}

app.on("ready", createWindow);
app.commandLine.appendSwitch('ignore-certificate-errors', 'true');

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});