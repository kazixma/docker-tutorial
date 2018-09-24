pipeline {
    agent {
      docker { image 'node:7-alpine' }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm -v'
            }
        }
        stage('Test') {
            steps {
                sh 'ls'
            }
        }
        stage('Deploy') {
            steps {
                sh 'ls'
            }
        }
    }
}