pipeline {
    agent {
      docker { 
        image 'node:8.12-alpine'
        args '-u root'
      }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Install Package') {
            steps {
                sh 'npm -v'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'node -v'
            }
        }
    }
}