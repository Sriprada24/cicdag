pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'Node-20', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        MAVEN_HOME = tool name: 'Maven-3', type: 'hudson.tasks.Maven$MavenInstallation'
        PATH = "${NODEJS_HOME}\\bin;${MAVEN_HOME}\\bin;${env.PATH}"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sriprada24/cicdag.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('agrifront-main') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('agriback-main') {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'agrifront-main/dist/**'
                archiveArtifacts artifacts: 'agriback-main/target/*.jar'
            }
        }
    }
}
