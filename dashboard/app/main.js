// Declare constants required for ElectronJS to run properly
const electron = require('electron');
const {
  app,
  BrowserWindow,
} = electron;

let mainWindow;
const TIMEOUT = (process.env.TIMEOUT * 1000);
const SLIDE_URLS = process.env.SLIDE_URLS.split(' ');
var currentSlide = 1;

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

  mainWindow.loadURL(SLIDE_URLS[0]);

  setInterval(function() {
    mainWindow.loadURL(SLIDE_URLS[currentSlide % SLIDE_URLS.length]);
    currentSlide++;
  }, TIMEOUT);

});
