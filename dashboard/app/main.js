console.log("Starting Dashboard...");
const electron = require("electron");
const path = require("path");

const {app, BrowserWindow} = electron;
let mainWindow;

// Dashboard slides, set in the Balena Control Panel
const CAMPUS_EMERGENCY = process.env.CAMPUS_EMERGENCY === '1' ? 1 : 0;
const ZOOM = parseFloat(process.env.ZOOM) || 1.0;
const SAFETY_ALERT = process.env.SAFETY_ALERT;
const SLIDE_COUNT = process.env.SLIDE_COUNT || 1;
// noinspection JSUnusedLocalSymbols
const SLIDE_0 =
    process.env.SLIDE_0 ||
    `file:///${path.join(__dirname, "splash", "index.html")}`;
// noinspection JSUnusedLocalSymbols
const TIME_0 = process.env.TIME_0 || 3600;
// noinspection JSUnusedLocalSymbols
const SLIDE_1 = process.env.SLIDE_1;
// noinspection JSUnusedLocalSymbols
const TIME_1 = process.env.TIME_1;
// noinspection JSUnusedLocalSymbols
const SLIDE_2 = process.env.SLIDE_2;
// noinspection JSUnusedLocalSymbols
const TIME_2 = process.env.TIME_2;
// noinspection JSUnusedLocalSymbols
const SLIDE_3 = process.env.SLIDE_3;
// noinspection JSUnusedLocalSymbols
const TIME_3 = process.env.TIME_3;
// noinspection JSUnusedLocalSymbols
const SLIDE_4 = process.env.SLIDE_4;
// noinspection JSUnusedLocalSymbols
const TIME_4 = process.env.TIME_4;
// noinspection JSUnusedLocalSymbols
const SLIDE_5 = process.env.SLIDE_5;
// noinspection JSUnusedLocalSymbols
const TIME_5 = process.env.TIME_5;
// noinspection JSUnusedLocalSymbols
const SLIDE_6 = process.env.SLIDE_6;
// noinspection JSUnusedLocalSymbols
const TIME_6 = process.env.TIME_6;
// noinspection JSUnusedLocalSymbols
const SLIDE_7 = process.env.SLIDE_7;
// noinspection JSUnusedLocalSymbols
const TIME_7 = process.env.TIME_7;
// noinspection JSUnusedLocalSymbols
const SLIDE_8 = process.env.SLIDE_8;
// noinspection JSUnusedLocalSymbols
const TIME_8 = process.env.TIME_8;
// noinspection JSUnusedLocalSymbols
const SLIDE_9 = process.env.SLIDE_9;
// noinspection JSUnusedLocalSymbols
const TIME_9 = process.env.TIME_9;

// Counter variables
const SLIDES = [];
const TIMES = [];
let currentSlide = 0;
let currentTime = 0;
let currentTimeout = 0;
let screenDimensions;

// Prepare the Slides Array
function loadSlides() {
    for (let i = 0; i < SLIDE_COUNT; i++) {
        SLIDES[i] = eval("SLIDE_" + i);
        TIMES[i] = eval("TIME_" + i);
    }
}

// Slide Function
function slideChanger() {
    if (!CAMPUS_EMERGENCY) {
        mainWindow.loadURL(SLIDES[currentSlide % SLIDES.length]);
        currentTimeout = parseInt(TIMES[currentTime % TIMES.length]) * 1000;
        currentSlide++;
        currentTime++;
        setTimeout(slideChanger, currentTimeout);
    } else
        mainWindow.loadURL(SAFETY_ALERT);
}

// Clears current variables every 12 hrs
function clearCurrentVars() {
    currentSlide = 0;
    currentTime = 0;
    setTimeout(clearCurrentVars, 43200000);
}

function prepareScreen() {
    const mainScreen = electron.screen.getPrimaryDisplay();
    screenDimensions = mainScreen.size;
}

// Main Function
app.on("ready", () => {
    prepareScreen();

    mainWindow = new BrowserWindow({
        show: false,
        width: screenDimensions.width,
        height: screenDimensions.height,
        frame: false,
        kiosk: true,
        webPreferences: {
            sandbox: false,
            overlayScrollbars: false,
            nodeIntegration: false,
            plugins: true,
            zoomFactor: ZOOM
        }
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });

    process.on("uncaughtException", err => {
        console.log(err);
    });

    loadSlides();
    clearCurrentVars();
    slideChanger();
});
