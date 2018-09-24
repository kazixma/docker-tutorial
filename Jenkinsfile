pipeline {
    agent {
      docker { image 'node:7-alpine' }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Install Package') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'ls'
            }
        }
        stage('Test') {
            steps {
                sh 'ls'
            }
        }
    }
}