# CI/CD Pipeline with Docker and AWS EC2

This project demonstrates a CI/CD pipeline for deploying a Node.js application using Docker and AWS EC2. The pipeline is powered by GitHub Actions for automating the process of building and deploying the application.

## Prerequisites

- **AWS Account** with EC2 access
- **Docker Hub Account** for storing the image
- **GitHub Repository**
- **AWS EC2 Instance** for deployment
- **GitHub Secrets** for Docker and AWS credentials:
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `EC2_HOST`
  - `EC2_USER`

## Setup Guide

1. **Set up your EC2 instance**:
   - Install Docker on the instance:
     ```bash
     sudo apt update
     sudo apt install docker.io
     sudo systemctl enable docker
     sudo systemctl start docker
     ```

2. **Set up GitHub Secrets**:
   - Go to **Settings > Secrets** in your GitHub repo and add:
     - `DOCKER_USERNAME`
     - `DOCKER_PASSWORD`
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`
     - `EC2_HOST`
     - `EC2_USER`

3. **GitHub Actions Runners**:
   - Ensure the self-hosted runner is set up and running for the deployment pipeline.

## Conclusion

This project automates the CI/CD process, from building the Docker image to deploying it to EC2. It's a simple, efficient way to ensure continuous delivery for your Node.js app with minimal manual intervention.

Feel free to modify the setup according to your needs.
