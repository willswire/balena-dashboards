#!/bin/bash

# By default docker gives us 64MB of shared memory size but we need more for visuals
umount /dev/shm && mount -t tmpfs shm /dev/shm

# Remove any temp data
rm /tmp/.X0-lock &>/dev/null || true

# Check to see if the NOVNC_PASSWORD has been set
if [ -z "$NOVNC_PASSWORD" ]
then
      echo "WARNING! - \$NOVNC_PASSWORD is empty and needs to be set"
      echo "Using: defaultpassword"
      export NOVNC_PASSWORD="defaultpassword" 
else
      echo "\$NOVNC_PASSWORD is set"
fi

# Set the X11VNC Password
mkdir ~/.x11vnc
x11vnc -storepasswd $NOVNC_PASSWORD ~/.x11vnc/passwd

# Start the UI pointing to ElectronJS
startx /usr/src/app/node_modules/electron/dist/electron /usr/src/app &
x11vnc -find -quiet -noxrecord -noxfixes -noxdamage -forever -localhost -rfbauth ~/.x11vnc/passwd
