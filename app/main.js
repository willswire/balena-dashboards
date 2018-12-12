const electron = require('electron');

const {
  app,
  BrowserWindow,
} = electron;

let mainWindow;
var slide = 0;

const electronConfig = {
  DASHBOARD_ONE: process.env.DASHBOARD_ONE,
  DASHBOARD_TWO: process.env.DASHBOARD_TWO,
  DASHBOARD_THREE: process.env.DASHBOARD_THREE,
  DASHBOARD_FOUR: process.env.DASHBOARD_FOUR
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


  setInterval(function() {
    switch (slide % 5) {
      case 0:
        mainWindow.loadURL(electronConfig.DASHBOARD_ONE);
        break;
      case 1:
        mainWindow.loadURL(electronConfig.DASHBOARD_TWO);
        break;
      case 2:
        mainWindow.loadURL(electronConfig.DASHBOARD_THREE);
        break;
      case 3:
        mainWindow.loadURL(electronConfig.DASHBOARD_FOUR);
    };
    slide++;
  }, 30000);

  mainWindow.loadURL(electronConfig.DASHBOARD_ONE);
  console.log("Dashboard Loaded Successfully");
});
