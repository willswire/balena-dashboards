# balena-dashboard

The [balena-dash](https://github.com/balena-io-projects/balena-dash) project is great! If you haven't yet had the chance to visit the repo, you certainly should before checking out this one. The main difference between this project and that one, is that **this project utilizes ElectronJS** to display webpages and other slides. Some things to note about this project:

 - Performance will be limited on Raspberry Pi devices due to constraints that come with Chromium.  Plain and simple: Raspberry Pi GPU + Chromium < WPE performance that the balena-dash project offers.
 - The latest version of ElectronJS (4.0.0+) will require at least Debian Buster to be installed, due to glibc requirements.

You may be asking,*"So why would I choose this project instead of balena-dash?"*

- Infinate URLs/webpages to load
- Custom timeout value
- Support for remote screen control/support/viewing

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to deploy this code to your device:

- Sign up for a free account with balenaCloud [here](https://dashboard.balena-cloud.com/signup?utm_source=efp&utm_campaign=balenadash)
- Create an application
- Add your device and download the OS.  Make sure to specify the wifi information needed to connect your device
- Flash your SD card ([balenaEtcher](https://www.balena.io/etcher) is recommended) and boot the device
- Ensure the device shows up in your application dashboard
- Download the code for this project from GitHub, and push to your application, using the code below

```
git clone https://github.com/willswire/balena-dashboards.git
git remote add balena <get URL by clicking the ? in the top corner of your application dashboard>
git push balena master

```

## Configuration

The following `Enviroment Variables` must be set within Application > Device under *D(x) - Device Variables*:

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| `SLIDE_URLS`     | `https://www.google.com https://www.apple.com` _[space-separated URLs]_ |
| `TIMEOUT`        | `60` _[integer which represents number of seconds]_          |
| `NOVNC_PASSWORD` | `defaultpassword` *[obviously change this to something different]* |

In order to view the device remotely from within your broswer, enable the public device URL within the device summary page.  Then, you can simply click the link and login using the password set above.

## Built With

- [ElectronJS](https://electronjs.org) - The web framework used
- [balenaCloud](https://balena.io/) - IoT device management
- [noVNC](https://github.com/novnc/noVNC) - Used to provide remote viewing/support through public device URL (enable in device settings)
