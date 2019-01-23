#!/bin/bash

# By default docker gives us 64MB of shared memory size but we need more for visuals
umount /dev/shm && mount -t tmpfs shm /dev/shm

# Remove any temp data
rm /tmp/.X0-lock &>/dev/null || true

# Start the UI pointing to ElectronJS
startx /usr/src/app/node_modules/electron/dist/electron /usr/src/app &
x11vnc -quiet -noxrecord -noxfixes -noxdamage -forever -localhost -passwd $(NO_VNCPASSWORD)
