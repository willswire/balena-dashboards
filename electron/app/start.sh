#!/bin/bash

# Echo the localhost value
echo "Setting hostname..."
echo "127.0.0.1 $HOSTNAME" >> /etc/hosts

# By default docker gives us 64MB of shared memory size but we need more for visuals
umount /dev/shm && mount -t tmpfs shm /dev/shm
echo "Increased memory allocation"

echo "Removing tmp data..."
# Remove any temp data
rm /tmp/.X0-lock &>/dev/null || true

# Check to see if the noVNC_PASSWORD has been set
if [[ -z "${NOVNC_PASSWORD}" ]]; then
      while :; do
            echo "WARNING! - \$NOVNC_PASSWORD is empty and needs to be set"
            sleep 30
      done

else
      echo "\$NOVNC_PASSWORD is set"
fi

# Set the X11VNC Password
echo "Storing X11 VNC password..."
mkdir ~/.x11vnc
x11vnc -quiet -storepasswd ${NOVNC_PASSWORD} ~/.x11vnc/passwd

echo "Setup complete"

# Start the UI pointing to ElectronJS
startx /usr/src/app/node_modules/electron/dist/electron /usr/src/app --no-sandbox -- -nocursor &
P1=$!
x11vnc -find -quiet -forever -localhost -rfbauth ~/.x11vnc/passwd &
P2=$!
wait ${P1} ${P2}