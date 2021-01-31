#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "Creating and cleaning up camera-server folders"
ssh pi@192.168.1.247 << EOF
    mkdir -p ~/webapp/camera-server
EOF

cd $DIR/../camera-server
echo "Compressing camera-server"
gtar -zcf ../tmp/camera-server.tar.gz *

cd $DIR/../tmp
echo "Copying compressed camera-server"
scp camera-server.tar.gz pi@192.168.1.247:webapp/camera-server/camera-server.tar.gz

echo "Installing camera-server"
ssh pi@192.168.1.247 << EOF
    cd ~/webapp/camera-server
    tar -xf camera-server.tar.gz
    npm install

    pm2 stop webapp-camera-server-websocket-relay || true
    pm2 delete webapp-camera-server-websocket-relay || true
    pm2 start websocket-relay.js --name "webapp-camera-server-websocket-relay" -- supersecret 8081 8082

    pm2 stop webapp-camera-server-ffmpeg || true
    pm2 delete webapp-camera-server-ffmpeg || true
    pm2 start camera-encode-to-websocket.sh --name "webapp-camera-server-ffmpeg"
    
    pm2 save
EOF
