// Declare constants required for ElectronJS to run properly
const electron = require('electron');
const {
  app,
  BrowserWindow,
} = electron;

let mainWindow;
const TIMEOUT = process.env.TIMEOUT;
const SLIDE_URLS = process.env.SLIDE_URLS;
const SLIDE_COUNT = SLIDE_URLS.length;
var currentSlide = 0;

// Main Function
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

  // This code is commented out for future additional dashboard slides.
  // Working on the bus map first
  setInterval(function() {
    mainWindow.loadURL(SLIDE_URLS[currentSlide % SLIDE_COUNT]);
    currentSlide++;
  }, TIMEOUT);

  mainWindow.loadURL(electronConfig.DASHBOARD_ONE);
  console.log("Dashboard Loaded Successfully");
});
