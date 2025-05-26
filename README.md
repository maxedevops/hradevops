# HRA App DevOps Deployment

This repo contains end-to-end DevOps implementation scripts for deploying a Health Risk Assessment (HRA) app in AWS using ECS Fargate, Docker, Terraform, and GitHub Actions.

## Setup Instructions

1. Configure AWS CLI
2. Run `scripts/init.sh`
3. Push your app code to `app/` directory
4. Commit and push to GitHub
5. GitHub Actions will auto-deploy the app

Customize using env vars in `terraform/main.tf`.
