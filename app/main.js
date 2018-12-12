const electron = require('electron');

const {
  app,
  BrowserWindow,
} = electron;

let mainWindow;

const electronConfig = {
  DASHBOARD_URL: process.env.LAUNCHER_URL
};

app.on('ready', () => {

  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;
  console.log("The screen dimensions are: " + dimensions.width + "x" + dimensions.height);

  mainWindow = new BrowserWindow({
    width: dimensions.width,
    height: dimensions.height,
    frame: false,
    kiosk: true,
    webPreferences: {
      sandbox: false,
      overlayScrollbars: false,
      nodeIntegration: false,
      allowRunningInsecureContent: true,
      plugins: true,
      nativeWindowOpen: true
    }
  });

  process.on('uncaughtException', (err) => {
    console.log(err);
  });

  mainWindow.loadURL(electronConfig.DASHBOARD_URL);
  console.log("Dashboard Loaded Successfully");
});
