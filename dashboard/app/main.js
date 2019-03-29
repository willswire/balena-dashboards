console.log("Starting Dashboard...");
const electron = require("electron");
const path = require("path");

const { app, BrowserWindow } = electron;
let mainWindow;

// Dashboard slides, set in the Balena Control Panel
const SLIDE_COUNT = process.env.SLIDE_COUNT || 1;
const SLIDE_0 =
  process.env.SLIDE_0 ||
  `file:///${path.join(__dirname, "splash", "index.html")}`;
const TIME_0 = process.env.TIME_0 || 3600;
const SLIDE_1 = process.env.SLIDE_1;
const TIME_1 = process.env.TIME_1;
const SLIDE_2 = process.env.SLIDE_2;
const TIME_2 = process.env.TIME_2;
const SLIDE_3 = process.env.SLIDE_3;
const TIME_3 = process.env.TIME_3;
const SLIDE_4 = process.env.SLIDE_4;
const TIME_4 = process.env.TIME_4;
const SLIDE_5 = process.env.SLIDE_5;
const TIME_5 = process.env.TIME_5;
const SLIDE_6 = process.env.SLIDE_6;
const TIME_6 = process.env.TIME_6;
const SLIDE_7 = process.env.SLIDE_7;
const TIME_7 = process.env.TIME_7;
const SLIDE_8 = process.env.SLIDE_8;
const TIME_8 = process.env.TIME_8;
const SLIDE_9 = process.env.SLIDE_9;
const TIME_9 = process.env.TIME_9;

// Counter variables
var SLIDES = [];
var TIMES = [];
var currentSlide = 0;
var currentTime = 0;
var currentTimeout = 0;
var screenDimensions;

// Prepare the Slides Array
function loadSlides() {
  for (var i = 0; i < SLIDE_COUNT; i++) {
    SLIDES[i] = eval("SLIDE_" + i);
    TIMES[i] = eval("TIME_" + i);
  }
}

// Slide Function
function slideChanger() {
  mainWindow.loadURL(SLIDES[currentSlide % SLIDES.length]);
  currentTimeout = parseInt(TIMES[currentTime % TIMES.length]) * 1000;
  currentSlide++;
  currentTime++;
  setTimeout(slideChanger, currentTimeout);
}

// Clears current variables every 12 hrs
function clearCurrentVars() {
  currentSlide = 0;
  currentTime = 0;
  setTimeout(clearCurrentVars, 43200000);
}

function prepareScreen() {
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  screenDimensions = mainScreen.size;
}

// Main Function
app.on("ready", () => {
  prepareScreen();

  mainWindow = new BrowserWindow({
    width: screenDimensions.width,
    height: screenDimensions.height,
    frame: false,
    kiosk: true,
    webPreferences: {
      sandbox: false,
      overlayScrollbars: false,
      nodeIntegration: false,
      plugins: true
    }
  });

  process.on("uncaughtException", err => {
    console.log(err);
  });

  loadSlides();
  clearCurrentVars();
  slideChanger();
});
