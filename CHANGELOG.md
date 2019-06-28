# Changelog for balena-dashboards

All entries are made manually. This project adheres to [Semantic Versioning](http://semver.org/).

## 5.0.0 - 2019-6-28
- Complete restructure of main.js
    - Utilization of powerSaveBlocker to keep display alive [Kyle O'Donnell]
    - Instead of loading x URLs for one browserWindow, load x number of browserWindows and cycle through them [Will Walker]
    - Dynamic loading of environment variables [CJ Lambert]
    - Renaming of slide variables `SLIDE_1` -> `URL_ONE` [CJ Lambert]
    - Renaming of slide variables `TIME_1` -> `TIME_ONE` [CJ Lambert]
- Removal of launcher HTML files [Will Walker]
- Removal of `CAMPUS_EMERGENCY` Environment Variable [Will Walker]

## 4.0.0 - 2019-6-25
- Clean up Dockerfile.template

## 3.1.0 - 2019-5-23
- Include zoom functionality via `ZOOM` Environment Variable
- Include Safety Alert functionality via `CAMPUS_EMERGENCY` Environment Variable

## 3.0.0 - 2019-5-1
- Updated Electron to v5.0 [Will Walker]
- Included --no-sandbox flag with startx electron command [Will Walker]

## 2.1.2 - 2019-3-6

- Clean up script code [Will Walker]
- Remove deprecated X flags [Will Walker]

## 2.1.1 - 2019-3-5

- Clean up splash code [Will Walker]

## 2.1.0 - 2019-3-3

- Rework ElectronJS code to allow for better env storage [Will Walker]
- Set default env vars and use nice splash screen [Will Walker]

## 2.0.1 - 2019-3-3

- Rename containers [Will Walker]
- Clean up electron scripts [Will Walker]

## 2.0.0 - 2019-2-24

- Introduces support for devices other than amd64 by replacing FROM
  arch line with %%BALENA_MACHINE_NAME%% [Will Walker]

## 1.0.1 - 2019-1-28

- Extended stability for x11vnc using -find flag [Will Walker]
- Create function for infinite looping [CJ Lambert & Will Walker]

## 1.0.0 - 2019-1-10

- Initial commit for all code. Basing off of multi-container image used for
  timestations. Starting with Debian Buster due to expected release date by
  end of semester. [Will Walker]
