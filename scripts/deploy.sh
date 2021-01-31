#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

mkdir -p $DIR/../tmp

cd $DIR
./deploy_client.sh
./deploy_server.sh
./deploy_camera_server.sh