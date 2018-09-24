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
                sh 'npm -v'
            }
        }
        stage('Build') {
            steps {
                sh 'npm -v'
            }
        }
        stage('Test') {
            steps {
                sh 'node -v'
            }
        }
    }
}