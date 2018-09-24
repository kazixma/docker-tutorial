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
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}