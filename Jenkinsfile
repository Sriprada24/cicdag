pipeline {
    agent any

    tools {
        maven 'Maven-3'
        nodejs 'Node-25'
    }

    environment {
        GIT_CREDENTIALS = credentials('github-token')
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-token',
                    url: 'https://github.com/Sriprada24/cicdag.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('agrifront-main') {
                    sh '''
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('agriback-main') {
                    sh '''
                        mvn clean package -DskipTests
                    '''
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'agriback-main/target/*.jar'
                archiveArtifacts artifacts: 'agrifront-main/dist/**'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy stage – connect to server or Docker"
            }
        }
    }
}
