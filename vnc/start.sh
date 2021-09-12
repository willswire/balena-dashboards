#!/bin/bash

iptables -A INPUT -i resin-vpn -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -i resin-vpn -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j REJECT

# Rename the files to allow for default connection html page
rm /noVNC/index.html
ln -s /noVNC/vnc.html /noVNC/index.html

# Start noVNC
/noVNC/utils/novnc_proxy --vnc 127.0.0.1:5900 --listen 80
