#!/bin/bash

# Set the bus to communicate with the HostOS, not the container's systemd
DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket \
  dbus-send \
  --system \
  --print-reply \
  --reply-timeout=2000 \
  --type=method_call \
  --dest=uk.org.thekelleys.dnsmasq \
  /uk/org/thekelleys/dnsmasq  \
  uk.org.thekelleys.SetServers \
  uint32:2158966537 uint32:2158966539

echo "DNS Servers Set"
