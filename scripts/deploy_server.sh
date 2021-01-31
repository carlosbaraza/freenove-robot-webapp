#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd $DIR/../server
echo "Compressing server"
gtar -zcf ../tmp/server.tar.gz *

cd $DIR/../tmp
echo "Copying compressed server"
scp server.tar.gz pi@192.168.1.247:webapp/server/server.tar.gz

echo "Installing server"
ssh pi@192.168.1.247 << EOF
    cd ~/webapp/server
    tar -xf server.tar.gz
    pip install -r requirements.txt

    pm2 stop webapp-server || true
    pm2 delete webapp-server || true
    ENV=rpi pm2 start server.py --name "webapp-server"
    pm2 save
EOF
