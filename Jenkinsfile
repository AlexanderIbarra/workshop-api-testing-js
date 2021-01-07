pipeline {
  agent any

  tools {nodejs "NodeJS"}

  stages {

    stage('Protactor-Workshop') {
      steps {
        git 'https://github.com/AlexanderIbarra/workshop-api-testing-js'
         sh 'npm install'
          sh 'npm test'
      }
    }
  }
}
