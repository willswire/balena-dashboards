FROM balenalib/raspberrypi3-node:10-buster-run

# Install software packages
RUN install_packages \
    apt-utils \
    clang \
    xserver-xorg-core \
    xserver-xorg-video-fbdev \
    x11vnc \
    xorg \
    libxcb-image0 \
    libxcb-util0 \
    xdg-utils \
    libdbus-1-dev \
    libgtk-3-dev \
    libnotify-dev \
    libgnome-keyring-dev \
    libgconf2-dev \
    libasound2-dev \
    libcap-dev \
    libcups2-dev \
    libxtst-dev \
    libxss1 \
    libnss3-dev \
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

# Start app
CMD ["bash", "start.sh"]
