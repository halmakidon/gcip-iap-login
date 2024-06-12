#!/bin/sh

if [ $? -eq 1 ]; then
  echo "Error: Please provide a valid project name"
  exit 1
fi

TAG="gcr.io/$1/authui:latest"
docker build --platform=linux/amd64 -t "$TAG" .
docker push "$TAG"