pipeline {
    agent any
    stages {
        stage('Deployment') {
            steps {
                bat '%userprofile%\\Downloads\\Jenkins\\BatchFiles\\Kill_Process.bat 4200'
                bat 'npm install --force'
                bat 'ng build --configuration=production'
                script {
                    def jobName = env.JOB_NAME
                    def angularJson = readJSON file: 'angular.json'
                    def angularAppName = angularJson.defaultProject
                    // timeout(time: 2, unit: 'MINUTES') {
                        bat "\"%userprofile%\\Downloads\\Jenkins\\BatchFiles\\Deploy_Angular.bat\" ${jobName} ${angularAppName}"
                    // }
                }
            }
        }
    }
}