#!/bin/bash
echo "Building and pushing Docker image..."
docker build -t hra-app ./docker
docker tag hra-app:latest <account_id>.dkr.ecr.us-east-1.amazonaws.com/hra-app
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account_id>.dkr.ecr.us-east-1.amazonaws.com
docker push <account_id>.dkr.ecr.us-east-1.amazonaws.com/hra-app

echo "Deploying with Terraform..."
cd terraform
terraform init
terraform apply -auto-approve -var="ecr_image_url=<account_id>.dkr.ecr.us-east-1.amazonaws.com/hra-app"
