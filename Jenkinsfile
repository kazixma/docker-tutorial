pipeline {
    agent {
      docker { image 'node:8' }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Install Package') {
            steps {
                sh 'sudo npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'sudo npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'sudo npm run test'
            }
        }
    }
}