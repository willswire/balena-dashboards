console.log('Starting Dashboard...');
const electron = require('electron');
const {
	app,
	BrowserWindow,
	globalShortcut
} = electron;

let mainWindow;
const TIMEOUT = process.env.TIMEOUT.split(',');
const SLIDE_URLS = process.env.SLIDE_URLS.split(' ');
var currentSlide = 0;
var currentTime = 0;
var currentTimeout = 0;
var screenDimensions;

// Slide Function
function slideChanger() {
	mainWindow.loadURL(SLIDE_URLS[currentSlide % SLIDE_URLS.length]);
	currentTimeout = parseInt(TIMEOUT[currentTime % TIMEOUT.length]) * 1000;
	currentSlide++;
	currentTime++;
	setTimeout(slideChanger, currentTimeout);
}

function prepareScreen() {
	var screenElectron = electron.screen;
	var mainScreen = screenElectron.getPrimaryDisplay();
	screenDimensions = mainScreen.size;
}

// Main Function
app.on('ready', () => {

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

	process.on('uncaughtException', (err) => {
		console.log(err);
	});

	slideChanger();

});
