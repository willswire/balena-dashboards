// Declare constants required for ElectronJS to run properly
const electron = require('electron');
const {
	app,
	BrowserWindow,
} = electron;

let mainWindow;
const TIMEOUT = process.env.TIMEOUT.split(',');
console.log("After storing the env variable: " + TIMEOUT);
const SLIDE_URLS = process.env.SLIDE_URLS.split(' ');
var currentSlide = 0;
var currentTime = 0;
var currentTimeout = 0;

// Slide changing Function
var slideChanger = function () {
	mainWindow.loadURL(SLIDE_URLS[currentSlide % SLIDE_URLS.length]);
	currentTimeout = parseInt(TIMEOUT[currentTime % TIMEOUT.length]) * 1000;
	currentSlide++;
	currentTime++;
	setTimeout(slideChanger, currentTimeout);
}

// Main Function
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

	setTimeout(slideChanger, currentTimeout);

});
