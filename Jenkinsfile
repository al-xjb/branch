pipeline {
    agent any
    environment {
        NODEJS_IMAGE_NAME = 'nodejs-app'
        NEXUS_REPO = 'nexus.yourcompany.com/repository/docker-repo/'
        DOCKER_TAG = "${env.BRANCH_NAME}-${env.BUILD_ID}"
        KUBE_CONTEXT = 'your-kube-context'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-org/nodejs-repo.git', branch: 'main'
            }
        }

        stage('Build and Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t ${NODEJS_IMAGE_NAME}:${DOCKER_TAG} .'
            }
        }

        stage('Push to Nexus') {
            steps {
                withC
