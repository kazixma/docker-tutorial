pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 8080:8080'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}