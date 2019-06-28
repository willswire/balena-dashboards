console.log("Starting Dashboard...");
const electron = require("electron");
const envObjectParser = require('env-object-parser'); //allows for the searching of specific ENVs
const converter = require('number-to-words'); //Used for Conversion of 1s and 2s to "One"s and "Two"s
// noinspection JSUnusedLocalSymbols
const {app, BrowserWindow, powerSaveBlocker} = electron;
// noinspection JSUnusedLocalSymbols
const ZOOM = parseFloat(process.env.ZOOM) || 1.0;
let screenDimensions;

const urls = envObjectParser(process.env, {
    prefix: 'URL'
});

const times = envObjectParser(process.env, {
    prefix: 'TIME'
});

let numberOfSlides = Object.keys(urls).length;

let items = [[], []];

for (let i = 1; i <= numberOfSlides; i++) {
    const value = converter.toWords(i);
    items[0][i - 1] = eval("urls." + value);

    if (!eval("times." + value)) {
        items[1][i - 1] = 30;
    } else {
        items[1][i - 1] = parseInt(eval("times." + value));
    }
}

let browserWindowSettings = " = new BrowserWindow({\n" +
    "        width: screenDimensions.width,\n" +
    "        height: screenDimensions.height,\n" +
    "        kiosk: true,\n" +
    "        webPreferences: {\n" +
    "            zoomFactor: ZOOM\n" +
    "        }\n" +
    "    });";

function prepareScreen() {
    // Set the main screen by getting the dimensions
    const mainScreen = electron.screen.getPrimaryDisplay();
    screenDimensions = mainScreen.size;
    console.log("The screen dimensions are: ", screenDimensions);

    // Block the system from entering sleep mode
    const psbIdentifier = powerSaveBlocker.start("prevent-display-sleep");
    let willStayAwake = powerSaveBlocker.isStarted(psbIdentifier);
    console.log("The display will be kept alive: ", willStayAwake);
}

function createSlides() {
    for (let i = 1; i <= numberOfSlides; i++) {
        eval("let SLIDE_" + i);
    }
    console.log("Slides created");

    for (let i = 1; i <= numberOfSlides; i++) {
        eval("SLIDE_" + i + browserWindowSettings);
        eval("SLIDE_" + i + ".loadURL(items[0][" + (i - 1) + "])");
        eval("SLIDE_" + i + ".show()");
    }
    console.log("Slides configured");
}

let changeSlides;
changeSlides = async () => {
    if (items[0].length === 1) {
        SLIDE_1.show();
        console.log("Showing slide 1 of 1");
    } else {
        let currentSlide = 1;
        for (const item of items[0]) {
            eval("SLIDE_" + currentSlide + ".show()");
            console.log("Showing slide", currentSlide, "of", items[0].length, "for", items[1][currentSlide - 1], "seconds");
            await displayTimeout(items[1][currentSlide - 1]);
            eval("SLIDE_" + currentSlide + ".hide()");
            currentSlide++;
        }
        changeSlides();
    }
};

function displayTimeout(time) {
    let msToS = 1000;
    return new Promise(resolve => {
        setTimeout(resolve, (time * msToS));
    })
}

// Main Function
app.on("ready", () => {
    prepareScreen();
    createSlides();
    changeSlides();
});
