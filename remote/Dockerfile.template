FROM balenalib/%%BALENA_MACHINE_NAME%%-alpine-python

# Update software packages
RUN install_packages \
    iptables \
    procps \
    git

# Pull down noVNC
RUN git clone https://github.com/novnc/noVNC

# Copy over script
COPY ./start.sh ./

# Start app
CMD ["bash", "start.sh"]
