#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

mkdir -p $DIR/../tmp
echo "Creating and cleaning up folders in RPi"
ssh pi@192.168.1.247 << EOF
    mkdir -p ~/webapp/client
    rm -rf ~/webapp/client/.next
    mkdir -p ~/webapp/server
EOF

cd $DIR
./deploy_client.sh
./deploy_server.sh