#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd $DIR/../client
npm run build

echo "Compressing built client"
gtar -zcf ../tmp/client.tar.gz .next package.json package-lock.json

cd $DIR/../tmp
echo "Copying compressed client"
scp client.tar.gz pi@192.168.1.247:webapp/client/client.tar.gz

echo "Installing client"
ssh pi@192.168.1.247 << EOF
    cd ~/webapp/client
    tar -xf client.tar.gz
    npm install --production

    pm2 stop webapp-client || true
    pm2 delete webapp-client || true
    pm2 start npm --name "webapp-client" -- start
    pm2 save
EOF