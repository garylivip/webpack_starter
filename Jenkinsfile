pipeline {
    agent { docker { image 'node:22.12.0-alpine3.21' } }
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/garylivip/webpack_starter.git'                
            }
        }
        stage('build') {
            steps {
                sh 'node --version'
            }
        }        
        // stage('Test') {
        //     steps {
        //         sh 'npm install'
        //         sh 'npm test'
        //     }
        // }
        stage('Package') {
            steps {
                sh 'npm run build'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         sh 'npm run deploy'
        //     }
        // }

    }
}
