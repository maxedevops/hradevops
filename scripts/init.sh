#!/bin/bash
echo "Bootstrapping environment..."
aws configure
aws ecr create-repository --repository-name hra-app
