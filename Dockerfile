FROM resin/raspberrypi3-node:10-stretch

# Install software packages
RUN apt-get update && apt-get install -qq \
  apt-utils \
  clang \
  xserver-xorg-core \
  xserver-xorg-input-all \
  xserver-xorg-video-fbdev \
  x11vnc \
  xorg \
  xprintidle \
  libxcb-image0 \
  libxcb-util0 \
  xdg-utils \
  libdbus-1-3 \
  libgtk-3-0 \
  libnotify4 \
  libgnome-keyring0 \
  libgconf2-4 \
  libasound2 \
  libcap2 \
  libcups2 \
  libxtst6 \
  libxss1 \
  libnss3 \
  libsmbclient \
  libssh-4 \
  fbset \
  libexpat-dev

# Echo commands into the X11 conf file to stay awake
RUN echo "#!/bin/bash" > /etc/X11/xinit/xserverrc \
    && echo "" >> /etc/X11/xinit/xserverrc \
    && echo 'exec /usr/bin/X -s 0 dpms -nocursor -nolisten' >> /etc/X11/xinit/xserverrc

# Move to app dir
WORKDIR /usr/src/app

# Move app to filesystem
COPY ./app ./

# Install npm modules for the application
RUN npm install --production

# Enable systemd
ENV INITSYSTEM on

# Start app
CMD ["bash", "/usr/src/app/start.sh"]
