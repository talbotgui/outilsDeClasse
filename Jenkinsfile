# Plus utilisés depuis 09/2021
#!groovy

// Define job properties
properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')), pipelineTriggers([])])

pipeline {
	
	// pas d'agent  par défaut pour l'ensemble du pipeline pour ne pas mobiliser son exécution durant l'attente de validation
	agent none

	stages {
		
		stage ('Checkout') {
			agent { label 'master' }
			steps {
				checkout scm
			}
		}

		stage ('Build') {
			agent { label 'master' }
			steps {
				sh "mvn clean compile --batch-mode"
				stash name:'resultats', includes: 'dist/**'
			}
		}
		
		stage ('Unit test') {
			agent { label 'master' }
			steps {
				sh "mvn frontend:npm@npmRunTest --batch-mode"
			}
		}

		stage ('Integration test') {
			agent { label 'master' }
			steps {
				sh "mvn frontend:npm@npmRunE2e --batch-mode"
			}
		}
		
		stage ('Package') {
			agent { label 'master' }
			steps {
			    unstash 'resultats'
				sh "sed -i 's/\"\\/\"/\"\\/maclasse\\/\"/' ./dist/index.html"
				sh "mvn assembly:single --batch-mode"
				stash name:'archive', includes: 'target/bulletinNG-1.0.0.zip'
			}
		}

		stage ('Quality') {
			agent { label 'master' }
			steps {
				withCredentials([string(credentialsId: 'sonarSecretKey', variable: 'SONAR_KEY')]) {
					sh "sed -i 's/XXXXXXXXX/${SONAR_KEY}/' ./sonar-bulletinNG.properties"
					sh "mvn frontend:npm@npmRunQuality --batch-mode"
					sh "sed -i 's/${SONAR_KEY}/XXXXXXXXX/' ./sonar-bulletinNG.properties"
				}
			}
		}
		
		stage ('Production') { 
			agent none
			// Pour sauter le stage 'production' si la branche n'est pas le master
			when { branch 'master' }
			steps {
				script {

					// Pour traiter le timeout sans déclencher un failure
					long startTime = System.currentTimeMillis()
					try {
					
						// Pour ne pas laisser trainer l'attente d'une saisie durant plus de 1 jour
						timeout(time:1, unit:'DAYS') {
							// Demande de saisie avec milestone pour arrêter les builds précédents en attente au moment où un utilisateur répond à un build plus récent
							milestone(1)
							def userInput = input message: 'Production ?', parameters: [booleanParam(defaultValue: false, description: '', name: 'miseEnProduction')]
							milestone(2)

							// Installation en production et changement du nom indiquant le statut
							if (userInput) {
								node {
									unstash 'archive'
									sh "rm -rf /var/www/html/maclasse/*"
									sh "cp -f ./target/bulletinNG-1.0.0.zip /var/www/html/maclasse/maclasse.zip"
									sh "unzip /var/www/html/maclasse/maclasse.zip -d /var/www/html/maclasse/"
									currentBuild.displayName = currentBuild.displayName + " - deployed to production"
								}
							}
						}
					} catch(err) {
						long timePassed = System.currentTimeMillis() - startTime
                        if (timePassed >= 1 * 1000 * 3600 * 24) {
                            echo 'Timed out du passage en production'
                        } else {
                            throw err
                        }
					}
				}
			}
		}
	}
	
	post {
        success {
			node ('') {  }
			node ('') { step([$class: 'WsCleanup', notFailBuild: true]) }
        }
        unstable {
			node ('') {  }
			node ('') { step([$class: 'WsCleanup', notFailBuild: true]) }
		}
        failure {
			node ('') { emailext subject: "${env.JOB_NAME}#${env.BUILD_NUMBER} - Error during the build !", to: "talbotgui@gmail.com", body: "failure"; }
			node ('') { step([$class: 'WsCleanup', notFailBuild: true]) }
        }
        //always {}
        //changed {}
    }
}
