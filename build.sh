#!/bin/bash

TAG="$1"

API_IMAGE="nest/nest-api:1.0.$TAG"
API_REGISTERY="xuxk2ofg.gra5.container-registry.ovh.net/$API_IMAGE"

echo "Build Docker image";

docker build -t "$API_IMAGE" .

docker tag "$API_IMAGE" "$API_REGISTERY"

docker push "$API_REGISTERY"

Echo "image build  and  push with tag 1.0.$TAG";
