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
  DASHBOARD_FOUR: process.env.DASHBOARD_FOUR,
  DASHBOARD_TIMEOUT: process.env.DASHBOARD_TIMEOUT
};

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
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

  /*
  // This code is commented out for future additional dashboard slides.
  // Working on the bus map first
  setInterval(function() {
    switch (slide % 4) {
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
  }, electronConfig.DASHBOARD_TIMEOUT);
  */

  mainWindow.loadURL(electronConfig.DASHBOARD_ONE);
  console.log("Dashboard Loaded Successfully");
});
