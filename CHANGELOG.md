# Changelog for balena-dashboards

All entries are made manually. This project adheres to [Semantic Versioning](http://semver.org/).

## 9.0.0 - 2020-3-22
- Upgrade ElectronJS from v6 to v8 [Will Walker]
- Remove 'networking' container, as its use is for University of Delaware devices only [Will Walker]
- Simplify output in electron\start.sh

## 8.0.2 - 2019-10-23
- Rollback to v6 of ElectronJS [Michal Ruda]

## 8.0.1 - 2019-10-23
- Add the hostname entry to the /etc/hosts file [Will Walker]

## 8.0.0 - 2019-10-23
- Update ElectronJS to v7.0.0 [Will Walker]
- Restructure electron docker container [Will Walker]
- Allow a singular URL to not refresh [Will Walker]

## 7.0.0 - 2019-9-19
- Remove old Intel video driver package [Will Walker]
- Add new container "networking" that configures the DNS servers for HostOS dnsmasq service [Will Walker]
- Update ElectronJS to v6.0.10 [Will Walker]

## 6.1.0 - 2019-9-12
- Include Intel video drivers for the new WYSE 3040 [Will Walker]

## 6.0.0 - 2019-6-30
- Update ElectronJS to v6.0.0 [Will Walker]

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
