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
                withCredentials([usernamePassword(credentialsId: 'nexus-credentials', usernameVariable: 'NEXUS_USER', passwordVariable: 'NEXUS_PASS')]) {
                    sh "docker login -u ${NEXUS_USER} -p ${NEXUS_PASS} ${NEXUS_REPO}"
                    sh "docker push ${NEXUS_REPO}/${NODEJS_IMAGE_NAME}:${DOCKER_TAG}"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kube-config', variable: 'KUBE_CONFIG')]) {
                    sh "kubectl --kubeconfig=${KUBE_CONFIG} config use-context ${KUBE_CONTEXT}"
                    sh "kubectl set image deployment/nodejs-app nodejs-app=${NEXUS_REPO}/${NODEJS_IMAGE_NAME}:${DOCKER_TAG}"
                    sh "kubectl rollout status deployment/nodejs-app"
                }
            }
        }
    }
}