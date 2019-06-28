# balena-dashboards

> This project is a simple solution for managing multiple digital signage displays, dashboards, and other dynamic statistical data on raspberry-pi (or x86-x64 arch) powered displays, via one central admin panel. This project is intended for use in conjunction with balena.io (see below for link and account setup instructions).

You may be asking,*"What makes this dashboard project better than others?"*

- Managed through balena.io
- Multiple URLs/webpages to load
- Custom timeout values for each URL
- Support for remote screen control/support/viewing
- Fast load/runtime due to multi-threaded creation of browser windows

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Things you need to deploy this code to your device:

- Sign up for a free account with balenaCloud [here](https://dashboard.balena-cloud.com/signup?utm_source=efp&utm_campaign=balenadash)
- Create an application
- Add your device and download the OS.  Make sure to specify the wifi information needed to connect your device
- Flash your SD card ([balenaEtcher](https://www.balena.io/etcher) is recommended) and boot the device
- Ensure the device shows up in your application dashboard
- Download the code for this project from GitHub, and push to your application, using the [balena-cli tool](https://www.balena.io/docs/reference/cli/)

```
git clone https://github.com/willswire/dashboards.git
balena push *application-name*
```

## Configuration

The following `Enviroment Variables` must be set within Application > Device under *D(x) - Device Variables*:

| Name             | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| `URL_ONE`        | `https://www.google.com` _[fully qualified URL to load]_            |
| `TIME_ONE`         | `60` _[integer which represents number of seconds to show URL]_  |
| `URL_TWO`        |            |
| `TIME_TWO`       |            |
| `URL_[...]`    | `infinte URLs to load`  |
| `TIME_[...]`    | `corresponding time values for each URL`  |
| `NOVNC_PASSWORD` | `defaultpassword` *[obviously change this to something different]* |

In order to view the device remotely from within your browser, enable the public device URL within the device summary page.  Then, you can simply click the link and login using the password set above.

## Built With

- [ElectronJS](https://electronjs.org) - The web framework used
- [balenaCloud](https://balena.io/) - IoT device management
- [noVNC](https://github.com/novnc/noVNC) - Used to provide remote viewing/support through public device URL (enable in device settings)
