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
                sh 'npm install pm2 -g'
            }
        }
        stage('Build') {
            steps {
                sh 'npm start'
                sh 'pm2 list'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}