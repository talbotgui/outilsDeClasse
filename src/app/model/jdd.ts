import { Annee } from "./model";

export class Jdd {

    // Jeu de données riche
    static JDD_RICHE: Annee = {
        versionMajeureApplication: 2024,
        id: 'bouchon-0',
        enteteEdition: 'Académie X<br/>Département X<br/>Circonscription X<br/>École : X<br/>Adresse : X<br/>Téléphone : 0<br/>Courriel : x@x.x',
        enseignant: 'M. Toto',
        cycleNiveau: '2 / CE1',
        anneeScolaire: '2016-2017',
        projets: [
            {
                id: 'bouchon-p1', nom: 'projet1', description: 'Description globale du <b>projet 1</b>',
                idsEleve: ['bouchon-evnr1v6a'],
                sousProjetParPeriode: [
                    { id: 'bouchon-p1p1', idPeriode: 'bouchon-1', idCompetences: ['bouchon-j1_268', 'bouchon-j1_269'], commentaire: 'comme ceci' },
                    { id: 'bouchon-p1p2', idPeriode: 'bouchon-2', idCompetences: ['bouchon-j1_267', 'bouchon-j1_270'], commentaire: 'comme cela' }
                ]
            },
            {
                id: 'bouchon-p2', nom: 'projet2', description: 'Description globale du <i>projet 2</i>',
                idsEleve: [],
                sousProjetParPeriode: [
                    { id: 'bouchon-p2p1', idPeriode: 'bouchon-1', idCompetences: ['bouchon-j1_268', 'bouchon-j1_269'], commentaire: 'encore ci' },
                    { id: 'bouchon-p2p2', idPeriode: 'bouchon-2', idCompetences: ['bouchon-j1_267', 'bouchon-j1_270'], commentaire: 'encore ça' }
                ]
            }
        ],
        periodes: [
            {
                id: 'bouchon-1',
                debut: new Date('2016-09-01T00:00:00.000Z'),
                fin: new Date('2016-10-19T00:00:00.000Z'),
                nom: 'Période 1'
            },
            {
                id: 'bouchon-2',
                debut: new Date('2016-11-03T00:00:00.000Z'),
                fin: new Date('2016-12-17T00:00:00.000Z'),
                nom: 'Période 2'
            },
            {
                id: 'bouchon-3',
                debut: new Date('2017-01-03T00:00:00.000Z'),
                fin: new Date('2017-02-11T00:00:00.000Z'),
                nom: 'Période 3'
            },
            {
                id: 'bouchon-5',
                debut: new Date('2017-04-24T00:00:00.000Z'),
                fin: new Date('2017-07-08T00:00:00.000Z'),
                nom: 'Période 5'
            },
            {
                id: 'bouchon-4',
                debut: new Date('2017-02-27T00:00:00.000Z'),
                fin: new Date('2017-04-08T00:00:00.000Z'),
                nom: 'Période 4'
            }
        ],
        mapLibelleNotes: {
            0: 'non atteint',
            1: 'atteint partiellement',
            2: 'atteint',
            3: 'dépassé',
            n: 'non évalué',
            a: 'absent'
        },
        mapLibelleStatutEleve: {
            0: 'hors établissement',
            1: 'dans l\'établissement',
            2: 'dans la classe'
        },
        mapTypeContact: {
            P: "Père",
            M: "Mère",
            S: "Structure",
            F: "Famille d'accueil",
            A: "Autre"
        },
        mapRaisonAbsence: {
            I: "Inclusion",
            O: "Orthophoniste",
            PM: "Psychomotricité",
            P: "Psychologue",
            A: "Autre"
        },
        eleves: [
            {
                id: 'bouchon-hfys3v9z',
                nom: 'NOM0',
                prenom: 'TOTO_HORS_ECOLE',
                dateNaissance: new Date('2009-01-01'),
                contacts: [
                    { id: 'bouchon-1', type: 'P', nom: 'M. NOM DU PAPA parfois un peu long dans les formulaire', email: 'email.du.papa.nom@avec.un.dns.a.ralonge.com', adressePostale: 'Petite maison dans la prairie au milieu de nulle part', telephone: '0612345678' },
                    { id: 'bouchon-2', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                absences: [
                    { id: 'bouchon-3', raison: 'I', jour: 1, heureDebut: '8h15', heureFin: '9h15' },
                    { id: 'bouchon-4', raison: 'O', jour: 2, heureDebut: '8h15', heureFin: '10h15', frequence: 0 },
                    { id: 'bouchon-5', raison: 'P', jour: 3, heureDebut: '8h15', heureFin: '11h15', frequence: 1 },
                    { id: 'bouchon-6', raison: 'A', jour: 4, heureDebut: '8h15', heureFin: '12h00', frequence: 2 },
                ],
                statut: '0',
                bilans: 'bla bla bla',
                inclusion: {
                    id: 'bouchon-7', ecoleNom: 'Nom de l\'écoole du coin', ecoleAdresse: 'Le coin de la rue qui peut parfois être long 999999 Maville',
                    nomContact: 'Monsieur le directeur de l\'école', emailContact: 'emailDuDirecteurDeLecole@nomDeDomaineAralonge.fr', telContact: '0123456789',
                    niveau: 'CE1', enseignant: 'le meilleur enseignant du monde évidemment dont le prénom m\'a échappé'
                },
                cursus: [
                    {
                        id: "2012", annee: 2012,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2013", annee: 2013,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2014", annee: 2014,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2015", annee: 2015,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2016", annee: 2016,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: 'acc',
                datesPPA: 'ppa',
                datesESS: 'ess',
                notes: []
            },
            {
                id: 'bouchon-evnr1v6a',
                nom: 'NOM1',
                prenom: 'PRENOM1',
                dateNaissance: new Date('2009-01-01T00:00:00.000Z'),
                contacts: [
                    { id: 'bouchon-8', type: 'P', nom: 'M. NOM0 PAPA', email: 'papa.nom0@test.com', adressePostale: 'ici ou là-bas' },
                    { id: 'bouchon-9', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                statut: '1',
                bilans: 'bla bla bla',
                cursus: [
                    {
                        id: "2012", annee: 2012,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2013", annee: 2013,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2014", annee: 2014,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2015", annee: 2015,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2016", annee: 2016,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: '',
                datesPPA: '',
                datesESS: '',
                absences: [],
                inclusion: { id: 'bouchon-10' },
                notes: [
                    {
                        dateCreation: new Date('2016-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1nLieep1',
                        idItem: 'bouchon-j1_268',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2016-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1nLieep2',
                        idItem: 'bouchon-j1_269',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2016-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1nLieep3',
                        idItem: 'bouchon-j1_267',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2016-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1nLieep4',
                        idItem: 'bouchon-j1_270',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        commentaireEvaluationPublic: 'comm bulletin note P1',
                        dateCreation: new Date('2016-09-15T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n1',
                        idItem: 'bouchon-j1_263',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta Prépa P1 e1n1'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n2',
                        idItem: 'bouchon-W111',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n2'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n3',
                        idItem: 'bouchon-W113',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n3'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n4',
                        idItem: 'bouchon-W132',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n4'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n5',
                        idItem: 'bouchon-W143',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta Prépa P1 e1n5'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n6',
                        idItem: 'bouchon-W611',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n6'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n7',
                        idItem: 'bouchon-W612',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n7'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n8',
                        idItem: 'bouchon-W651',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n8'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n9',
                        idItem: 'bouchon-W421',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n9'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n10',
                        idItem: 'bouchon-W422',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n10'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n11',
                        idItem: 'bouchon-W211',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n11'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2016-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n12',
                        idItem: 'bouchon-W522',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n12'
                    },
                    {
                        commentaireEvaluationPublic: 'eval P2',
                        dateCreation: new Date('2016-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1n13',
                        idItem: 'bouchon-W522',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta P2 e1n13',
                    },
                    {
                        dateCreation: new Date('2016-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1n14',
                        idItem: 'bouchon-W211',
                        constatEnPreparation: 'consta P2 encore e1n14'
                    }
                ]
            },
            {
                id: 'bouchon-rvns1q6a',
                nom: 'NOM2',
                prenom: 'PRENOM2',
                dateNaissance: new Date('2009-01-01T00:00:00.000Z'),
                contacts: [
                    { id: 'bouchon-11', type: 'P', nom: 'M. NOM0 PAPA', email: 'papa.nom0@test.com', adressePostale: 'ici ou là-bas' },
                    { id: 'bouchon-12', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                statut: '2',
                bilans: 'bla bla bla',
                cursus: [
                    {
                        id: "2012", annee: 2012,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2013", annee: 2013,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2014", annee: 2014,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2015", annee: 2015,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2016", annee: 2016,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: '',
                datesPPA: '',
                datesESS: '',
                absences: [],
                inclusion: { id: 'bouchon-13' },
                notes: [
                    {
                        commentaireEvaluationPublic: 'commentaire P1',
                        dateCreation: new Date('2016-09-16T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e2n1',
                        idItem: 'bouchon-j1_263',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e2n1'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaire seconde competence sur le domaine',
                        dateCreation: new Date('2016-09-17T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e2n2',
                        idItem: 'bouchon-j1_266',
                        valeurEvaluation: '2',
                        constatEnPreparation: 'consta Prépa P1 e2n2'
                    }
                ]
            },
            {
                id: 'bouchon-lkjsf2d3',
                nom: 'NOM3',
                prenom: 'PRENOM3',
                dateNaissance: new Date('2009-01-01T00:00:00.000Z'),
                contacts: [
                    { id: 'bouchon-14', type: 'P', nom: 'M. NOM0 PAPA', email: 'papa.nom0@test.com', adressePostale: 'ici ou là-bas' },
                    { id: 'bouchon-15', type: 'M', nom: 'M. NOM0 MAMAN', email: 'maman.nom0@test.com', adressePostale: 'ailleurs' }
                ],
                statut: '2',
                bilans: 'bla bla bla',
                cursus: [
                    {
                        id: "2012", annee: 2012,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2013", annee: 2013,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2014", annee: 2014,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2015", annee: 2015,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: "2016", annee: 2016,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: '',
                datesPPA: '',
                datesESS: '',
                absences: [],
                inclusion: { id: 'bouchon-16', },
                notes: []
            }
        ],
        competences: [
            {
                id: 'bouchon-compAsso',
                text: 'Compétences associées',
                parent: '#'
            },
            {
                id: 'bouchon-niveau1',
                text: 'CYCLE 2 (CP-CE2)',
                parent: 'bouchon-compAsso'
            },
            {
                id: 'bouchon-j1_1',
                text: 'Français',
                parent: 'bouchon-niveau1'
            },
            {
                id: 'bouchon-j1_2',
                text: 'Comprendre et s\'exprimer à l\'oral',
                parent: 'bouchon-j1_1'
            },
            {
                id: 'bouchon-j1_3',
                text: 'Ecouter pour comprendre des messages oraux (adressés par un adulte ou un pairs) ou des textes lus par un adulte',
                parent: 'bouchon-j1_2'
            },
            {
                id: 'bouchon-j1_263',
                text: 'maintien d\'une attention orientée en fonction d\'un but',
                parent: 'bouchon-j1_3'
            },
            {
                id: 'bouchon-j1_264',
                text: 'repérage et mémorisation des informations importantes, enchainement mental de ces informations',
                parent: 'bouchon-j1_3'
            },
            {
                id: 'bouchon-j1_265',
                text: 'mobilisation des références culturelles nécessaires pour comprendre le message ou le texte',
                parent: 'bouchon-j1_3'
            },
            {
                id: 'bouchon-j1_266',
                text: 'attention portée au vocabulaire et à la mémorisation',
                parent: 'bouchon-j1_3'
            },
            {
                id: 'bouchon-j1_267',
                text: 'repérage d\'éventuelles difficultés de compréhension',
                parent: 'bouchon-j1_3'
            },
            {
                id: 'bouchon-j1_4',
                text: 'Dire pour être entendu et compris en situation d\'adresse à un auditoire ou de présentation de texte',
                parent: 'bouchon-j1_2'
            },
            {
                id: 'bouchon-j1_268',
                text: 'prise en compte des récepteurs ou des interlocuteurs',
                parent: 'bouchon-j1_4'
            },
            {
                id: 'bouchon-j1_269',
                text: 'mobilisation de techniques qui font qu\'on est écouté (articulation, débit, volume, intonation...)',
                parent: 'bouchon-j1_4'
            },
            {
                id: 'bouchon-j1_270',
                text: 'organisation du discours',
                parent: 'bouchon-j1_4'
            },
            {
                id: 'bouchon-j1_271',
                text: 'mémorisation des textes en situation de récitation et d\'interprétation',
                parent: 'bouchon-j1_4'
            },
            {
                id: 'bouchon-j1_272',
                text: 'lecture en situation de mise en voix d\'un texte',
                parent: 'bouchon-j1_4'
            },
            {
                id: 'bouchon-j1_15',
                text: 'Participer à des échanges dans des situations diversifiées',
                parent: 'bouchon-j1_2'
            },
            {
                id: 'bouchon-j1_273',
                text: 'respect des règles régulant les échanges',
                parent: 'bouchon-j1_15'
            },
            {
                id: 'bouchon-j1_274',
                text: 'conscience et prise en compte des enjeux',
                parent: 'bouchon-j1_15'
            },
            {
                id: 'bouchon-j1_275',
                text: 'organisation du propos',
                parent: 'bouchon-j1_15'
            },
            {
                id: 'bouchon-j1_276',
                text: 'moyen de l\'expression (vocabulaire, syntaxe...)',
                parent: 'bouchon-j1_15'
            },
            {
                id: 'bouchon-j1_277',
                text: 'Adopter une distance critique par rapport au langage produit',
                parent: 'bouchon-j1_2'
            },
            {
                id: 'bouchon-j1_278',
                text: 'règles régulant les échanges, repérage du respect ou non de ces règles dans les propos d\'un pair, aide à la reformulation',
                parent: 'bouchon-j1_277'
            },
            {
                id: 'bouchon-j1_279',
                text: 'prise en compte de règles explicites établies collectivement',
                parent: 'bouchon-j1_277'
            },
            {
                id: 'bouchon-j1_280',
                text: 'autocorrection après écoute (reformulations)',
                parent: 'bouchon-j1_277'
            },
            {
                id: 'bouchon-j1_8',
                text: 'Lire',
                parent: 'bouchon-j1_1'
            },
            {
                id: 'bouchon-j1_9',
                text: 'Identifier des mots de manière de plus en plus aisée',
                parent: 'bouchon-j1_8'
            },
            {
                id: 'bouchon-j1_281',
                text: 'discrimination auditive fine et analyse des constituants des mots (conscience phonologique)',
                parent: 'bouchon-j1_9'
            },
            {
                id: 'bouchon-j1_282',
                text: 'discrimination visuelle et connaissance des lettres',
                parent: 'bouchon-j1_9'
            },
            {
                id: 'bouchon-j1_283',
                text: 'correspondances graphophonologiques, combinatoire (construction des syllabes simples et complexes)',
                parent: 'bouchon-j1_9'
            },
            {
                id: 'bouchon-j1_284',
                text: 'mémorisation des composantes du code',
                parent: 'bouchon-j1_9'
            },
            {
                id: 'bouchon-j1_285',
                text: 'mémorisation de mots fréquents et irréguliers',
                parent: 'bouchon-j1_9'
            },
            {
                id: 'bouchon-j1_16',
                text: 'Comprendre un texte',
                parent: 'bouchon-j1_8'
            },
            {
                id: 'bouchon-j1_286',
                text: 'mobilisation de la compétence de décodage',
                parent: 'bouchon-j1_16'
            },
            {
                id: 'bouchon-j1_287',
                text: 'mise en oeuvre (guidée puis autonome) d\'une démarche pour décourir et comprendre un texte',
                parent: 'bouchon-j1_16'
            },
            {
                id: 'bouchon-j1_288',
                text: 'mobilisation des expériences antérieures de lecture et des connaissances qui en sont issues (sur des univers, des personnages types...)',
                parent: 'bouchon-j1_16'
            },
            {
                id: 'bouchon-j1_289',
                text: 'mobilisation de connaissances lexicales et de connaissances portant sur l\'univers évoqué par les textes ',
                parent: 'bouchon-j1_16'
            },
            {
                id: 'bouchon-j1_17',
                text: 'Pratiquer différentes formes de lecture',
                parent: 'bouchon-j1_8'
            },
            {
                id: 'bouchon-j1_290',
                text: 'mobilisation de la démarche permettant de comprendre',
                parent: 'bouchon-j1_17'
            },
            {
                id: 'bouchon-j1_291',
                text: 'prise en compte des enjeux de la lecture notamment : lire pour réaliser quelque chose, pour s\'informer, pour comprendre une histoire...',
                parent: 'bouchon-j1_17'
            },
            {
                id: 'bouchon-j1_292',
                text: 'mobilisation des connaissances lexicales en lien avec le texte lu',
                parent: 'bouchon-j1_17'
            },
            {
                id: 'bouchon-j1_293',
                text: 'repérage des lieux de lecture',
                parent: 'bouchon-j1_17'
            },
            {
                id: 'bouchon-j1_294',
                text: 'prise de repères dans les manuels, dans les ouvrages documentaires',
                parent: 'bouchon-j1_17'
            },
            {
                id: 'bouchon-j1_18',
                text: 'Lire à voix haute',
                parent: 'bouchon-j1_8'
            },
            {
                id: 'bouchon-j1_295',
                text: 'mobilisation de la compétence de décodage et de la compréhension du texte',
                parent: 'bouchon-j1_18'
            },
            {
                id: 'bouchon-j1_296',
                text: 'identification et prise en compte des marques de ponctuation',
                parent: 'bouchon-j1_18'
            },
            {
                id: 'bouchon-j1_297',
                text: 'recherche d\'effets à produire sur l\'auditoire en lien avec la compréhension (expressivité)',
                parent: 'bouchon-j1_18'
            },
            {
                id: 'bouchon-j1_19',
                text: 'Contrôler sa compréhension',
                parent: 'bouchon-j1_8'
            },
            {
                id: 'bouchon-j1_298',
                text: 'justifications possibles de son interprétation ou de ses réponses avec appui sur le texte et sur les autres connaissances mobilisées',
                parent: 'bouchon-j1_19'
            },
            {
                id: 'bouchon-j1_299',
                text: 'repérage de ses difficultés, tentatives pour les expliquer',
                parent: 'bouchon-j1_19'
            },
            {
                id: 'bouchon-j1_300',
                text: 'maintien d\'une attitude active et réflexive: vigilance relative à l\'objectif, demande d\'aide, mise en oeuvre de stratégies pour résoudre ses difficultés',
                parent: 'bouchon-j1_19'
            },
            {
                id: 'bouchon-j1_10',
                text: 'Ecrire',
                parent: 'bouchon-j1_1'
            },
            {
                id: 'bouchon-j1_21',
                text: 'Copier de manière experte',
                parent: 'bouchon-j1_10'
            },
            {
                id: 'bouchon-j1_301',
                text: 'maîtrise des gestes de l\'écriture cursive éxécutés avec une vitesse et une sureté croissante',
                parent: 'bouchon-j1_21'
            },
            {
                id: 'bouchon-j1_302',
                text: 'correspondances entre diverses écritures des lettres pour transcrire un texte',
                parent: 'bouchon-j1_21'
            },
            {
                id: 'bouchon-j1_303',
                text: 'stratégie de copie pour dépasser la copie lettre à lettre: prise d\'indices, mémorisation de mots puis de groupe de mots',
                parent: 'bouchon-j1_21'
            },
            {
                id: 'bouchon-j1_304',
                text: 'lecture : relire pour vérifier la conformité',
                parent: 'bouchon-j1_21'
            },
            {
                id: 'bouchon-j1_305',
                text: 'maniement du traitement de texte pour la mise en page de courts textes',
                parent: 'bouchon-j1_21'
            },
            {
                id: 'bouchon-j1_22',
                text: 'Produire des écrits en commençant à s\'approprier une démarche',
                parent: 'bouchon-j1_10'
            },
            {
                id: 'bouchon-j1_306',
                text: 'identification de caractéristiques propres à différents genres de texte',
                parent: 'bouchon-j1_22'
            },
            {
                id: 'bouchon-j1_307',
                text: 'mise en oeuvre (guidée puis autonome) d\'une démarche de production de texte:  trouver et organiser ses idées, élaborer et écrire des phrases ',
                parent: 'bouchon-j1_22'
            },
            {
                id: 'bouchon-j1_308',
                text: 'connaissances sur la langue (mémoire orthographique, règles d\'accord, ponctuation...)',
                parent: 'bouchon-j1_22'
            },
            {
                id: 'bouchon-j1_309',
                text: 'mobilisation des outils à disposition dans la classe liés à l\'étude de la langue',
                parent: 'bouchon-j1_22'
            },
            {
                id: 'bouchon-j1_23',
                text: 'Réviser et améliorer l\'écrit qu\'on a produit',
                parent: 'bouchon-j1_10'
            },
            {
                id: 'bouchon-j1_310',
                text: 'repérage de dysfonctionnements dans les textes produits (omissions, incohérences, redites...)',
                parent: 'bouchon-j1_23'
            },
            {
                id: 'bouchon-j1_311',
                text: 'mobilisation des connaissances portant sur le genre d\'écrit à produire et sur la langue',
                parent: 'bouchon-j1_23'
            },
            {
                id: 'bouchon-j1_312',
                text: 'vigilance orthographique, exercée d\'abord sur les points désignés par le professeur puis progressivement étendue',
                parent: 'bouchon-j1_23'
            },
            {
                id: 'bouchon-j1_313',
                text: 'utilisation d\'outils aidant à la correction: outils élaborés en classe, correcteur orthographique, guide de relecture...',
                parent: 'bouchon-j1_23'
            },
            {
                id: 'bouchon-j1_11',
                text: 'Comprendre le fonctionnement de la langue',
                parent: 'bouchon-j1_1'
            },
            {
                id: 'bouchon-j1_12',
                text: 'Maitriser les relations entre oral et écrit',
                parent: 'bouchon-j1_11'
            },
            {
                id: 'bouchon-j1_28',
                text: 'correspondances graphophonologiques',
                parent: 'bouchon-j1_12'
            },
            {
                id: 'bouchon-j1_29',
                text: 'valeur sonore de certaines lettres selon le contexte',
                parent: 'bouchon-j1_12'
            },
            {
                id: 'bouchon-j1_30',
                text: 'composition de certains graphèmes selon la lettre qui suit',
                parent: 'bouchon-j1_12'
            },
            {
                id: 'bouchon-j1_24',
                text: 'Mémoriser et se remémorer l\'orthographe de mots fréquents et de mots irréguliers dont le sens est connu',
                parent: 'bouchon-j1_11'
            },
            {
                id: 'bouchon-j1_31',
                text: 'vocabulaire des activités scolaires, vocabulaire spécialisé lié aux apprentissages disciplinaires',
                parent: 'bouchon-j1_24'
            },
            {
                id: 'bouchon-j1_32',
                text: 'séries de mots relevant d\'un même champ lexical, correspondant à une famille de mots, ayant une analogie morphologique... ',
                parent: 'bouchon-j1_24'
            },
            {
                id: 'bouchon-j1_33',
                text: 'mots invariables',
                parent: 'bouchon-j1_24'
            },
            {
                id: 'bouchon-j1_25',
                text: 'Identifier les principaux constituants d\'une phrase simple en relation avec sa cohérence sémantique',
                parent: 'bouchon-j1_11'
            },
            {
                id: 'bouchon-j1_34',
                text: 'identification d\'un groupe nominal',
                parent: 'bouchon-j1_25'
            },
            {
                id: 'bouchon-j1_35',
                text: 'identification du verbe (connaissance des propriétés permettant de l\'identifer)',
                parent: 'bouchon-j1_25'
            },
            {
                id: 'bouchon-j1_36',
                text: 'classes de mots : noms, verbes, déterminants, adjectifs, pronoms, mots invariables',
                parent: 'bouchon-j1_25'
            },
            {
                id: 'bouchon-j1_237',
                text: 'phrases affirmatives et négatives (notamment les transformations liées à l\'identification du verbe)',
                parent: 'bouchon-j1_25'
            },
            {
                id: 'bouchon-j1_238',
                text: 'ponctuation de fin de phrases et signes du discours rapporté',
                parent: 'bouchon-j1_25'
            },
            {
                id: 'bouchon-j1_26',
                text: 'Raisonner pour résoudre des problèmes orthographiques, d\'accord essentiellement',
                parent: 'bouchon-j1_11'
            },
            {
                id: 'bouchon-j1_239',
                text: 'compréhension : des éléments de la phrase fonctionnent ensemble, la notion de chaîne d\'accord pour déterminant-nom-adjectif (nombre et genre)',
                parent: 'bouchon-j1_26'
            },
            {
                id: 'bouchon-j1_240',
                text: 'compréhension : écrire ne consiste pas seulement à coder les sons',
                parent: 'bouchon-j1_26'
            },
            {
                id: 'bouchon-j1_241',
                text: 'la relation sujet-verbe (identification dans des situations simples)',
                parent: 'bouchon-j1_26'
            },
            {
                id: 'bouchon-j1_248',
                text: 'notion de nombre et de genre',
                parent: 'bouchon-j1_26'
            },
            {
                id: 'bouchon-j1_249',
                text: 'marques d\'accord pour les noms et les adjectifs (nombre et genre)',
                parent: 'bouchon-j1_26'
            },
            {
                id: 'bouchon-j1_250',
                text: 'découverte, en lien avec les activités d\'oral et de lexique, d\'autres formes de pluriel et de genre (féminin pour certain noms et adjectifs)',
                parent: 'bouchon-j1_26'
            },
            {
                id: 'bouchon-j1_251',
                text: 'marque de pluriel pour les verbes de la 3ème personne (ent)',
                parent: 'bouchon-j1_26'
            },
            {
                id: 'bouchon-j1_27',
                text: 'Comprendre comment se forment les verbes et orthographier les formes verbales les plus fréquentes',
                parent: 'bouchon-j1_11'
            },
            {
                id: 'bouchon-j1_252',
                text: 'familiarisation avec l\'indicatif présent, imparfait, futur, des verbes être, avoir, aller, faire, dire, venir, pouvoir, voir, vouloir, prendre',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_253',
                text: 'familiarisation avec l\'indicatif présent, imparfait, futur, des verbes dont l\'infinitif se termine en -ER',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_255',
                text: 'mémorisation des formes les plus fréquentes (3ème personne du singulier et du pluriel)',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_257',
                text: 'compréhension de la construction de la forme conjuguée du verbe (radical-terminaison) ',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_258',
                text: 'mémorisation des marques régulières liées à des personnes (-ons, -ez, -nt)',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_314',
                text: 'familiarisation avec l\'infinitif, le participe passé',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_315',
                text: 'notions de temps simples et de temps composés, formation du passé composé',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_316',
                text: 'notions de marques liées au temps (imparfait et futur en particulier)',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_317',
                text: 'mémorisation des verbes être et avoir au présent, à l\'imparfait et au futur',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_318',
                text: 'homophones: les formes verbales a/à, est/et, ont/on, sont/son',
                parent: 'bouchon-j1_27'
            },
            {
                id: 'bouchon-j1_13',
                text: 'Identifier les relations entre les mots, entre les mots et leur contexte d\'utilisation et s\'en servir pour mieux comprendre ',
                parent: 'bouchon-j1_11'
            },
            {
                id: 'bouchon-j1_319',
                text: 'familles de mots, dérivation (préfixes et suffixes)',
                parent: 'bouchon-j1_13'
            },
            {
                id: 'bouchon-j1_320',
                text: 'catégorisation et relations entre termes génériques et termes spécifiques',
                parent: 'bouchon-j1_13'
            },
            {
                id: 'bouchon-j1_321',
                text: 'synonymie, antonymie pour les adjectifs et les verbes',
                parent: 'bouchon-j1_13'
            },
            {
                id: 'bouchon-j1_322',
                text: 'polysémie et relation avec les contextes d\'emploi',
                parent: 'bouchon-j1_13'
            },
            {
                id: 'bouchon-j1_323',
                text: 'sens propre et sens figuré',
                parent: 'bouchon-j1_13'
            },
            {
                id: 'bouchon-j1_324',
                text: 'registres (familier, courant, soutenu)',
                parent: 'bouchon-j1_13'
            },
            {
                id: 'bouchon-j1_14',
                text: 'Etendre ses connaissances lexicales, mémoriser et réutiliser des mots nouvellement appris',
                parent: 'bouchon-j1_11'
            },
            {
                id: 'bouchon-j1_325',
                text: 'définition d\'un mot, compréhension d\'un article du dictionnaire',
                parent: 'bouchon-j1_14'
            },
            {
                id: 'bouchon-j1_326',
                text: 'mobilisation des mots nouveaux en situation d\'écriture avec appui éventuel sur des outils',
                parent: 'bouchon-j1_14'
            },
            {
                id: 'bouchon-j1_5',
                text: 'Langues vivantes',
                parent: 'bouchon-niveau1'
            },
            {
                id: 'bouchon-j1_331',
                text: 'Approches culturelles',
                parent: 'bouchon-j1_5'
            },
            {
                id: 'bouchon-j1_340',
                text: 'découvrir quelques aspects culturels d\'une langue vivante étrangère et régionale',
                parent: 'bouchon-j1_331'
            },
            {
                id: 'bouchon-j1_341',
                text: 'identifier quelques grands repères culturels de l\'environnement quotidien des élèves du même âge dans les pays ou les régions étudiés ',
                parent: 'bouchon-j1_340'
            },
            {
                id: 'bouchon-j1_359',
                text: 'familiarisation avec la thématique de l\'enfant',
                parent: 'bouchon-j1_340'
            },
            {
                id: 'bouchon-j1_360',
                text: 'familiarisation avec la thématique de la classe',
                parent: 'bouchon-j1_340'
            },
            {
                id: 'bouchon-j1_361',
                text: 'familiarisation avec a thématique de l\'univers enfantin',
                parent: 'bouchon-j1_340'
            },
            {
                id: 'bouchon-j1_332',
                text: 'Activités langagières',
                parent: 'bouchon-j1_5'
            },
            {
                id: 'bouchon-j1_333',
                text: 'Comprendre l\'oral',
                parent: 'bouchon-j1_332'
            },
            {
                id: 'bouchon-j1_337',
                text: 'comprendre les consignes de la classe',
                parent: 'bouchon-j1_333'
            },
            {
                id: 'bouchon-j1_362',
                text: 'utiliser quelques mots familiers et expressions très courantes',
                parent: 'bouchon-j1_333'
            },
            {
                id: 'bouchon-j1_363',
                text: 'suivre le fil d\'une histoire très courte',
                parent: 'bouchon-j1_333'
            },
            {
                id: 'bouchon-j1_364',
                text: 'suivre des instructions très courtes et très simples',
                parent: 'bouchon-j1_333'
            },
            {
                id: 'bouchon-j1_365',
                text: 'répertoire élèmentaire de mots et d\'expressions simples relatifs à des situations concrètes particulières',
                parent: 'bouchon-j1_333'
            },
            {
                id: 'bouchon-j1_334',
                text: 'S\'exprimer oralement en continu',
                parent: 'bouchon-j1_332'
            },
            {
                id: 'bouchon-j1_338',
                text: 'reproduire un modèle oral',
                parent: 'bouchon-j1_334'
            },
            {
                id: 'bouchon-j1_366',
                text: 'utiliser des expressions courtes ou phrases proches des modèles rencontrés lors des apprentissages pour se décrire',
                parent: 'bouchon-j1_334'
            },
            {
                id: 'bouchon-j1_367',
                text: 'lire à haute voix de manière expressive un texte bref',
                parent: 'bouchon-j1_334'
            },
            {
                id: 'bouchon-j1_368',
                text: 'raconter une histoire courte à partir d\'images ou de modèles déjà rencontrés',
                parent: 'bouchon-j1_334'
            },
            {
                id: 'bouchon-j1_369',
                text: 'répertoire élèmentaire de mots sur les lieux d\'habitation et les personnes de l\'entourage de l\'enfant',
                parent: 'bouchon-j1_334'
            },
            {
                id: 'bouchon-j1_370',
                text: 'syntaxe de la description simple',
                parent: 'bouchon-j1_334'
            },
            {
                id: 'bouchon-j1_335',
                text: 'Prendre part à une conversation',
                parent: 'bouchon-j1_332'
            },
            {
                id: 'bouchon-j1_339',
                text: 'saluer, se présenter',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_371',
                text: 'demander à quelqu\'un de ses nouvelles, réagir, et donner de ses nouvelles',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_372',
                text: 'formuler des souhaits basiques',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_373',
                text: 'utiliser des formules de politesse',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_374',
                text: 'répondre à des questions sur des sujets familiers',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_375',
                text: 'épeler des mots et des noms familiers',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_376',
                text: 'répertoire élèmentaire de mots sur des sujets familiers',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_377',
                text: 'syntaxe de conversation simple (question-réponse)',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_378',
                text: 'situations de communication',
                parent: 'bouchon-j1_335'
            },
            {
                id: 'bouchon-j1_7',
                text: 'Enseignements artistiques',
                parent: 'bouchon-niveau1'
            },
            {
                id: 'bouchon-j1_62',
                text: 'Arts plastiques',
                parent: 'bouchon-j1_7'
            },
            {
                id: 'bouchon-j1_64',
                text: 'La représentation du monde',
                parent: 'bouchon-j1_62'
            },
            {
                id: 'bouchon-j1_345',
                text: 'utiliser le dessin dans toute sa diversité comme moyen d\'expression',
                parent: 'bouchon-j1_64'
            },
            {
                id: 'bouchon-j1_346',
                text: 'employer divers outils dont ceux numériques pour représenter',
                parent: 'bouchon-j1_64'
            },
            {
                id: 'bouchon-j1_347',
                text: 'prendre en compte l\'influence de ces outils, supports, matériaux, gestes sur la représetnations en 2D et 3D',
                parent: 'bouchon-j1_64'
            },
            {
                id: 'bouchon-j1_348',
                text: 'connaître diverses formes artistiques de représentation du mon de (oeuvres contemporaines, du passé, occidentales, extra-occidentales...)',
                parent: 'bouchon-j1_64'
            },
            {
                id: 'bouchon-j1_336',
                text: 'L\'expression des émotions',
                parent: 'bouchon-j1_62'
            },
            {
                id: 'bouchon-j1_342',
                text: 'exprimer sa sensibilité et son imagination en s\'emparant des élèments de langage plastique',
                parent: 'bouchon-j1_336'
            },
            {
                id: 'bouchon-j1_349',
                text: 'expérimenter les effets des couleurs, des matériaux... en explorant l\'organisation et la composition plastique',
                parent: 'bouchon-j1_336'
            },
            {
                id: 'bouchon-j1_350',
                text: 'exprimer ses émotions et sa sensibilité en confrontant sa perception à celle d\'autres élèves',
                parent: 'bouchon-j1_336'
            },
            {
                id: 'bouchon-j1_343',
                text: 'La narration et le témoignage par les images',
                parent: 'bouchon-j1_62'
            },
            {
                id: 'bouchon-j1_352',
                text: 'réaliser des productions plastiques pour raconter, témoigner',
                parent: 'bouchon-j1_343'
            },
            {
                id: 'bouchon-j1_353',
                text: 'transformer ou restructurer des images ou des objets',
                parent: 'bouchon-j1_343'
            },
            {
                id: 'bouchon-j1_354',
                text: 'articuler le texte et l\'image à des fins d\'illustration et de création',
                parent: 'bouchon-j1_343'
            },
            {
                id: 'bouchon-j1_63',
                text: 'Education musicale',
                parent: 'bouchon-j1_7'
            },
            {
                id: 'bouchon-j1_65',
                text: 'Chanter',
                parent: 'bouchon-j1_63'
            },
            {
                id: 'bouchon-j1_381',
                text: 'reproduire un modèle mélodique, rythmique',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_382',
                text: 'chanter une mélodie simple avec une intonation juste ',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_383',
                text: 'chanter une comptine, un chant par imitation',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_384',
                text: 'interpréter un chant avec expressivité en respectant ses phrases musicales',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_385',
                text: 'mobiliser son corps pour interpréter',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_386',
                text: 'les principaux registres vocaux',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_387',
                text: 'éléments constitutifs d\'une production vocale ',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_388',
                text: 'répertoire varié de chansons et de comptines',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_389',
                text: 'éléments de vocabulaire concernant l\'usage musicale de la voix',
                parent: 'bouchon-j1_65'
            },
            {
                id: 'bouchon-j1_66',
                text: 'Ecouter, comparer',
                parent: 'bouchon-j1_63'
            },
            {
                id: 'bouchon-j1_390',
                text: 'décrire et comparer les éléments sonores, identifier des élèments communs et contrastés',
                parent: 'bouchon-j1_66'
            },
            {
                id: 'bouchon-j1_391',
                text: 'repérer une organisation simple : récurrence d\'une mélodie, d\'un motif rythmique, d\'un thème...',
                parent: 'bouchon-j1_66'
            },
            {
                id: 'bouchon-j1_392',
                text: 'comparer des musiques et identifier des ressemblances et des différences',
                parent: 'bouchon-j1_66'
            },
            {
                id: 'bouchon-j1_393',
                text: 'lexique élémentaire pour décrire la musique (timbre, hauteur, intensité, tempo...)',
                parent: 'bouchon-j1_66'
            },
            {
                id: 'bouchon-j1_394',
                text: 'quelques grandes oeuvres du patrimoine ',
                parent: 'bouchon-j1_66'
            },
            {
                id: 'bouchon-j1_395',
                text: 'repères simples dans l\'espace et le temps',
                parent: 'bouchon-j1_66'
            },
            {
                id: 'bouchon-j1_67',
                text: 'Explorer, imaginer',
                parent: 'bouchon-j1_63'
            },
            {
                id: 'bouchon-j1_396',
                text: 'expérimenter les paramètres du son  (intensité, hauteur, timbre, durée...)',
                parent: 'bouchon-j1_67'
            },
            {
                id: 'bouchon-j1_397',
                text: 'imaginer des représentations graphiques ou corporelles de la musique',
                parent: 'bouchon-j1_67'
            },
            {
                id: 'bouchon-j1_398',
                text: 'inventer une organisation simple à partir d\'élèments sonores travaillés',
                parent: 'bouchon-j1_67'
            },
            {
                id: 'bouchon-j1_399',
                text: 'éléments de vocabulaire liés au son (intensité, hauteur, timbre, durée...)',
                parent: 'bouchon-j1_67'
            },
            {
                id: 'bouchon-j1_400',
                text: 'posture du musicien (écouter, respecter l\'autre, jouer ensemble)',
                parent: 'bouchon-j1_67'
            },
            {
                id: 'bouchon-j1_401',
                text: 'diversité des matériaux sonores',
                parent: 'bouchon-j1_67'
            },
            {
                id: 'bouchon-j1_380',
                text: 'Echanger, partager',
                parent: 'bouchon-j1_63'
            },
            {
                id: 'bouchon-j1_402',
                text: 'exprimer ses émotions, ses sentiments et ses préférences artistiques',
                parent: 'bouchon-j1_380'
            },
            {
                id: 'bouchon-j1_403',
                text: 'écouter et respecter l\'avis des autres et l\'expression de leur sensibilité',
                parent: 'bouchon-j1_380'
            },
            {
                id: 'bouchon-j1_404',
                text: 'respecter les règles et les exigences d\'une production musicale collective',
                parent: 'bouchon-j1_380'
            },
            {
                id: 'bouchon-j1_405',
                text: 'vocabulaire adapté à l\'expression de son avis',
                parent: 'bouchon-j1_380'
            },
            {
                id: 'bouchon-j1_406',
                text: 'conditions d\'un travail collectif (concentration, écoute, respect...)',
                parent: 'bouchon-j1_380'
            },
            {
                id: 'bouchon-j1_407',
                text: 'règles et contraintes d\'un travail collectif',
                parent: 'bouchon-j1_380'
            },
            {
                id: 'bouchon-j1_261',
                text: 'Education physique et sportive',
                parent: 'bouchon-niveau1'
            },
            {
                id: 'bouchon-j1_408',
                text: 'Produire une performance maximale, mesurée à une échéance donnée ',
                parent: 'bouchon-j1_261'
            },
            {
                id: 'bouchon-j1_20',
                text: 'transformer sa motricité spontanée pour maîtriser des actions motrices : courir, sauter, lancer',
                parent: 'bouchon-j1_408'
            },
            {
                id: 'bouchon-j1_37',
                text: 'utiliser sa main d\'adresse et son pied d\'appel, construire une adresse gestuelle et corporelle bilatérale',
                parent: 'bouchon-j1_408'
            },
            {
                id: 'bouchon-j1_38',
                text: 'mobiliser de façon optimale ses ressources pour produire des efforts à des intensités variables',
                parent: 'bouchon-j1_408'
            },
            {
                id: 'bouchon-j1_39',
                text: 'pendant l\'action, prendre des repères extèrieurs à son corps pour percevoir : espace, temps, durée, effort',
                parent: 'bouchon-j1_408'
            },
            {
                id: 'bouchon-j1_40',
                text: 'respecter les règles de sécurité édictées par le professeur',
                parent: 'bouchon-j1_408'
            },
            {
                id: 'bouchon-j1_409',
                text: 'Adapter ses déplacements à des environnements variés (activités de natation, de roule, de glisse, d\'équitation, d\'orientation, d\'escalade...)',
                parent: 'bouchon-j1_261'
            },
            {
                id: 'bouchon-j1_41',
                text: 'transformer sa motricité spontanée pour maitriser des actions motrices',
                parent: 'bouchon-j1_409'
            },
            {
                id: 'bouchon-j1_42',
                text: 's\'engager sans appréhension pour se déplacer dans différents environnements',
                parent: 'bouchon-j1_409'
            },
            {
                id: 'bouchon-j1_43',
                text: 'lire le milieu et adaper ses déplacements à ses contraintes',
                parent: 'bouchon-j1_409'
            },
            {
                id: 'bouchon-j1_44',
                text: 'respecter les règles essentielles de sécurité',
                parent: 'bouchon-j1_409'
            },
            {
                id: 'bouchon-j1_45',
                text: 'reconnaître une situation à risque',
                parent: 'bouchon-j1_409'
            },
            {
                id: 'bouchon-j1_410',
                text: 'S\'exprimer devant les autres par une prestation artistique et/ou acrobatique',
                parent: 'bouchon-j1_261'
            },
            {
                id: 'bouchon-j1_46',
                text: 's\'exposer aux autres : s\'engager avec facilité dans des situations d\'expression personnelle sans crainte de se montrer',
                parent: 'bouchon-j1_410'
            },
            {
                id: 'bouchon-j1_47',
                text: 'exploiter le pouvoir expressif du corps en transformant sa motricité et en construisant un répertoire d\'actions nouvelles à visée esthétique',
                parent: 'bouchon-j1_410'
            },
            {
                id: 'bouchon-j1_48',
                text: 's\'engager en sécurité dans des situations acrobatiques en constuisant de nouveaux pouvoirs moteurs',
                parent: 'bouchon-j1_410'
            },
            {
                id: 'bouchon-j1_49',
                text: 'synchroniser ses actions avec celles de ses partenaires',
                parent: 'bouchon-j1_410'
            },
            {
                id: 'bouchon-j1_411',
                text: 'Conduire et maîtriser un affrontement collectif ou interindividuel',
                parent: 'bouchon-j1_261'
            },
            {
                id: 'bouchon-j1_50',
                text: 'rechercher le gain du jeu ou  de la rencontre',
                parent: 'bouchon-j1_411'
            },
            {
                id: 'bouchon-j1_51',
                text: 'comprendre le but du jeu et orienter ses actions vers la cible',
                parent: 'bouchon-j1_411'
            },
            {
                id: 'bouchon-j1_52',
                text: 'accepter l\'opposition et la coopération',
                parent: 'bouchon-j1_411'
            },
            {
                id: 'bouchon-j1_53',
                text: 's\'adapter aux actions d\'un adversaire',
                parent: 'bouchon-j1_411'
            },
            {
                id: 'bouchon-j1_54',
                text: 'coordonner des actions motrices simples',
                parent: 'bouchon-j1_411'
            },
            {
                id: 'bouchon-j1_55',
                text: 's\'informer, prendre des repères pour agir seul ou avec les autres',
                parent: 'bouchon-j1_411'
            },
            {
                id: 'bouchon-j1_56',
                text: 'respecter les règles essentielles de jeu et de sécurité',
                parent: 'bouchon-j1_411'
            },
            {
                id: 'bouchon-j1_262',
                text: 'Enseignement moral et civique',
                parent: 'bouchon-niveau1'
            },
            {
                id: 'bouchon-j1_57',
                text: 'La sensibilité : soi et les autres',
                parent: 'bouchon-j1_262'
            },
            {
                id: 'bouchon-j1_102',
                text: 'Identifier et partager des émotions, des sentiments, dans des situations et à propos d\'objets diversifiés',
                parent: 'bouchon-j1_57'
            },
            {
                id: 'bouchon-j1_215',
                text: 'connaissance et reconnaissance des émotions de base',
                parent: 'bouchon-j1_102'
            },
            {
                id: 'bouchon-j1_216',
                text: 'connaissance et structuration du vocabulaire des sentiments et des émotions',
                parent: 'bouchon-j1_102'
            },
            {
                id: 'bouchon-j1_219',
                text: 'expérience de la diversité des expressions des émotions et des sentiments',
                parent: 'bouchon-j1_102'
            },
            {
                id: 'bouchon-j1_232',
                text: 'Se situer et exprimer en respectant les codes de la communication orale, les règles de l\'échange, et le statut de l\'interlocuteur',
                parent: 'bouchon-j1_57'
            },
            {
                id: 'bouchon-j1_234',
                text: 'Prendre soin de soi et des autres',
                parent: 'bouchon-j1_57'
            },
            {
                id: 'bouchon-j1_235',
                text: 'le soin du langage : la politesse',
                parent: 'bouchon-j1_234'
            },
            {
                id: 'bouchon-j1_236',
                text: 'le soin du corps, de l\'environnement immédiat et plus lointain',
                parent: 'bouchon-j1_234'
            },
            {
                id: 'bouchon-j1_242',
                text: 'le soin des biens personnels et collectifs',
                parent: 'bouchon-j1_234'
            },
            {
                id: 'bouchon-j1_243',
                text: 'l\'intégrité de la personne',
                parent: 'bouchon-j1_234'
            },
            {
                id: 'bouchon-j1_244',
                text: 'Accepter les différences',
                parent: 'bouchon-j1_57'
            },
            {
                id: 'bouchon-j1_245',
                text: 'le respect des pairs et des adultes',
                parent: 'bouchon-j1_244'
            },
            {
                id: 'bouchon-j1_246',
                text: 'les atteintes à la personne d\'autrui',
                parent: 'bouchon-j1_244'
            },
            {
                id: 'bouchon-j1_247',
                text: 'le respect des différences, interconnaissance et tolérance',
                parent: 'bouchon-j1_244'
            },
            {
                id: 'bouchon-j1_254',
                text: 'la conscience de la diversité des croyances et des convictions',
                parent: 'bouchon-j1_244'
            },
            {
                id: 'bouchon-j1_256',
                text: 'Identifier les symboles de la République : le drapeau, l\'hymne national, les monuments, la fête nationale',
                parent: 'bouchon-j1_57'
            },
            {
                id: 'bouchon-j1_259',
                text: 'Apprendre à coopérer',
                parent: 'bouchon-j1_57'
            },
            {
                id: 'bouchon-j1_58',
                text: 'Le droit à la règle : des principes pour vivre avec les autres',
                parent: 'bouchon-j1_262'
            },
            {
                id: 'bouchon-j1_260',
                text: 'Adapter sa tenue, son langage et son comportement aux différents contextes de vie et aux différents interlocuteurs',
                parent: 'bouchon-j1_58'
            },
            {
                id: 'bouchon-j1_327',
                text: 'initiation aux différents registres de langue',
                parent: 'bouchon-j1_260'
            },
            {
                id: 'bouchon-j1_328',
                text: 'Respecter les autres et les règles de la vie collective, participer à la définition de règles communes dans le cadre adéquat',
                parent: 'bouchon-j1_58'
            },
            {
                id: 'bouchon-j1_344',
                text: 'les règles de vie de la classe, de l\'école',
                parent: 'bouchon-j1_328'
            },
            {
                id: 'bouchon-j1_351',
                text: 'les droits et devoirs de l\'enfant, de l\'élève',
                parent: 'bouchon-j1_328'
            },
            {
                id: 'bouchon-j1_356',
                text: 'Comprendre que la règle commune peut autoriser, interdire, obliger (APER)',
                parent: 'bouchon-j1_58'
            },
            {
                id: 'bouchon-j1_357',
                text: 'Connaître ses droits et les moyens de les faire valoir',
                parent: 'bouchon-j1_58'
            },
            {
                id: 'bouchon-j1_358',
                text: 'Comprendre qu\'il existe une certaine gradation des sanctions et que celle-ci est éducative (accompagnement, réparation...)',
                parent: 'bouchon-j1_58'
            },
            {
                id: 'bouchon-j1_379',
                text: 'Connaître quelques principes et valeurs d\'une société démocratique',
                parent: 'bouchon-j1_58'
            },
            {
                id: 'bouchon-j1_412',
                text: 'les valeurs : liberté, égalité, laicité',
                parent: 'bouchon-j1_379'
            },
            {
                id: 'bouchon-j1_413',
                text: 'l\'égalité de droit entre les femmes et les hommes',
                parent: 'bouchon-j1_379'
            },
            {
                id: 'bouchon-j1_414',
                text: 'les droits et les devoirs de la personne, de l\'élève, du citoyen',
                parent: 'bouchon-j1_379'
            },
            {
                id: 'bouchon-j1_59',
                text: 'Le jugement : penser par soi-même et avec les autres',
                parent: 'bouchon-j1_262'
            },
            {
                id: 'bouchon-j1_415',
                text: 'Exposer une courte argumentation pour exprimer et justifier un point de vue et un choix personnels',
                parent: 'bouchon-j1_59'
            },
            {
                id: 'bouchon-j1_416',
                text: 'le choix et sa justification',
                parent: 'bouchon-j1_415'
            },
            {
                id: 'bouchon-j1_417',
                text: 'connaissance de quelques structures simples de l\'argumentation (connecteurs logiques et lexique)',
                parent: 'bouchon-j1_415'
            },
            {
                id: 'bouchon-j1_418',
                text: 'les raisons qui font juger une action bonne ou mauvaise',
                parent: 'bouchon-j1_415'
            },
            {
                id: 'bouchon-j1_419',
                text: 'S\'affirmer dans un débat sans imposer son point de vue aux autres et accepter le point de vue des autres',
                parent: 'bouchon-j1_59'
            },
            {
                id: 'bouchon-j1_420',
                text: 'les règles de la discussion en groupe',
                parent: 'bouchon-j1_419'
            },
            {
                id: 'bouchon-j1_421',
                text: 'initation aux règles du débat',
                parent: 'bouchon-j1_419'
            },
            {
                id: 'bouchon-j1_422',
                text: 'initiation à l\'argumentation',
                parent: 'bouchon-j1_419'
            },
            {
                id: 'bouchon-j1_423',
                text: 'les préjugés et les stéréotypes',
                parent: 'bouchon-j1_419'
            },
            {
                id: 'bouchon-j1_424',
                text: 'Aborder la laicité comme liberté de penser et de croire/ne pas croire',
                parent: 'bouchon-j1_59'
            },
            {
                id: 'bouchon-j1_425',
                text: 'initiation aux différences entre penser, croire, savoir',
                parent: 'bouchon-j1_424'
            },
            {
                id: 'bouchon-j1_426',
                text: 'Différencier son intérêt particulier de l\'intérêt général',
                parent: 'bouchon-j1_59'
            },
            {
                id: 'bouchon-j1_427',
                text: 'la notion de bien commun dans la classe, dans l\'école',
                parent: 'bouchon-j1_426'
            },
            {
                id: 'bouchon-j1_428',
                text: 'les valeurs personnelles et collectives',
                parent: 'bouchon-j1_426'
            },
            {
                id: 'bouchon-j1_60',
                text: 'L\'engagement : agir individuellement et collectivement',
                parent: 'bouchon-j1_262'
            },
            {
                id: 'bouchon-j1_429',
                text: 'Respecter les engagements pris envers soi-même et envers les autres',
                parent: 'bouchon-j1_60'
            },
            {
                id: 'bouchon-j1_430',
                text: 's\'impliquer dans la vie scolaire',
                parent: 'bouchon-j1_429'
            },
            {
                id: 'bouchon-j1_431',
                text: 'l\'engagement moral : loyauté, promesse, confiance',
                parent: 'bouchon-j1_429'
            },
            {
                id: 'bouchon-j1_432',
                text: 'Réaliser un projet collectif',
                parent: 'bouchon-j1_60'
            },
            {
                id: 'bouchon-j1_433',
                text: 'Coopérer en vue d\'un objectif commun',
                parent: 'bouchon-j1_60'
            },
            {
                id: 'bouchon-j1_434',
                text: 'Expliquer en mots simple la fraternité et la solidarité',
                parent: 'bouchon-j1_60'
            },
            {
                id: 'bouchon-j1_435',
                text: 'Prendre des responsabilités dans la classe et dans l\'école',
                parent: 'bouchon-j1_60'
            },
            {
                id: 'bouchon-j1_437',
                text: 'la participation démocratique',
                parent: 'bouchon-j1_435'
            },
            {
                id: 'bouchon-j1_438',
                text: 'la responsabilité',
                parent: 'bouchon-j1_435'
            },
            {
                id: 'bouchon-j1_439',
                text: 'le développement durable',
                parent: 'bouchon-j1_435'
            },
            {
                id: 'bouchon-j1_441',
                text: 'S\'impliquer dans la vie collective à différents niveaux (APS)',
                parent: 'bouchon-j1_60'
            },
            {
                id: 'bouchon-j1_329',
                text: 'Questionner le monde',
                parent: 'bouchon-niveau1'
            },
            {
                id: 'bouchon-j1_442',
                text: 'Questionner le monde du vivant, de la matière et des objets',
                parent: 'bouchon-j1_329'
            },
            {
                id: 'bouchon-j1_443',
                text: 'Qu\'est-ce que la matière?',
                parent: 'bouchon-j1_442'
            },
            {
                id: 'bouchon-j1_450',
                text: 'Identifier les trois états de la matière et observer des changements d\'états',
                parent: 'bouchon-j1_443'
            },
            {
                id: 'bouchon-j1_451',
                text: 'Identifier un changement d\'état de l\'eau dans un phénomène de la vie quotidienne',
                parent: 'bouchon-j1_443'
            },
            {
                id: 'bouchon-j1_444',
                text: 'Comment reconnaître le monde vivant?',
                parent: 'bouchon-j1_442'
            },
            {
                id: 'bouchon-j1_452',
                text: 'Connaître des caractéristiques du monde vivant, ses intéractions, sa diversité',
                parent: 'bouchon-j1_444'
            },
            {
                id: 'bouchon-j1_453',
                text: 'Reconnaître des comportements favorables à sa santé',
                parent: 'bouchon-j1_444'
            },
            {
                id: 'bouchon-j1_445',
                text: 'Les objets techniques',
                parent: 'bouchon-j1_442'
            },
            {
                id: 'bouchon-j1_454',
                text: 'Comprendre la fonction et le fonctionnement d\'objets fabriqués',
                parent: 'bouchon-j1_445'
            },
            {
                id: 'bouchon-j1_455',
                text: 'Réaliser quelques objets et circuits électriques simples, en respectant les règles élémentaires de sécurité',
                parent: 'bouchon-j1_445'
            },
            {
                id: 'bouchon-j1_456',
                text: 'Commencer à s\'approprier un environnement numérique',
                parent: 'bouchon-j1_445'
            },
            {
                id: 'bouchon-j1_446',
                text: 'Questionner l\'espace et le temps',
                parent: 'bouchon-j1_329'
            },
            {
                id: 'bouchon-j1_447',
                text: 'Se situer dans l\'espace',
                parent: 'bouchon-j1_446'
            },
            {
                id: 'bouchon-j1_457',
                text: 'Se repérer dans l\'espace et le représenter',
                parent: 'bouchon-j1_447'
            },
            {
                id: 'bouchon-j1_458',
                text: 'Situer un lieu sur une carte, un globe ou un écran informatique',
                parent: 'bouchon-j1_447'
            },
            {
                id: 'bouchon-j1_448',
                text: 'Se situer dans le temps',
                parent: 'bouchon-j1_446'
            },
            {
                id: 'bouchon-j1_459',
                text: 'Se repérer dans l\'espace et le représenter',
                parent: 'bouchon-j1_448'
            },
            {
                id: 'bouchon-j1_460',
                text: 'Repérer et situer quelques évènements dans un temps long',
                parent: 'bouchon-j1_448'
            },
            {
                id: 'bouchon-j1_449',
                text: 'Explorer les organisations du monde',
                parent: 'bouchon-j1_329'
            },
            {
                id: 'bouchon-j1_461',
                text: 'Comparer les modes de vie',
                parent: 'bouchon-j1_449'
            },
            {
                id: 'bouchon-j1_464',
                text: 'comparer des modes de vie à différentes époques ou de différentes cultures',
                parent: 'bouchon-j1_461'
            },
            {
                id: 'bouchon-j1_465',
                text: 'quelques éléments tels que l\'alimentation, l\'habitat, les outils, la guerre...',
                parent: 'bouchon-j1_461'
            },
            {
                id: 'bouchon-j1_466',
                text: 'quelques représentations du monde à travers le temps historique',
                parent: 'bouchon-j1_461'
            },
            {
                id: 'bouchon-j1_467',
                text: 'les modes de vie caractéristiques dans quelques espaces emblématiques',
                parent: 'bouchon-j1_461'
            },
            {
                id: 'bouchon-j1_462',
                text: 'Comprendre qu\'un espace est organisé',
                parent: 'bouchon-j1_449'
            },
            {
                id: 'bouchon-j1_468',
                text: 'découvrir le quartier, le village, la ville : ses principaux espaces et ses principales fonctions',
                parent: 'bouchon-j1_462'
            },
            {
                id: 'bouchon-j1_469',
                text: 'reconnaître différents paysages : le slittoraux, les massifs montagneux, les campagnes, les villes, les déserts',
                parent: 'bouchon-j1_462'
            },
            {
                id: 'bouchon-j1_463',
                text: 'Identifier des paysages',
                parent: 'bouchon-j1_449'
            },
            {
                id: 'bouchon-j1_330',
                text: 'Mathématiques',
                parent: 'bouchon-niveau1'
            },
            {
                id: 'bouchon-j1_233',
                text: 'Nombres et calculs',
                parent: 'bouchon-j1_330'
            },
            {
                id: 'bouchon-j1_355',
                text: 'Comprendre et utiliser des nombres entiers pour dénombrer, ordonner, repérer, comparer',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_436',
                text: 'dénombrer, constituer et comparer des collections',
                parent: 'bouchon-j1_355'
            },
            {
                id: 'bouchon-j1_440',
                text: 'utiliser diverses stratégies de dénombrement : décomposition, recomposition, unités intermédiaires...',
                parent: 'bouchon-j1_355'
            },
            {
                id: 'bouchon-j1_470',
                text: 'repérer un rang ou une position dans une file ou sur une piste',
                parent: 'bouchon-j1_355'
            },
            {
                id: 'bouchon-j1_471',
                text: 'faire le lien entre le rang dans une liste et le nombre d\'élèments qui le précèdent (ordinaux et cardinaux)',
                parent: 'bouchon-j1_355'
            },
            {
                id: 'bouchon-j1_472',
                text: 'comparer, ranger, encadrer, intercaler des nombres entiers en utilisant les symboles (&lt;,&gt;,=)',
                parent: 'bouchon-j1_355'
            },
            {
                id: 'bouchon-j1_474',
                text: 'Nommer, lire, écire, représenter des nombres entiers',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_475',
                text: 'utiliser diverses représentations des nombres',
                parent: 'bouchon-j1_474'
            },
            {
                id: 'bouchon-j1_476',
                text: 'passer d\'une représentation à l\'autre, en particulier associer les noms des nombres à leur écritures chiffrées',
                parent: 'bouchon-j1_474'
            },
            {
                id: 'bouchon-j1_477',
                text: 'interpréter les noms des nombres à l\'aide des unités de numération et des écritures arithmétiques',
                parent: 'bouchon-j1_474'
            },
            {
                id: 'bouchon-j1_478',
                text: 'associer un nombre enier à une position sur une demi droite graduée, ainsi qu\'à la distance de ce point à l\'origine',
                parent: 'bouchon-j1_474'
            },
            {
                id: 'bouchon-j1_479',
                text: 'associer un nombre ou un encadrement à une grandeuren mesurant celle-ci à l\'aide d\'une unité',
                parent: 'bouchon-j1_474'
            },
            {
                id: 'bouchon-j1_480',
                text: 'Résoudre des problèmes en utilisant des nombres entiers et le calcul',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_481',
                text: 'résoudre des problèmes issus de situations de la vie quotidienne ou adapté de jeux conduisant à utiliser les 4 opérations',
                parent: 'bouchon-j1_480'
            },
            {
                id: 'bouchon-j1_482',
                text: 'problèmes relevant des structures additives (+/-)',
                parent: 'bouchon-j1_480'
            },
            {
                id: 'bouchon-j1_483',
                text: 'problèmes relevant des structures multiplicatives (x/:)',
                parent: 'bouchon-j1_480'
            },
            {
                id: 'bouchon-j1_484',
                text: 'modéliser ces problèmes à l\'aide d\'écritures mathématiques',
                parent: 'bouchon-j1_480'
            },
            {
                id: 'bouchon-j1_485',
                text: 'sens des symboles (+/-/x/:)',
                parent: 'bouchon-j1_480'
            },
            {
                id: 'bouchon-j1_486',
                text: 'Organisation et gestion de données',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_487',
                text: 'exploiter des données numériques pour répondre à des questions',
                parent: 'bouchon-j1_486'
            },
            {
                id: 'bouchon-j1_488',
                text: 'pésenter et organiser des mesures sous forme de tableaux',
                parent: 'bouchon-j1_486'
            },
            {
                id: 'bouchon-j1_489',
                text: 'modes de représentation de données numériques : tableaux, graphiques...',
                parent: 'bouchon-j1_486'
            },
            {
                id: 'bouchon-j1_490',
                text: 'Calculer avec des nombres entiers',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_491',
                text: 'mémoriser des faits numériques et des procédures',
                parent: 'bouchon-j1_490'
            },
            {
                id: 'bouchon-j1_492',
                text: 'mémoriser la table d\'addition',
                parent: 'bouchon-j1_490'
            },
            {
                id: 'bouchon-j1_493',
                text: 'mémoriser la table de multiplication',
                parent: 'bouchon-j1_490'
            },
            {
                id: 'bouchon-j1_494',
                text: 'utiliser la décomposition additive et multiplicative (de 10, de 100), compléments à la dizaine supérieure, doubles et moitiés...',
                parent: 'bouchon-j1_490'
            },
            {
                id: 'bouchon-j1_495',
                text: 'élaborer ou choisir des stratégies de calcul à l\'oral ou à l\'écrit',
                parent: 'bouchon-j1_490'
            },
            {
                id: 'bouchon-j1_473',
                text: 'vérifier la vraisemblance d\'un résultat, notamment en estimant un ordre de grandeur',
                parent: 'bouchon-j1_490'
            },
            {
                id: 'bouchon-j1_497',
                text: 'Calculer mentalement pour obtenir un résultat exact ou évaluer un ordre de grandeur',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_498',
                text: 'Calculer en utilisant des écritures en ligne additives, soustractives, multiplicatives, mixtes',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_499',
                text: 'Mettre en oeuvre un algorithme de calcul posé pour l\'addition, la soustraction, la multiplication',
                parent: 'bouchon-j1_233'
            },
            {
                id: 'bouchon-j1_496',
                text: 'Grandeurs et mesures',
                parent: 'bouchon-j1_330'
            },
            {
                id: 'bouchon-j1_500',
                text: 'Comparer, estimer, mesurer des longueurs, des masses, des contenances, des durées',
                parent: 'bouchon-j1_496'
            },
            {
                id: 'bouchon-j1_501',
                text: 'comparer des objets selon plusieurs grandeurs et identifier quand il s\'agit d\'une longueur, d\'une masse, d\'une contenance, d\'une durée',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_502',
                text: 'comparer des masses, des longueurs et des contenances, directement, en introduisant la comparaison à un objet intermédiaire ou par mesurage',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_503',
                text: 'estimer les ordres de grandeurs de quelques longueurs, masses, contenances en relation avec les unités métriques. Vérifier éventuellement avec un instrument',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_504',
                text: 'mesurer des longueurs avec un instrument adapté, notamment en reportant une unité',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_505',
                text: 'mesurer des contenances et des masses avec des instruments adpatés',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_506',
                text: 'encadrer une grandeur par deux nombres entiers d\'unités',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_507',
                text: 'exprimer une mesure dans une ou plusieurs unités choisies ou imposées',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_508',
                text: 'comparer, estimer, mesurer des durées (minute, heure, jour, semaine, mois, année, siècle, millénaire) ',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_509',
                text: 'dans des cas simples, représenter une grandeur par une longueur, notamment une demi-droite graduée',
                parent: 'bouchon-j1_500'
            },
            {
                id: 'bouchon-j1_510',
                text: 'Résoudre des problèmes impliquant des longueurs, des masses, des contenances, des prix',
                parent: 'bouchon-j1_496'
            },
            {
                id: 'bouchon-j1_511',
                text: 'résoudre des problèmes, notamment de mesurage et de comparaison, en utilisant les opérations sur les grandeurs ou sur les nombres',
                parent: 'bouchon-j1_510'
            },
            {
                id: 'bouchon-j1_512',
                text: 'résoudre des problèmes impliquant des conversions simples d\'une unité usuelle à une autre',
                parent: 'bouchon-j1_510'
            },
            {
                id: 'bouchon-j1_513',
                text: 'Espace et géométrie',
                parent: 'bouchon-j1_330'
            },
            {
                id: 'bouchon-j1_514',
                text: 'Se repérer et se déplacer en utilisant des repères',
                parent: 'bouchon-j1_513'
            },
            {
                id: 'bouchon-j1_515',
                text: 'se repérer dans son environnement proche',
                parent: 'bouchon-j1_514'
            },
            {
                id: 'bouchon-j1_516',
                text: 'situer des objets ou des personnes les uns par rapport aux autres ou par rapport à  d\'autres repères',
                parent: 'bouchon-j1_514'
            },
            {
                id: 'bouchon-j1_517',
                text: 'produire des représentations des espaces familiers et moins familiers',
                parent: 'bouchon-j1_514'
            },
            {
                id: 'bouchon-j1_518',
                text: 's\'orienter et se déplacer en utilisant des repères',
                parent: 'bouchon-j1_514'
            },
            {
                id: 'bouchon-j1_519',
                text: 'coder et décoder pour prévoir, représenter et réaliser des déplacements dans des espaces familiers, sur un quadrillage, sur un écran',
                parent: 'bouchon-j1_514'
            },
            {
                id: 'bouchon-j1_520',
                text: 'Reconnaître, nommer, décrire, reproduire quelques solides',
                parent: 'bouchon-j1_513'
            },
            {
                id: 'bouchon-j1_521',
                text: 'reconnaître et trier les solides usuels parmi des solides variés',
                parent: 'bouchon-j1_520'
            },
            {
                id: 'bouchon-j1_522',
                text: 'décrire et comparer des solides en utilisant le vocabulaire approprié',
                parent: 'bouchon-j1_520'
            },
            {
                id: 'bouchon-j1_523',
                text: 'reproduire des solides',
                parent: 'bouchon-j1_520'
            },
            {
                id: 'bouchon-j1_524',
                text: 'fabriquer un cube à partir d\'un patron fourni',
                parent: 'bouchon-j1_520'
            },
            {
                id: 'bouchon-j1_525',
                text: 'Reconnaître, nommer, décrire, reproduire, construire quelques figures géométriques',
                parent: 'bouchon-j1_513'
            },
            {
                id: 'bouchon-j1_527',
                text: 'décrire, reproduire des figures ou des assemblages de figures planes sur papier quadrillé ou uni',
                parent: 'bouchon-j1_525'
            },
            {
                id: 'bouchon-j1_528',
                text: 'utiliser la règle, le compas ou l\'équerre comme instrument de tracé',
                parent: 'bouchon-j1_525'
            },
            {
                id: 'bouchon-j1_529',
                text: 'reconnaître et nommer les figures usuelles',
                parent: 'bouchon-j1_525'
            },
            {
                id: 'bouchon-j1_530',
                text: 'reconnaître et décrire à partir des côtés et des angles droits : carré, rectangle, triangle rectangle',
                parent: 'bouchon-j1_525'
            },
            {
                id: 'bouchon-j1_531',
                text: 'construire carré, rectangle, triangle rectangle sur un support uni  connaissant la longueur des côtés',
                parent: 'bouchon-j1_525'
            },
            {
                id: 'bouchon-j1_532',
                text: 'construire un cercle connaissant son centre et un point, ou son centre et son rayon',
                parent: 'bouchon-j1_525'
            },
            {
                id: 'bouchon-j1_526',
                text: 'Reconnaître et utiliser les notions d\'alignement, d\'angle droit, d\'égalité de longueurs, de milieu et de symétrie',
                parent: 'bouchon-j1_513'
            },
            {
                id: 'bouchon-j1_533',
                text: 'utiliser la règle pour repérer et produire des alignements',
                parent: 'bouchon-j1_526'
            },
            {
                id: 'bouchon-j1_534',
                text: 'repérer et produire des angles droits à l\'aide d\'un gabarit, d\'une équerre',
                parent: 'bouchon-j1_526'
            },
            {
                id: 'bouchon-j1_535',
                text: 'reporter une longueur sur une droite déjà tracée',
                parent: 'bouchon-j1_526'
            },
            {
                id: 'bouchon-j1_536',
                text: 'repérer ou trouver le milieu d\'un segment',
                parent: 'bouchon-j1_526'
            },
            {
                id: 'bouchon-j1_537',
                text: 'reconnaître si une figure présente un axe de symétrie (à trouver)',
                parent: 'bouchon-j1_526'
            },
            {
                id: 'bouchon-j1_538',
                text: 'compléter une figure pour qu\'elle soit symétrique par rapport à un axe donné',
                parent: 'bouchon-j1_526'
            },
            {
                id: 'bouchon-niveau2',
                text: 'CYCLE 3 (CM1-6ème)',
                parent: 'bouchon-compAsso'
            },
            {
                id: 'bouchon-j1_68',
                text: 'Français',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-j1_69',
                text: 'Langage oral',
                parent: 'bouchon-j1_68'
            },
            {
                id: 'bouchon-j1_70',
                text: 'Ecouter pour comprendre un message oral, un propos, un discours, un texte lu',
                parent: 'bouchon-j1_69'
            },
            {
                id: 'bouchon-j1_542',
                text: 'maintien d\'une attention orientée en fonction du but',
                parent: 'bouchon-j1_70'
            },
            {
                id: 'bouchon-j1_543',
                text: 'identification et mémorisation des informations importantes, enchainements et mise en relation de ces informations ainsi que des informations implicites',
                parent: 'bouchon-j1_70'
            },
            {
                id: 'bouchon-j1_544',
                text: 'repérage et prise en compte des différents genres de discours, du lexique et des références culturelles liées au domaine du message ou du texte entendu ',
                parent: 'bouchon-j1_70'
            },
            {
                id: 'bouchon-j1_545',
                text: 'repérage d\'éventuelles difficultés de compréhension, verbalisation de ces difficultés et des moyens d\'y répondre ',
                parent: 'bouchon-j1_70'
            },
            {
                id: 'bouchon-j1_546',
                text: 'vigilance critique par rapport au langage écouté',
                parent: 'bouchon-j1_70'
            },
            {
                id: 'bouchon-j1_71',
                text: 'Parler en prenant en compte son auditoire pour partager un point de vue personnel, pour oraliser une oeuvre de la littérature orale, pour tenir un propos élaboré et continu relevant d\'un genre de l\'oral',
                parent: 'bouchon-j1_69'
            },
            {
                id: 'bouchon-j1_539',
                text: 'mobilisation des ressources de la voix et du corps pour être entendu et compris',
                parent: 'bouchon-j1_71'
            },
            {
                id: 'bouchon-j1_540',
                text: 'organisation et structuration du propos selon le genre de discours, mobilisation des formes, des tournures et du lexique appropriés',
                parent: 'bouchon-j1_71'
            },
            {
                id: 'bouchon-j1_541',
                text: 'technique de mise en voix des textes littéaires',
                parent: 'bouchon-j1_71'
            },
            {
                id: 'bouchon-j1_549',
                text: 'technique de mémorisation des textes présentés ou interprétés',
                parent: 'bouchon-j1_71'
            },
            {
                id: 'bouchon-j1_72',
                text: 'Participer à des échanges dans des situations de communication diversifiées',
                parent: 'bouchon-j1_69'
            },
            {
                id: 'bouchon-j1_547',
                text: 'prise en compte de la parole des différents interlocuteurs dans un débat et identification des points de vue exprimés',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_548',
                text: 'présentation d\'une idée, d\'un point de vue en tenant compte des autres points de vue exprimés',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_550',
                text: 'mobilisation de stratégie argumentative',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_551',
                text: 'respect des règles conversationnelles',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_552',
                text: 'organisation du propos',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_553',
                text: 'construction et mobilisation de moyens d\'expression',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_554',
                text: 'mise à distance de l\'expérience et mobilisation des connaissances ',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_555',
                text: 'identification et vérification de ce qui relève du singulier, de l\'exemple, du général...',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_556',
                text: 'lexique des enseignements et des disciplines',
                parent: 'bouchon-j1_72'
            },
            {
                id: 'bouchon-j1_101',
                text: 'Adopter une attitude critique par rapport au langage produit',
                parent: 'bouchon-j1_69'
            },
            {
                id: 'bouchon-j1_557',
                text: 'règles régulant les échanges, repérage du respect ou non de ces règles dans les propos d\'un pair et aide à la reformulation ',
                parent: 'bouchon-j1_101'
            },
            {
                id: 'bouchon-j1_558',
                text: 'prise en compte de critères d\'évaluation explicites élaborés collectivement pour les présentations orales',
                parent: 'bouchon-j1_101'
            },
            {
                id: 'bouchon-j1_559',
                text: 'autocorrection après écoute (reformulation)',
                parent: 'bouchon-j1_101'
            },
            {
                id: 'bouchon-j1_560',
                text: 'fonctionnement de la syntaxe de la langue orale et comparaison avec l\'écrit',
                parent: 'bouchon-j1_101'
            },
            {
                id: 'bouchon-j1_561',
                text: 'relevé et emploi de mots, d\'expressions et de formulations',
                parent: 'bouchon-j1_101'
            },
            {
                id: 'bouchon-j1_73',
                text: 'Lecture et compréhension de l\'écrit',
                parent: 'bouchon-j1_68'
            },
            {
                id: 'bouchon-j1_74',
                text: 'Renforcer la fluidité de la lecture',
                parent: 'bouchon-j1_73'
            },
            {
                id: 'bouchon-j1_566',
                text: 'mémoriser des mots fréquents et irréguliers',
                parent: 'bouchon-j1_74'
            },
            {
                id: 'bouchon-j1_567',
                text: 'mettre en oeuvre de manière efficace et rapide le décodage',
                parent: 'bouchon-j1_74'
            },
            {
                id: 'bouchon-j1_568',
                text: 'prendre en compte des groupes syntaxiques, des marques de ponctuation',
                parent: 'bouchon-j1_74'
            },
            {
                id: 'bouchon-j1_76',
                text: 'Comprendre un texte littéraire et l\'interpréter',
                parent: 'bouchon-j1_73'
            },
            {
                id: 'bouchon-j1_564',
                text: 'mise en oeuvre d\'une démarche de compréhension à partir d\'un texte entendu ou lu (personnages, actions, chronologie, informations explicites...)',
                parent: 'bouchon-j1_76'
            },
            {
                id: 'bouchon-j1_565',
                text: 'identification du genre et de ses enjeux',
                parent: 'bouchon-j1_76'
            },
            {
                id: 'bouchon-j1_569',
                text: 'mobilisation des expériences antérieures de lecture et des connaissances qui en sont issues',
                parent: 'bouchon-j1_76'
            },
            {
                id: 'bouchon-j1_77',
                text: 'Comprendre des textes, des documents, des images et les interpréter',
                parent: 'bouchon-j1_73'
            },
            {
                id: 'bouchon-j1_78',
                text: 'Contrôler sa compréhension et adopter un comportement de lecteur autonome',
                parent: 'bouchon-j1_73'
            },
            {
                id: 'bouchon-j1_80',
                text: 'Ecriture',
                parent: 'bouchon-j1_68'
            },
            {
                id: 'bouchon-j1_81',
                text: 'Copier un texte d\'au moins quinze lignes sans erreur avec une présentation soignée et adaptée',
                parent: 'bouchon-j1_80'
            },
            {
                id: 'bouchon-j1_82',
                text: 'Utiliser ses connaissances pour mieux réfléchir, mieux écrire un texte',
                parent: 'bouchon-j1_80'
            },
            {
                id: 'bouchon-j1_83',
                text: 'Répondre à une question par une phrase complète à l\'écrit',
                parent: 'bouchon-j1_80'
            },
            {
                id: 'bouchon-j1_108',
                text: 'Rédiger un texte d\'une quinzaine de lignes en utilisant ses connaissances en vocabulaire et en grammaire (récit, description, dialogue, texte poétique, compte-rendu...)',
                parent: 'bouchon-j1_80'
            },
            {
                id: 'bouchon-j1_84',
                text: 'Etude de la langue: Vocabulaire',
                parent: 'bouchon-j1_68'
            },
            {
                id: 'bouchon-j1_85',
                text: 'Comprendre des mots nouveaux et les utiliser à bon escient',
                parent: 'bouchon-j1_84'
            },
            {
                id: 'bouchon-j1_86',
                text: 'Maitriser quelques relations de sens entre les mots',
                parent: 'bouchon-j1_84'
            },
            {
                id: 'bouchon-j1_87',
                text: 'Maitriser quelques relations concernant la forme et le sens des mots',
                parent: 'bouchon-j1_84'
            },
            {
                id: 'bouchon-j1_88',
                text: 'Savoir utiliser un dictionnaire (papier et/ou numérique)',
                parent: 'bouchon-j1_84'
            },
            {
                id: 'bouchon-j1_90',
                text: 'Etude de la langue: Grammaire',
                parent: 'bouchon-j1_68'
            },
            {
                id: 'bouchon-j1_91',
                text: 'Distinguer les mots selon leur nature',
                parent: 'bouchon-j1_90'
            },
            {
                id: 'bouchon-j1_92',
                text: 'Identifier les fonctions des mots dans la phrase',
                parent: 'bouchon-j1_90'
            },
            {
                id: 'bouchon-j1_93',
                text: 'Conjuguer les vebes et utiliser les temps à bon escient',
                parent: 'bouchon-j1_90'
            },
            {
                id: 'bouchon-j1_94',
                text: 'Maitriser l\'orthographe grammaticale',
                parent: 'bouchon-j1_90'
            },
            {
                id: 'bouchon-j1_95',
                text: 'Maitriser l\'orthographe lexicale',
                parent: 'bouchon-j1_90'
            },
            {
                id: 'bouchon-j1_96',
                text: 'Etude de la langue: Orthographe',
                parent: 'bouchon-j1_68'
            },
            {
                id: 'bouchon-j1_99',
                text: 'Orthographier correctement un texte simple de dix lignes (rédaction ou dictée) en se référant aux règles connues d\'ortographe et de grammaire ainsi qu\'à la connaissance du vocabulaire',
                parent: 'bouchon-j1_96'
            },
            {
                id: 'bouchon-JF1',
                text: 'Langues vivantes (ÉTRANGÈRES OU RÉGIONALES)',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF11',
                text: 'Activités langagières',
                parent: 'bouchon-JF1'
            },
            {
                id: 'bouchon-JF111',
                text: 'Écouter et comprendre',
                parent: 'bouchon-JF11'
            },
            {
                id: 'bouchon-JF1111',
                text: 'Comprendre l’ensemble des consignes utilisées en classe.',
                parent: 'bouchon-JF111'
            },
            {
                id: 'bouchon-JF1112',
                text: 'Suivre les instructions données.',
                parent: 'bouchon-JF111'
            },
            {
                id: 'bouchon-JF1113',
                text: 'Comprendre des mots familiers et des expressions courantes.',
                parent: 'bouchon-JF111'
            },
            {
                id: 'bouchon-JF1114',
                text: 'Suivre le fil d’une histoire simple (conte, légende...).',
                parent: 'bouchon-JF111'
            },
            {
                id: 'bouchon-JF1115',
                text: 'Identifier le sujet d’un message oral de courte durée.',
                parent: 'bouchon-JF111'
            },
            {
                id: 'bouchon-JF1116',
                text: 'Comprendre et extraire l’information essentielle d’un message oral de courte durée.',
                parent: 'bouchon-JF111'
            },
            {
                id: 'bouchon-JF112',
                text: 'Lire et comprendre',
                parent: 'bouchon-JF11'
            },
            {
                id: 'bouchon-JF1121',
                text: 'Comprendre des textes courts et simples (consignes, correspondance, poésie, recette, texte informatif, texte de fiction…) accompagnés d’un document visuel, en s’appuyant sur des éléments connus.',
                parent: 'bouchon-JF112'
            },
            {
                id: 'bouchon-JF113',
                text: 'Parler en continu',
                parent: 'bouchon-JF11'
            },
            {
                id: 'bouchon-JF1131',
                text: 'Reproduire un modèle oral (répéter, réciter...).',
                parent: 'bouchon-JF113'
            },
            {
                id: 'bouchon-JF1132',
                text: 'Lire à haute voix et de manière expressive un texte bref.',
                parent: 'bouchon-JF113'
            },
            {
                id: 'bouchon-JF1133',
                text: 'Se présenter oralement et présenter les autres.',
                parent: 'bouchon-JF113'
            },
            {
                id: 'bouchon-JF1134',
                text: 'Décrire son environnement quotidien, des personnes et/ou des activités culturellement connotées.',
                parent: 'bouchon-JF113'
            },
            {
                id: 'bouchon-JF1135',
                text: 'Raconter une histoire courte à l’aide de supports visuels.',
                parent: 'bouchon-JF113'
            },
            {
                id: 'bouchon-JF1136',
                text: 'Faire une brève annonce (date, anniversaire, invitation...) en situant l’évènement dans le temps et l’espace.',
                parent: 'bouchon-JF113'
            },
            {
                id: 'bouchon-JF114',
                text: 'Écrire',
                parent: 'bouchon-JF11'
            },
            {
                id: 'bouchon-JF1141',
                text: 'Copier des mots isolés et des textes courts ;',
                parent: 'bouchon-JF114'
            },
            {
                id: 'bouchon-JF1142',
                text: 'Écrire sous la dictée des expressions connues ;',
                parent: 'bouchon-JF114'
            },
            {
                id: 'bouchon-JF1143',
                text: 'Renseigner un questionnaire.',
                parent: 'bouchon-JF114'
            },
            {
                id: 'bouchon-JF1144',
                text: 'Produire de manière autonome quelques phrases sur soi-même, les autres, des personnages réels ou imaginaires.',
                parent: 'bouchon-JF114'
            },
            {
                id: 'bouchon-JF1145',
                text: 'Décrire des objets, des lieux.',
                parent: 'bouchon-JF114'
            },
            {
                id: 'bouchon-JF1146',
                text: 'Raconter succinctement des expériences vécues ou imaginées.',
                parent: 'bouchon-JF114'
            },
            {
                id: 'bouchon-JF1147',
                text: 'Rédiger un courrier court et simple, en référence à des modèles (message électronique, carte postale, lettre).',
                parent: 'bouchon-JF114'
            },
            {
                id: 'bouchon-JF115',
                text: 'Réagir et dialoguer',
                parent: 'bouchon-JF11'
            },
            {
                id: 'bouchon-JF1151',
                text: 'Établir un contact social (saluer, se présenter, présenter quelqu’un...).',
                parent: 'bouchon-JF115'
            },
            {
                id: 'bouchon-JF1152',
                text: 'Demander à quelqu’un de ses nouvelles et réagir en utilisant des formules de politesse.',
                parent: 'bouchon-JF115'
            },
            {
                id: 'bouchon-JF1153',
                text: 'Dialoguer pour échanger / obtenir des renseignements (itinéraire, horaire, prix...).',
                parent: 'bouchon-JF115'
            },
            {
                id: 'bouchon-JF1154',
                text: 'Dialoguer sur des sujets familiers (école, loisirs, maison...).',
                parent: 'bouchon-JF115'
            },
            {
                id: 'bouchon-JF1155',
                text: 'Réagir à des propositions, dans des situations de la vie courante (remercier, féliciter, présenter des excuses, accepter, refuser...).',
                parent: 'bouchon-JF115'
            },
            {
                id: 'bouchon-JF12',
                text: 'Activités culturelles et linguistiques',
                parent: 'bouchon-JF1'
            },
            {
                id: 'bouchon-JF121',
                text: 'Lexique',
                parent: 'bouchon-JF12'
            },
            {
                id: 'bouchon-JF1211',
                text: 'La personne et la vie quotidienne',
                parent: 'bouchon-JF121'
            },
            {
                id: 'bouchon-JF12111',
                text: 'Le corps humain, les vêtements, les modes de vie.',
                parent: 'bouchon-JF1211'
            },
            {
                id: 'bouchon-JF12112',
                text: 'Le portrait physique et moral.',
                parent: 'bouchon-JF1211'
            },
            {
                id: 'bouchon-JF12113',
                text: 'L’environnement urbain.',
                parent: 'bouchon-JF1211'
            },
            {
                id: 'bouchon-JF1212',
                text: 'Des repères géographiques, historiques et culturels des villes, pays et régions dont on étudie la langue',
                parent: 'bouchon-JF121'
            },
            {
                id: 'bouchon-JF12121',
                text: 'Leur situation géographique.',
                parent: 'bouchon-JF1212'
            },
            {
                id: 'bouchon-JF12122',
                text: 'Les caractéristiques physiques et repères culturels.',
                parent: 'bouchon-JF1212'
            },
            {
                id: 'bouchon-JF12123',
                text: 'Quelques figures historiques, contemporaines.',
                parent: 'bouchon-JF1212'
            },
            {
                id: 'bouchon-JF12124',
                text: 'Quelques grandes pages d’histoire spécifiques de l’aire étudiée.',
                parent: 'bouchon-JF1212'
            },
            {
                id: 'bouchon-JF1213',
                text: 'L’imaginaire',
                parent: 'bouchon-JF121'
            },
            {
                id: 'bouchon-JF12131',
                text: 'Littérature de jeunesse.',
                parent: 'bouchon-JF1213'
            },
            {
                id: 'bouchon-JF12132',
                text: 'Contes, mythes et légendes du pays ou de la région.',
                parent: 'bouchon-JF1213'
            },
            {
                id: 'bouchon-JF12133',
                text: 'Héros/héroïnes et personnages de fiction, de BD, de séries et de cinéma.',
                parent: 'bouchon-JF1213'
            },
            {
                id: 'bouchon-JF122',
                text: 'Grammaire',
                parent: 'bouchon-JF12'
            },
            {
                id: 'bouchon-JF1221',
                text: 'Le groupe verbal',
                parent: 'bouchon-JF122'
            },
            {
                id: 'bouchon-JF1222',
                text: 'Le groupe nominal',
                parent: 'bouchon-JF122'
            },
            {
                id: 'bouchon-JF1223',
                text: 'La phrase',
                parent: 'bouchon-JF122'
            },
            {
                id: 'bouchon-JF12231',
                text: 'type et forme de phrase : déclarative, interrogative, exclamative, impérative, affirmative, négative ;',
                parent: 'bouchon-JF1223'
            },
            {
                id: 'bouchon-JF12232',
                text: 'La syntaxe élémentaire de la phrase simple : ordre des mots, quelques mots de liaison (et, ou...) ;',
                parent: 'bouchon-JF1223'
            },
            {
                id: 'bouchon-JF12233',
                text: 'Quelques subordonnants dans des énoncés dits « complexes » (parce que...).',
                parent: 'bouchon-JF1223'
            },
            {
                id: 'bouchon-JF123',
                text: 'Phonologie',
                parent: 'bouchon-JF12'
            },
            {
                id: 'bouchon-JF1231',
                text: 'Phonèmes - percevoir et reproduire les phonèmes spécifiques à chaque langue.',
                parent: 'bouchon-JF123'
            },
            {
                id: 'bouchon-JF1232',
                text: 'Accents et rythme - percevoir et restituer le',
                parent: 'bouchon-JF123'
            },
            {
                id: 'bouchon-JF1233',
                text: 'Intonation - percevoir et restituer les schémas intonatifs : l’intonation caractéristique des différents types d’énoncés.',
                parent: 'bouchon-JF123'
            },
            {
                id: 'bouchon-JF1234',
                text: 'Lien phonie/graphie - l’alphabet (selon les langues).',
                parent: 'bouchon-JF123'
            },
            {
                id: 'bouchon-JF2',
                text: 'ARTS PLASTIQUES',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF21',
                text: 'La représentation plastique et les dispositifs de présentation',
                parent: 'bouchon-JF2'
            },
            {
                id: 'bouchon-JF211',
                text: 'La ressemblance ',
                parent: 'bouchon-JF21'
            },
            {
                id: 'bouchon-JF212',
                text: 'L’autonomie du geste graphique, pictural, sculptural ',
                parent: 'bouchon-JF21'
            },
            {
                id: 'bouchon-JF213',
                text: 'Les différentes catégories d’images, leurs procédés de fabrication, leurs transformations ',
                parent: 'bouchon-JF21'
            },
            {
                id: 'bouchon-JF214',
                text: 'La narration visuelle ',
                parent: 'bouchon-JF21'
            },
            {
                id: 'bouchon-JF215',
                text: 'La mise en regard et en espace ',
                parent: 'bouchon-JF21'
            },
            {
                id: 'bouchon-JF216',
                text: 'La prise en compte du spectateur, de l’effet recherché',
                parent: 'bouchon-JF21'
            },
            {
                id: 'bouchon-JF22',
                text: 'Les fabrications et la relation entre l’objet et l’espace',
                parent: 'bouchon-JF2'
            },
            {
                id: 'bouchon-JF221',
                text: 'L’hétérogénéité et la cohérence plastiques ',
                parent: 'bouchon-JF22'
            },
            {
                id: 'bouchon-JF222',
                text: 'L’invention, la fabrication, les détournements, les mises en scène des objets',
                parent: 'bouchon-JF22'
            },
            {
                id: 'bouchon-JF223',
                text: 'L’espace en trois dimensions ',
                parent: 'bouchon-JF22'
            },
            {
                id: 'bouchon-JF23',
                text: 'La matérialité de la production plastique et la sensibilité aux constituants de l’oeuvre',
                parent: 'bouchon-JF2'
            },
            {
                id: 'bouchon-JF231',
                text: 'La réalité concrète d’une production ou d’une oeuvre ',
                parent: 'bouchon-JF23'
            },
            {
                id: 'bouchon-JF232',
                text: 'Les qualités physiques des matériaux ',
                parent: 'bouchon-JF23'
            },
            {
                id: 'bouchon-JF233',
                text: 'Les effets du geste et de l’instrument',
                parent: 'bouchon-JF23'
            },
            {
                id: 'bouchon-JF234',
                text: 'La matérialité et la qualité de la couleur ',
                parent: 'bouchon-JF23'
            },
            {
                id: 'bouchon-JF3',
                text: 'Éducation musicale',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF31',
                text: 'Chanter et interpréter',
                parent: 'bouchon-JF3'
            },
            {
                id: 'bouchon-JF311',
                text: 'Reproduire et interpréter un modèle mélodique et rythmique.',
                parent: 'bouchon-JF31'
            },
            {
                id: 'bouchon-JF312',
                text: 'Chanter une mélodie simple avec une intonation juste et une intention expressive.',
                parent: 'bouchon-JF31'
            },
            {
                id: 'bouchon-JF313',
                text: 'Mémoriser et chanter par coeur un chant appris par imitation, soutenir un bref moment de chant en solo.',
                parent: 'bouchon-JF31'
            },
            {
                id: 'bouchon-JF314',
                text: 'Interpréter un chant avec expressivité en respectant plusieurs choix et contraintes précédemment indiqués.',
                parent: 'bouchon-JF31'
            },
            {
                id: 'bouchon-JF315',
                text: 'Tenir sa partie dans un bref moment de polyphonie.',
                parent: 'bouchon-JF31'
            },
            {
                id: 'bouchon-JF316',
                text: 'Mobiliser son corps pour interpréter, le cas échéant avec des instruments.',
                parent: 'bouchon-JF31'
            },
            {
                id: 'bouchon-JF317',
                text: 'Identifier les difficultés rencontrées dans l’interprétation d’un chant.',
                parent: 'bouchon-JF31'
            },
            {
                id: 'bouchon-JF3171',
                text: 'Répertoire de chansons diverses.',
                parent: 'bouchon-JF317'
            },
            {
                id: 'bouchon-JF3172',
                text: 'Paramètres du son et techniques vocales pour en jouer de façon expressive.',
                parent: 'bouchon-JF317'
            },
            {
                id: 'bouchon-JF3173',
                text: 'Vocabulaire de l’expression : quelques nuances simples, tempo, caractère, etc.',
                parent: 'bouchon-JF317'
            },
            {
                id: 'bouchon-JF3174',
                text: 'Polyphonie : rôle complémentaire des parties simultanées.',
                parent: 'bouchon-JF317'
            },
            {
                id: 'bouchon-JF3175',
                text: 'Interprétation d’une musique : compréhension du terme et usage approprié à propos d’une oeuvre écoutée et d’une musique produite en classe.',
                parent: 'bouchon-JF317'
            },
            {
                id: 'bouchon-JF32',
                text: 'Écouter, comparer et commenter',
                parent: 'bouchon-JF3'
            },
            {
                id: 'bouchon-JF321',
                text: 'Décrire et comparer des éléments sonores issus de contextes musicaux, d’aires géographiques ou culturelles différents et dans un temps historique, contemporain, proche ou lointain.',
                parent: 'bouchon-JF32'
            },
            {
                id: 'bouchon-JF322',
                text: 'Identifier et nommer ressemblances et différences dans deux extraits musicaux.',
                parent: 'bouchon-JF32'
            },
            {
                id: 'bouchon-JF323',
                text: 'Repérer et nommer une organisation simple dans un extrait musical : répétition d’une mélodie, d’un motif rythmique, d’un thème, d’une partie caractéristique, etc. ; en déduire une forme simple (couplet/refrain, ABA par exemple).',
                parent: 'bouchon-JF32'
            },
            {
                id: 'bouchon-JF324',
                text: 'Associer la découverte d’une oeuvre à des connaissances construites dans d’autres domaines enseignés.',
                parent: 'bouchon-JF32'
            },
            {
                id: 'bouchon-JF3241',
                text: 'Vocabulaire simple pour décrire la musique.',
                parent: 'bouchon-JF324'
            },
            {
                id: 'bouchon-JF3242',
                text: 'Méthodes pour comparer des musiques.',
                parent: 'bouchon-JF324'
            },
            {
                id: 'bouchon-JF3243',
                text: 'Repères simples dans le temps et dans l’espace.',
                parent: 'bouchon-JF324'
            },
            {
                id: 'bouchon-JF3244',
                text: 'Quelques grandes oeuvres du patrimoine.',
                parent: 'bouchon-JF324'
            },
            {
                id: 'bouchon-JF3245',
                text: 'Principales caractéristiques de l’orchestre symphonique.',
                parent: 'bouchon-JF324'
            },
            {
                id: 'bouchon-JF3246',
                text: 'Formes de production variées : vocales, instrumentales, solistes.',
                parent: 'bouchon-JF324'
            },
            {
                id: 'bouchon-JF33',
                text: 'Explorer, imaginer et créer',
                parent: 'bouchon-JF3'
            },
            {
                id: 'bouchon-JF331',
                text: 'Expérimenter les paramètres du son et en imaginer en conséquence des utilisations possibles.',
                parent: 'bouchon-JF33'
            },
            {
                id: 'bouchon-JF332',
                text: 'Imaginer des représentations graphiques pour organiser une succession de sons et d’événements sonores.',
                parent: 'bouchon-JF33'
            },
            {
                id: 'bouchon-JF333',
                text: 'Inventer une organisation simple à partir de sources sonores sélectionnées (dont la voix) et l’interpréter.',
                parent: 'bouchon-JF33'
            },
            {
                id: 'bouchon-JF3331',
                text: 'Développement du lexique pour décrire le son instrumental, le son vocal et les objets sonores dans les domaines de la hauteur, du timbre, de la durée, de l’intensité.',
                parent: 'bouchon-JF333'
            },
            {
                id: 'bouchon-JF3332',
                text: 'Diversité des matériaux sonores et catégories classées par caractéristiques dominantes.',
                parent: 'bouchon-JF333'
            },
            {
                id: 'bouchon-JF3333',
                text: 'Les postures de l’explorateur du son puis du compositeur : produire, écouter, trier, choisir, organiser, composer. ',
                parent: 'bouchon-JF333'
            },
            {
                id: 'bouchon-JF3334',
                text: 'Le projet graphique (partition adaptée pour organiser la mémoire) et sa traduction sonore.',
                parent: 'bouchon-JF333'
            },
            {
                id: 'bouchon-JF3335',
                text: 'Les exigences de la musique collective : écoute de l’autre, respect de ses propositions.',
                parent: 'bouchon-JF333'
            },
            {
                id: 'bouchon-JF34',
                text: 'Échanger, partager et argumenter',
                parent: 'bouchon-JF3'
            },
            {
                id: 'bouchon-JF341',
                text: 'Exprimer ses gouts au-delà de son ressenti immédiat.',
                parent: 'bouchon-JF34'
            },
            {
                id: 'bouchon-JF342',
                text: 'Écouter et respecter le point de vue des autres et l’expression de leur sensibilité.',
                parent: 'bouchon-JF34'
            },
            {
                id: 'bouchon-JF343',
                text: 'Argumenter un jugement sur une musique tout en respectant celui des autres.',
                parent: 'bouchon-JF34'
            },
            {
                id: 'bouchon-JF344',
                text: 'Argumenter un choix dans la perspective d’une interprétation collective.',
                parent: 'bouchon-JF34'
            },
            {
                id: 'bouchon-JF3441',
                text: 'Notions de respect, de bienveillance, de tolérance.',
                parent: 'bouchon-JF344'
            },
            {
                id: 'bouchon-JF3442',
                text: 'Vocabulaire adapté à l’expression et l’argumentation de son point de vue personnel sur la musique.',
                parent: 'bouchon-JF344'
            },
            {
                id: 'bouchon-JF3443',
                text: 'Conditions d’un travail collectif : concentration, écoute, respect, autoévaluation, etc.',
                parent: 'bouchon-JF344'
            },
            {
                id: 'bouchon-JF3444',
                text: 'Règles et contraintes du travail musical collectif visant l’expression d’un avis partagé comme une production sonore de qualité.',
                parent: 'bouchon-JF344'
            },
            {
                id: 'bouchon-JF4',
                text: 'Histoire des arts',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF41',
                text: 'Donner un avis argumenté sur ce que représente ou exprime une oeuvre d’art',
                parent: 'bouchon-JF4'
            },
            {
                id: 'bouchon-JF411',
                text: 'Identifier des personnages mythologiques ou religieux, des objets, des types d’espaces, des éclairages.',
                parent: 'bouchon-JF41'
            },
            {
                id: 'bouchon-JF412',
                text: 'Résumer une action représentée en image, déroulée sur scène ou sur un écran, et en caractériser les personnages.',
                parent: 'bouchon-JF41'
            },
            {
                id: 'bouchon-JF413',
                text: 'Caractériser un morceau de musique en termes simples.',
                parent: 'bouchon-JF41'
            },
            {
                id: 'bouchon-JF4131',
                text: 'Connaissance de mythes antiques et récits fondateurs, notamment bibliques.',
                parent: 'bouchon-JF413'
            },
            {
                id: 'bouchon-JF4132',
                text: 'Caractéristiques et spécificités des discours (raconter, décrire, expliquer, argumenter, résumer, etc.).',
                parent: 'bouchon-JF413'
            },
            {
                id: 'bouchon-JF4133',
                text: 'Lexique des émotions',
                parent: 'bouchon-JF413'
            },
            {
                id: 'bouchon-JF42',
                text: 'Dégager d’une oeuvre d’art, par l’observation ou l’écoute, ses principales caractéristiques techniques et formelles',
                parent: 'bouchon-JF4'
            },
            {
                id: 'bouchon-JF421',
                text: 'Identifier des matériaux, y compris sonores, et la manière dont l’artiste leur a donné forme.',
                parent: 'bouchon-JF42'
            },
            {
                id: 'bouchon-JF422',
                text: 'Retrouver des formes géométriques et comprendre leur agencement dans une façade, un tableau, un pavement, un tapis.',
                parent: 'bouchon-JF42'
            },
            {
                id: 'bouchon-JF423',
                text: 'Dégager d’une forme artistique des éléments de sens.',
                parent: 'bouchon-JF42'
            },
            {
                id: 'bouchon-JF4231',
                text: 'Caractéristiques des familles de matériaux.',
                parent: 'bouchon-JF423'
            },
            {
                id: 'bouchon-JF4232',
                text: 'Caractéristiques etspécificités des champs artistiques et éléments de lexique correspondants.',
                parent: 'bouchon-JF423'
            },
            {
                id: 'bouchon-JF43',
                text: 'Relier des caractéristiques d’une oeuvre d’art à des usages, ainsi qu’au contexte historique et culturel de sa création',
                parent: 'bouchon-JF4'
            },
            {
                id: 'bouchon-JF431',
                text: 'Mettre en relation une ou plusieurs oeuvres contemporaines entre elles et un fait historique, une époque, une aire géographique ou un texte, étudiés en histoire, en géographie ou en français.',
                parent: 'bouchon-JF43'
            },
            {
                id: 'bouchon-JF432',
                text: 'Mettre en relation un texte connu (récit, fable, poésie, texte religieux ou mythologique) et plusieurs de ses illustrations ou transpositions visuelles, musicales, scéniques, chorégraphiques ou filmiques, issues de diverses époques, en soulignant le propre du langage de chacune.',
                parent: 'bouchon-JF43'
            },
            {
                id: 'bouchon-JF433',
                text: 'Mettre en relation des oeuvres et objets mobiliers et des usages et modes de vie.',
                parent: 'bouchon-JF43'
            },
            {
                id: 'bouchon-JF4331',
                text: 'Constitution d’un premier « musée imaginaire » classé par époques.',
                parent: 'bouchon-JF433'
            },
            {
                id: 'bouchon-JF4332',
                text: 'Fiche signalétique/cartel pour identifier une oeuvre d’art.',
                parent: 'bouchon-JF433'
            },
            {
                id: 'bouchon-JF4333',
                text: 'Premiers éléments de lexique stylistique.',
                parent: 'bouchon-JF433'
            },
            {
                id: 'bouchon-JF44',
                text: 'Se repérer dans un musée, un lieu d’art, un site patrimonial',
                parent: 'bouchon-JF4'
            },
            {
                id: 'bouchon-JF441',
                text: 'Effectuer une recherche (dans le cadre d’un exercice collectif et sur la base de consignes précises) en vue de préparer une sortie culturelle.',
                parent: 'bouchon-JF44'
            },
            {
                id: 'bouchon-JF4411',
                text: 'Se repérer dans un musée ou un lieu d’art par la lecture et la compréhension des plans et indications.',
                parent: 'bouchon-JF441'
            },
            {
                id: 'bouchon-JF4412',
                text: 'Être sensibilisé à la vulnérabilité du patrimoine.',
                parent: 'bouchon-JF441'
            },
            {
                id: 'bouchon-JF44121',
                text: 'Premiers grands principes d’organisation muséale.',
                parent: 'bouchon-JF4412'
            },
            {
                id: 'bouchon-JF44122',
                text: 'Métiers de la conservation, de la restauration et de la diffusion.',
                parent: 'bouchon-JF4412'
            },
            {
                id: 'bouchon-JF44123',
                text: 'Identification et localisation d’une oeuvre ou d’une salle.',
                parent: 'bouchon-JF4412'
            },
            {
                id: 'bouchon-JF5',
                text: 'Education physique et sportive',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF51',
                text: 'Produire une performance maximale, mesurable à une échéance donnée',
                parent: 'bouchon-JF5'
            },
            {
                id: 'bouchon-JF511',
                text: 'Combiner des actions simples : courir-lancer ; courir-sauter.',
                parent: 'bouchon-JF51'
            },
            {
                id: 'bouchon-JF5111',
                text: 'Mobiliser ses ressources pour réaliser la meilleure performance possible dans des activités athlétiques variées (courses, sauts, lancers).',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF5112',
                text: 'Appliquer des principes simples pour améliorer la performance dans des activités athlétiques et/ ou nautiques.',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF5113',
                text: 'Utiliser sa vitesse pour aller plus loin, ou plus haut.',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF5114',
                text: 'Rester horizontalement et sans appui en équilibre dans l’eau.',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF5115',
                text: 'Pendant la pratique, prendre des repères extérieurs et des repères sur son corps pour contrôler son déplacement et son effort.',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF5116',
                text: 'Utiliser des outils de mesures simples pour évaluer sa performance.',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF5117',
                text: 'Respecter les règles des activités.',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF5118',
                text: 'Passer par les différents rôles sociaux.',
                parent: 'bouchon-JF511'
            },
            {
                id: 'bouchon-JF512',
                text: 'Adapter ses déplacements à des environnements variés',
                parent: 'bouchon-JF51'
            },
            {
                id: 'bouchon-JF5121',
                text: 'Conduire un déplacement sans appréhension et en toute sécurité.',
                parent: 'bouchon-JF512'
            },
            {
                id: 'bouchon-JF5122',
                text: 'Adapter son déplacement aux différents milieux.',
                parent: 'bouchon-JF512'
            },
            {
                id: 'bouchon-JF5123',
                text: 'Tenir compte du milieu et de ses évolutions (vent, eau, végétation etc.).',
                parent: 'bouchon-JF512'
            },
            {
                id: 'bouchon-JF5124',
                text: 'Gérer son effort pour pouvoir revenir au point de départ.',
                parent: 'bouchon-JF512'
            },
            {
                id: 'bouchon-JF5125',
                text: 'Aider l’autre.',
                parent: 'bouchon-JF512'
            },
            {
                id: 'bouchon-JF513',
                text: 'S’exprimer devant les autres par une prestation artistique et/ou acrobatique',
                parent: 'bouchon-JF51'
            },
            {
                id: 'bouchon-JF5131',
                text: 'Utiliser le pouvoir expressif du corps de différentes façons.',
                parent: 'bouchon-JF513'
            },
            {
                id: 'bouchon-JF5132',
                text: 'Enrichir son répertoire d’actions afin de communiquer une intention ou une émotion.',
                parent: 'bouchon-JF513'
            },
            {
                id: 'bouchon-JF5133',
                text: 'S’engager dans des actions artistiques ou acrobatiques destinées à être présentées aux autres en maitrisant les risques et ses émotions.',
                parent: 'bouchon-JF513'
            },
            {
                id: 'bouchon-JF5134',
                text: 'Mobiliser son imaginaire pour créer du sens et de l’émotion, dans des prestations collectives.',
                parent: 'bouchon-JF513'
            },
            {
                id: 'bouchon-JF514',
                text: 'Conduire et maitriser un affrontement collectif ou interindividuel',
                parent: 'bouchon-JF51'
            },
            {
                id: 'bouchon-JF5141',
                text: 'Rechercher le gain de l’affrontement par des choix tactiques simples.',
                parent: 'bouchon-JF514'
            },
            {
                id: 'bouchon-JF5142',
                text: 'Adapter son jeu et ses actions aux adversaires et à ses partenaires.',
                parent: 'bouchon-JF514'
            },
            {
                id: 'bouchon-JF5143',
                text: 'Coordonner des actions motrices simples.',
                parent: 'bouchon-JF514'
            },
            {
                id: 'bouchon-JF5144',
                text: 'Se reconnaitre attaquant / défenseur.',
                parent: 'bouchon-JF514'
            },
            {
                id: 'bouchon-JF5145',
                text: 'Coopérer pour attaquer et défendre.',
                parent: 'bouchon-JF514'
            },
            {
                id: 'bouchon-JF5146',
                text: 'Accepter de tenir des rôles simples d’arbitre et d’observateur.',
                parent: 'bouchon-JF514'
            },
            {
                id: 'bouchon-JF5147',
                text: 'S’informer pour agir.',
                parent: 'bouchon-JF514'
            },
            {
                id: 'bouchon-JF6',
                text: 'Enseignement moral et civique',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF61',
                text: 'La sensibilité : soi et les autres',
                parent: 'bouchon-JF6'
            },
            {
                id: 'bouchon-JF611',
                text: 'Partager et réguler des émotions, des sentiments dans des situations et à propos d’objets diversifiés : textes littéraires, oeuvres d’art, documents d’actualité, débats portant sur la vie de la classe.',
                parent: 'bouchon-JF61'
            },
            {
                id: 'bouchon-JF6111',
                text: 'Diversité des expressions des sentiments et des émotions dans différentes oeuvres (textes, oeuvres musicales, plastiques...)',
                parent: 'bouchon-JF611'
            },
            {
                id: 'bouchon-JF6112',
                text: 'Maitrise des règles de la communication.',
                parent: 'bouchon-JF611'
            },
            {
                id: 'bouchon-JF612',
                text: 'Mobiliser le vocabulaire adapté à leur expression.',
                parent: 'bouchon-JF61'
            },
            {
                id: 'bouchon-JF6121',
                text: 'Connaissance et structuration du vocabulaire des sentiments et des émotions.',
                parent: 'bouchon-JF612'
            },
            {
                id: 'bouchon-JF613',
                text: 'Respecter autrui et accepter les différences.',
                parent: 'bouchon-JF61'
            },
            {
                id: 'bouchon-JF6131',
                text: 'Respect des autres dans leur diversité : les atteintes à la personne d’autrui (racisme, antisémitisme, sexisme, xénophobie, homophobie, harcèlement...).',
                parent: 'bouchon-JF613'
            },
            {
                id: 'bouchon-JF6132',
                text: 'Respect des différences, tolérance.',
                parent: 'bouchon-JF613'
            },
            {
                id: 'bouchon-JF6133',
                text: 'Respect de la diversité des croyances et des convictions.',
                parent: 'bouchon-JF613'
            },
            {
                id: 'bouchon-JF6134',
                text: 'Le secours à autrui.',
                parent: 'bouchon-JF613'
            },
            {
                id: 'bouchon-JF614',
                text: 'Manifester le respect des autres dans son langage et son attitude.',
                parent: 'bouchon-JF61'
            },
            {
                id: 'bouchon-JF6141',
                text: 'Le soin du langage : le souci d’autrui dans le langage, notamment la politesse.',
                parent: 'bouchon-JF614'
            },
            {
                id: 'bouchon-JF6142',
                text: 'Le soin du corps, de l’environnement immédiat et plus lointain.',
                parent: 'bouchon-JF614'
            },
            {
                id: 'bouchon-JF6143',
                text: 'Le soin des biens personnels et collectifs.',
                parent: 'bouchon-JF614'
            },
            {
                id: 'bouchon-JF6144',
                text: 'L’intégrité de la personne.',
                parent: 'bouchon-JF614'
            },
            {
                id: 'bouchon-JF615',
                text: 'Comprendre le sens des symboles de la République.',
                parent: 'bouchon-JF61'
            },
            {
                id: 'bouchon-JF6151',
                text: 'Valeurs et symboles de la République française et de l’Union européenne. ',
                parent: 'bouchon-JF615'
            },
            {
                id: 'bouchon-JF616',
                text: 'Coopérer.',
                parent: 'bouchon-JF61'
            },
            {
                id: 'bouchon-JF6161',
                text: 'Savoir travailler en respectant les règles de la coopération.',
                parent: 'bouchon-JF616'
            },
            {
                id: 'bouchon-JF62',
                text: 'Le droit et la règle : des principes pour vivre avec les autres',
                parent: 'bouchon-JF6'
            },
            {
                id: 'bouchon-JF621',
                text: 'Comprendre les notions de droits et devoirs, les accepter et les appliquer.',
                parent: 'bouchon-JF62'
            },
            {
                id: 'bouchon-JF6211',
                text: 'Les droits et les devoirs : de la personne, de l’enfant, de l’élève, du citoyen.',
                parent: 'bouchon-JF621'
            },
            {
                id: 'bouchon-JF6212',
                text: 'Le code de la route : initiation au code de la route et aux règles de prudence, en lien avec l’attestation de première éducation à la route (Aper).',
                parent: 'bouchon-JF621'
            },
            {
                id: 'bouchon-JF6213',
                text: 'Le vocabulaire de la règle et du droit (droit, devoir, règle, règlement, loi).',
                parent: 'bouchon-JF621'
            },
            {
                id: 'bouchon-JF6214',
                text: 'Les différents contextes d’obéissance aux règles, le règlement intérieur, les sanctions.',
                parent: 'bouchon-JF621'
            },
            {
                id: 'bouchon-JF622',
                text: 'Respecter tous les autres et notamment appliquer les principes de l’égalité des femmes et des hommes.',
                parent: 'bouchon-JF62'
            },
            {
                id: 'bouchon-JF6221',
                text: 'L’égalité entre les filles et les garçons.',
                parent: 'bouchon-JF622'
            },
            {
                id: 'bouchon-JF6222',
                text: 'La mixité à l’école.',
                parent: 'bouchon-JF622'
            },
            {
                id: 'bouchon-JF6223',
                text: 'L’égalité des droits et la notion de discrimination.',
                parent: 'bouchon-JF622'
            },
            {
                id: 'bouchon-JF623',
                text: 'Reconnaitre les principes et les valeurs de la République et de l’Union européenne.',
                parent: 'bouchon-JF62'
            },
            {
                id: 'bouchon-JF6231',
                text: 'Les principes de la démocratie représentative en France et en Europe.',
                parent: 'bouchon-JF623'
            },
            {
                id: 'bouchon-JF6232',
                text: 'Les valeurs : la liberté, l’égalité, la laïcité.',
                parent: 'bouchon-JF623'
            },
            {
                id: 'bouchon-JF624',
                text: 'Reconnaitre les traits constitutifs de la République française.',
                parent: 'bouchon-JF62'
            },
            {
                id: 'bouchon-JF6241',
                text: 'Le vocabulaire des institutions.',
                parent: 'bouchon-JF624'
            },
            {
                id: 'bouchon-JF6242',
                text: 'Le fondement de la loi et les grandes déclarations des droits.',
                parent: 'bouchon-JF624'
            },
            {
                id: 'bouchon-JF6243',
                text: 'La notion de citoyenneté nationale et européenne (l’identité juridique d’une personne).',
                parent: 'bouchon-JF624'
            },
            {
                id: 'bouchon-JF63',
                text: 'Le jugement : penser par soi-même et avec les autres',
                parent: 'bouchon-JF6'
            },
            {
                id: 'bouchon-JF631',
                text: 'Prendre part à une discussion, un débat ou un dialogue : prendre la parole devant les autres, écouter autrui, formuler et apprendre à justifier un point de vue.',
                parent: 'bouchon-JF63'
            },
            {
                id: 'bouchon-JF6311',
                text: 'Le choix, sa justification.',
                parent: 'bouchon-JF631'
            },
            {
                id: 'bouchon-JF6312',
                text: 'Connaissance et reconnaissance de différents types d’expression (récit, reportage, témoignage).',
                parent: 'bouchon-JF631'
            },
            {
                id: 'bouchon-JF6313',
                text: 'Les règles de la discussion en groupe (écoute, respect du point de vue de l’autre, recherche d’un accord...).',
                parent: 'bouchon-JF631'
            },
            {
                id: 'bouchon-JF6314',
                text: 'Approche de l’argumentation.',
                parent: 'bouchon-JF631'
            },
            {
                id: 'bouchon-JF6315',
                text: 'Le débat argumenté.',
                parent: 'bouchon-JF631'
            },
            {
                id: 'bouchon-JF6316',
                text: 'Initiation au débat démocratique.',
                parent: 'bouchon-JF631'
            },
            {
                id: 'bouchon-JF6317',
                text: 'Les critères du jugement moral : le bien et le mal, le juste et l’injuste.',
                parent: 'bouchon-JF631'
            },
            {
                id: 'bouchon-JF632',
                text: 'Nuancer son point de vue en tenant compte du point de vue des autres.',
                parent: 'bouchon-JF63'
            },
            {
                id: 'bouchon-JF6321',
                text: 'Les préjugés et les stéréotypes (racisme, antisémitisme, sexisme, homophobie).',
                parent: 'bouchon-JF632'
            },
            {
                id: 'bouchon-JF633',
                text: 'Comprendre que la laïcité accorde à chacun un droit égal à exercer librement son jugement et exige le respect de ce droit chez autrui.',
                parent: 'bouchon-JF63'
            },
            {
                id: 'bouchon-JF6331',
                text: 'La laïcité comme liberté de penser et de croire ou de ne pas croire à travers la Charte de la laïcité à l’école.',
                parent: 'bouchon-JF633'
            },
            {
                id: 'bouchon-JF6332',
                text: 'La distinction entre croyances et opinions.',
                parent: 'bouchon-JF633'
            },
            {
                id: 'bouchon-JF634',
                text: 'Prendre conscience des enjeux civiques de l’usage de l’informatique et de l’Internet et adopter une attitude critique face aux résultats obtenus.',
                parent: 'bouchon-JF63'
            },
            {
                id: 'bouchon-JF6341',
                text: 'Le jugement critique : traitement de l’information et éducation aux médias',
                parent: 'bouchon-JF634'
            },
            {
                id: 'bouchon-JF6342',
                text: 'Responsabilisation à l’usage du numérique en lien avec la charte d’usage des Tuic.',
                parent: 'bouchon-JF634'
            },
            {
                id: 'bouchon-JF635',
                text: 'Distinguer son intérêt personnel de l’intérêt collectif.',
                parent: 'bouchon-JF63'
            },
            {
                id: 'bouchon-JF6351',
                text: 'La notion de bien commun dans la classe, l’école et la société.',
                parent: 'bouchon-JF635'
            },
            {
                id: 'bouchon-JF6352',
                text: 'Les valeurs personnelles et collectives.',
                parent: 'bouchon-JF635'
            },
            {
                id: 'bouchon-JF6353',
                text: 'Valeurs et institutions : la devise de la République (Liberté, Égalité, Fraternité).',
                parent: 'bouchon-JF635'
            },
            {
                id: 'bouchon-JF6354',
                text: 'Le sens républicain de la nation.',
                parent: 'bouchon-JF635'
            },
            {
                id: 'bouchon-JF6355',
                text: 'Les libertés fondamentales.',
                parent: 'bouchon-JF635'
            },
            {
                id: 'bouchon-JF6356',
                text: 'La laïcité.',
                parent: 'bouchon-JF635'
            },
            {
                id: 'bouchon-JF6357',
                text: 'Les valeurs de l’Union européenne.',
                parent: 'bouchon-JF635'
            },
            {
                id: 'bouchon-JF64',
                text: 'L’engagement : agir individuellement et collectivement',
                parent: 'bouchon-JF6'
            },
            {
                id: 'bouchon-JF641',
                text: 'S’engager dans la réalisation d’un projet collectif (projet de classe, d’école, communal, national...).',
                parent: 'bouchon-JF64'
            },
            {
                id: 'bouchon-JF6411',
                text: 'L’engagement moral (la confiance, la promesse, la loyauté, l’entraide, la solidarité).',
                parent: 'bouchon-JF641'
            },
            {
                id: 'bouchon-JF6412',
                text: 'Le secours à autrui : prendre des initiatives, en lien avec le dispositif et l’attestation « apprendre à porter secours » (APS).',
                parent: 'bouchon-JF641'
            },
            {
                id: 'bouchon-JF6413',
                text: 'Le code de la route : sensibilisation à la responsabilité en lien avec l’attestation de première éducation à la route (Aper).',
                parent: 'bouchon-JF641'
            },
            {
                id: 'bouchon-JF642',
                text: 'Pouvoir expliquer ses choix et ses actes.',
                parent: 'bouchon-JF64'
            },
            {
                id: 'bouchon-JF6421',
                text: 'La responsabilité de l’individu et du citoyen dans le domaine de l’environnement, de la santé.',
                parent: 'bouchon-JF642'
            },
            {
                id: 'bouchon-JF643',
                text: 'Savoir participer et prendre sa place dans un groupe.',
                parent: 'bouchon-JF64'
            },
            {
                id: 'bouchon-JF6431',
                text: 'La participation démocratique.',
                parent: 'bouchon-JF643'
            },
            {
                id: 'bouchon-JF6432',
                text: 'Le vote.',
                parent: 'bouchon-JF643'
            },
            {
                id: 'bouchon-JF6433',
                text: 'Les acteurs locaux et la citoyenneté.',
                parent: 'bouchon-JF643'
            },
            {
                id: 'bouchon-JF644',
                text: 'Expliquer en mots simples la fraternité et la solidarité.',
                parent: 'bouchon-JF64'
            },
            {
                id: 'bouchon-JF6441',
                text: 'La solidarité individuelle et collective.',
                parent: 'bouchon-JF644'
            },
            {
                id: 'bouchon-JF6442',
                text: 'La fraternité dans la devise républicaine.',
                parent: 'bouchon-JF644'
            },
            {
                id: 'bouchon-JF7',
                text: 'Histoire et Géographie',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF71',
                text: 'Histoire',
                parent: 'bouchon-JF7'
            },
            {
                id: 'bouchon-JF711',
                text: 'Classe de CM1',
                parent: 'bouchon-JF71'
            },
            {
                id: 'bouchon-JF7111',
                text: 'Thème 1 Et avant la France ?',
                parent: 'bouchon-JF711'
            },
            {
                id: 'bouchon-JF71111',
                text: 'Quelles traces d’une occupation ancienne du territoire français ?',
                parent: 'bouchon-JF7111'
            },
            {
                id: 'bouchon-JF71112',
                text: 'Celtes, Gaulois, Grecs et Romains : quels héritages des mondes anciens ?',
                parent: 'bouchon-JF7111'
            },
            {
                id: 'bouchon-JF71113',
                text: 'Les grands mouvements et déplacements de populations (IV-Xe siècles).',
                parent: 'bouchon-JF7111'
            },
            {
                id: 'bouchon-JF71114',
                text: 'Clovis et Charlemagne, Mérovingiens et Carolingiens dans la continuité de l’empire romain',
                parent: 'bouchon-JF7111'
            },
            {
                id: 'bouchon-JF7112',
                text: 'Thème 2 Le temps des rois',
                parent: 'bouchon-JF711'
            },
            {
                id: 'bouchon-JF71121',
                text: 'Louis IX, le « roi chrétien » au XIIIe siècle',
                parent: 'bouchon-JF7112'
            },
            {
                id: 'bouchon-JF71122',
                text: 'François Ier, un protecteur des Arts et des Lettres à la Renaissance.',
                parent: 'bouchon-JF7112'
            },
            {
                id: 'bouchon-JF71123',
                text: 'Henri IV et l’édit de Nantes.',
                parent: 'bouchon-JF7112'
            },
            {
                id: 'bouchon-JF71124',
                text: 'Louis XIV, le roi Soleil à Versailles',
                parent: 'bouchon-JF7112'
            },
            {
                id: 'bouchon-JF7113',
                text: 'Thème 3 Le temps de la Révolution et de l’Empire',
                parent: 'bouchon-JF711'
            },
            {
                id: 'bouchon-JF71131',
                text: 'De l’année 1789 à l’exécution du roi : Louis XVI, la Révolution, la Nation.',
                parent: 'bouchon-JF7113'
            },
            {
                id: 'bouchon-JF71132',
                text: 'Napoléon Bonaparte, du général à l’Empereur, de la Révolution à l’Empire',
                parent: 'bouchon-JF7113'
            },
            {
                id: 'bouchon-JF712',
                text: 'Classe de CM2',
                parent: 'bouchon-JF71'
            },
            {
                id: 'bouchon-JF7121',
                text: 'Thème 1 Le temps de la République',
                parent: 'bouchon-JF712'
            },
            {
                id: 'bouchon-JF71211',
                text: '1892 : la République fête ses cent ans',
                parent: 'bouchon-JF7121'
            },
            {
                id: 'bouchon-JF71212',
                text: 'L’école primaire au temps de Jules Ferry',
                parent: 'bouchon-JF7121'
            },
            {
                id: 'bouchon-JF71213',
                text: 'Des républiques, une démocratie : des libertés, des droits et des devoirs',
                parent: 'bouchon-JF7121'
            },
            {
                id: 'bouchon-JF7122',
                text: 'Thème 2 L’âge industriel en France',
                parent: 'bouchon-JF712'
            },
            {
                id: 'bouchon-JF71221',
                text: 'Énergies et machines',
                parent: 'bouchon-JF7122'
            },
            {
                id: 'bouchon-JF71222',
                text: 'Le travail à la mine, à l’usine, à l’atelier, au grand magasin',
                parent: 'bouchon-JF7122'
            },
            {
                id: 'bouchon-JF71223',
                text: 'La ville industrielle',
                parent: 'bouchon-JF7122'
            },
            {
                id: 'bouchon-JF71224',
                text: 'Le monde rural',
                parent: 'bouchon-JF7122'
            },
            {
                id: 'bouchon-JF7123',
                text: 'Thème 3 La France, des guerres mondiales à l’Union européenne',
                parent: 'bouchon-JF712'
            },
            {
                id: 'bouchon-JF71231',
                text: 'Deux guerres mondiales au vingtième siècle',
                parent: 'bouchon-JF7123'
            },
            {
                id: 'bouchon-JF71232',
                text: 'La construction européenne',
                parent: 'bouchon-JF7123'
            },
            {
                id: 'bouchon-JF713',
                text: 'Classe de sixième',
                parent: 'bouchon-JF71'
            },
            {
                id: 'bouchon-JF7131',
                text: 'Thème 1 La longue histoire de l’humanité et des migrations',
                parent: 'bouchon-JF713'
            },
            {
                id: 'bouchon-JF71311',
                text: 'Les débuts de l’humanité',
                parent: 'bouchon-JF7131'
            },
            {
                id: 'bouchon-JF71312',
                text: 'La « révolution » néolithique',
                parent: 'bouchon-JF7131'
            },
            {
                id: 'bouchon-JF71313',
                text: 'Premiers États, premières écritures',
                parent: 'bouchon-JF7131'
            },
            {
                id: 'bouchon-JF7132',
                text: 'Thème 2 Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire avant J.-C.',
                parent: 'bouchon-JF713'
            },
            {
                id: 'bouchon-JF71321',
                text: 'Le monde des cités grecques',
                parent: 'bouchon-JF7132'
            },
            {
                id: 'bouchon-JF71322',
                text: 'Rome du mythe à l’histoire',
                parent: 'bouchon-JF7132'
            },
            {
                id: 'bouchon-JF71323',
                text: 'La naissance du monothéisme juif dans un monde polythéiste',
                parent: 'bouchon-JF7132'
            },
            {
                id: 'bouchon-JF7133',
                text: 'Thème 3 L’empire romain dans le monde antique',
                parent: 'bouchon-JF713'
            },
            {
                id: 'bouchon-JF71331',
                text: 'Conquêtes, paix romaine et romanisation',
                parent: 'bouchon-JF7133'
            },
            {
                id: 'bouchon-JF71332',
                text: 'Des chrétiens dans l’Empire',
                parent: 'bouchon-JF7133'
            },
            {
                id: 'bouchon-JF71333',
                text: 'Les relations de l’empire romain avec les autres mondes anciens : l’ancienne route de la soie et la Chine des Han',
                parent: 'bouchon-JF7133'
            },
            {
                id: 'bouchon-JF72',
                text: 'Géographie',
                parent: 'bouchon-JF7'
            },
            {
                id: 'bouchon-JF721',
                text: 'Classe de CM1',
                parent: 'bouchon-JF72'
            },
            {
                id: 'bouchon-JF7211',
                text: 'Thème 1 Découvrir le(s) lieu(x) où j’habite',
                parent: 'bouchon-JF721'
            },
            {
                id: 'bouchon-JF72111',
                text: 'Identifier les caractéristiques de mon(mes) lieu(x) de vie.',
                parent: 'bouchon-JF7211'
            },
            {
                id: 'bouchon-JF72112',
                text: 'Localiser mon (mes) lieu(x) de vie et le(s) situer à différentes échelles.',
                parent: 'bouchon-JF7211'
            },
            {
                id: 'bouchon-JF7212',
                text: 'Thème 2 Se loger, travailler, se cultiver, avoir des loisirs en France',
                parent: 'bouchon-JF721'
            },
            {
                id: 'bouchon-JF72121',
                text: 'Dans des espaces urbains.',
                parent: 'bouchon-JF7212'
            },
            {
                id: 'bouchon-JF72122',
                text: 'Dans un espace touristique.',
                parent: 'bouchon-JF7212'
            },
            {
                id: 'bouchon-JF7213',
                text: 'Thème 3 Consommer en France',
                parent: 'bouchon-JF721'
            },
            {
                id: 'bouchon-JF72131',
                text: 'Satisfaire les besoins en énergie, en eau.',
                parent: 'bouchon-JF7213'
            },
            {
                id: 'bouchon-JF72132',
                text: 'Satisfaire les besoins alimentaires.',
                parent: 'bouchon-JF7213'
            },
            {
                id: 'bouchon-JF722',
                text: 'Classe de CM2',
                parent: 'bouchon-JF72'
            },
            {
                id: 'bouchon-JF7221',
                text: 'Thème 1 Se déplacer',
                parent: 'bouchon-JF722'
            },
            {
                id: 'bouchon-JF72211',
                text: 'Se déplacer au quotidien en France.',
                parent: 'bouchon-JF7221'
            },
            {
                id: 'bouchon-JF72212',
                text: 'Se déplacer au quotidien dans un autre lieu du monde.',
                parent: 'bouchon-JF7221'
            },
            {
                id: 'bouchon-JF72213',
                text: 'Se déplacer de ville en ville, en France, en Europe et dans le monde.',
                parent: 'bouchon-JF7221'
            },
            {
                id: 'bouchon-JF7222',
                text: 'Thème 2 Communiquer d’un bout à l’autre du monde grâce à l’Internet',
                parent: 'bouchon-JF722'
            },
            {
                id: 'bouchon-JF72221',
                text: 'Un monde de réseaux.',
                parent: 'bouchon-JF7222'
            },
            {
                id: 'bouchon-JF72222',
                text: 'Un habitant connecté au monde.',
                parent: 'bouchon-JF7222'
            },
            {
                id: 'bouchon-JF72223',
                text: 'Des habitants inégalement connectés dans le monde.',
                parent: 'bouchon-JF7222'
            },
            {
                id: 'bouchon-JF7223',
                text: 'Thème 3 Mieux habiter',
                parent: 'bouchon-JF722'
            },
            {
                id: 'bouchon-JF72231',
                text: 'Favoriser la place de la « nature » en ville.',
                parent: 'bouchon-JF7223'
            },
            {
                id: 'bouchon-JF72232',
                text: 'Recycler.',
                parent: 'bouchon-JF7223'
            },
            {
                id: 'bouchon-JF72233',
                text: 'Habiter un écoquartier .',
                parent: 'bouchon-JF7223'
            },
            {
                id: 'bouchon-JF723',
                text: 'Classe de sixième',
                parent: 'bouchon-JF72'
            },
            {
                id: 'bouchon-JF7231',
                text: 'Thème 1 Habiter une métropole',
                parent: 'bouchon-JF723'
            },
            {
                id: 'bouchon-JF72311',
                text: 'Les métropoles et leurs habitants.',
                parent: 'bouchon-JF7231'
            },
            {
                id: 'bouchon-JF72312',
                text: 'La ville de demain.',
                parent: 'bouchon-JF7231'
            },
            {
                id: 'bouchon-JF7232',
                text: 'Thème 2 Habiter un espace de faible densité',
                parent: 'bouchon-JF723'
            },
            {
                id: 'bouchon-JF72321',
                text: 'Habiter un espace à forte(s) contrainte(s) naturelle(s) ou/et de grande biodiversité.',
                parent: 'bouchon-JF7232'
            },
            {
                id: 'bouchon-JF72322',
                text: 'Habiter un espace de faible densité à vocation agricole.',
                parent: 'bouchon-JF7232'
            },
            {
                id: 'bouchon-JF7233',
                text: 'Thème 3 Habiter les littoraux',
                parent: 'bouchon-JF723'
            },
            {
                id: 'bouchon-JF72331',
                text: 'Littoral industrialoportuaire, littoral touristique.',
                parent: 'bouchon-JF7233'
            },
            {
                id: 'bouchon-JF8',
                text: 'Sciences et Technologie',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF81',
                text: 'Matière, mouvement, énergie, information',
                parent: 'bouchon-JF8'
            },
            {
                id: 'bouchon-JF811',
                text: 'Décrire les états et la constitution de la matière à l’échelle macroscopique',
                parent: 'bouchon-JF81'
            },
            {
                id: 'bouchon-JF8111',
                text: 'Mettre en oeuvre des observations et des expériences pour caractériser un échantillon de matière.',
                parent: 'bouchon-JF811'
            },
            {
                id: 'bouchon-JF81111',
                text: 'Diversité de la matière : métaux, minéraux, verres, plastiques, matière organique sous différentes formes…',
                parent: 'bouchon-JF8111'
            },
            {
                id: 'bouchon-JF81112',
                text: 'L’état physique d’un échantillon de matière dépend de conditions externes, notamment de sa température.',
                parent: 'bouchon-JF8111'
            },
            {
                id: 'bouchon-JF81113',
                text: 'Quelques propriétés de la matière solide ou liquide (par exemple : densité, solubilité, élasticité…).',
                parent: 'bouchon-JF8111'
            },
            {
                id: 'bouchon-JF81114',
                text: 'La matière à grande échelle : Terre, planètes, Univers.',
                parent: 'bouchon-JF8111'
            },
            {
                id: 'bouchon-JF81115',
                text: 'La masse est une grandeur physique qui caractérise un échantillon de matière.',
                parent: 'bouchon-JF8111'
            },
            {
                id: 'bouchon-JF8112',
                text: 'Identifier à partir de ressources documentaires les différents constituants d’un mélange.',
                parent: 'bouchon-JF811'
            },
            {
                id: 'bouchon-JF8113',
                text: 'Mettre en oeuvre un protocole de séparation de constituants d’un mélange.',
                parent: 'bouchon-JF811'
            },
            {
                id: 'bouchon-JF81131',
                text: 'Réaliser des mélanges peut provoquer des transformations de la matière (dissolution, réaction).',
                parent: 'bouchon-JF8113'
            },
            {
                id: 'bouchon-JF81132',
                text: 'La matière qui nous entoure (à l’état solide, liquide ou gazeux), résultat d’un mélange de différents constituants.',
                parent: 'bouchon-JF8113'
            },
            {
                id: 'bouchon-JF812',
                text: 'Observer et décrire différents types de mouvements',
                parent: 'bouchon-JF81'
            },
            {
                id: 'bouchon-JF8121',
                text: 'Décrire un mouvement et identifier les différences entre mouvements circulaire ou rectiligne.',
                parent: 'bouchon-JF812'
            },
            {
                id: 'bouchon-JF81211',
                text: 'Mouvement d’un objet (trajectoire et vitesse : unités et ordres de grandeur).',
                parent: 'bouchon-JF8121'
            },
            {
                id: 'bouchon-JF81212',
                text: 'Exemples de mouvements simples : rectiligne, circulaire.',
                parent: 'bouchon-JF8121'
            },
            {
                id: 'bouchon-JF8122',
                text: 'Élaborer et mettre en oeuvre un protocole pour appréhender la notion de mouvement et de mesure de la valeur de la vitesse d’un objet.',
                parent: 'bouchon-JF812'
            },
            {
                id: 'bouchon-JF81221',
                text: 'Mouvements dont la valeur de la vitesse (module) est constante ou variable (accélération, décélération) dans un mouvement rectiligne.',
                parent: 'bouchon-JF8122'
            },
            {
                id: 'bouchon-JF813',
                text: 'Identifier différentes sources et connaitre quelques conversions d’énergie',
                parent: 'bouchon-JF81'
            },
            {
                id: 'bouchon-JF8131',
                text: 'Identifier des sources d’énergie et des formes.',
                parent: 'bouchon-JF813'
            },
            {
                id: 'bouchon-JF81311',
                text: 'L’énergie existe sous différentes formes (énergie associée à un objet en mouvement, énergie thermique, électrique…).',
                parent: 'bouchon-JF8131'
            },
            {
                id: 'bouchon-JF8132',
                text: 'Prendre conscience que l’être humain a besoin d’énergie pour vivre, se chauffer, se déplacer, s’éclairer…',
                parent: 'bouchon-JF813'
            },
            {
                id: 'bouchon-JF8133',
                text: 'Reconnaitre les situations où l’énergie est stockée, transformée, utilisée. La fabrication et le fonctionnement d’un objet technique nécessitent de l’énergie.',
                parent: 'bouchon-JF813'
            },
            {
                id: 'bouchon-JF81331',
                text: 'Exemples de sources d’énergie utilisées par les êtres humains : charbon, pétrole, bois, uranium, aliments, vent, Soleil, eau et barrage, pile…',
                parent: 'bouchon-JF8133'
            },
            {
                id: 'bouchon-JF81332',
                text: 'Notion d’énergie renouvelable.',
                parent: 'bouchon-JF8133'
            },
            {
                id: 'bouchon-JF81333',
                text: 'Identifier quelques éléments d’une chaine d’énergie domestique simple.',
                parent: 'bouchon-JF8133'
            },
            {
                id: 'bouchon-JF81334',
                text: 'Quelques dispositifs visant à économiser la consommation d’énergie.',
                parent: 'bouchon-JF8133'
            },
            {
                id: 'bouchon-JF814',
                text: 'Identifier un signal et une information',
                parent: 'bouchon-JF81'
            },
            {
                id: 'bouchon-JF8141',
                text: 'Identifier différentes formes de signaux (sonores, lumineux, radio…).',
                parent: 'bouchon-JF814'
            },
            {
                id: 'bouchon-JF81411',
                text: 'Nature d’un signal, nature d’une information, dans une application simple de la vie courante.',
                parent: 'bouchon-JF8141'
            },
            {
                id: 'bouchon-JF82',
                text: 'Le vivant, sa diversité et les fonctions qui le caractérisent',
                parent: 'bouchon-JF8'
            },
            {
                id: 'bouchon-JF821',
                text: 'Classer les organismes, exploiter les liens de parenté pour comprendre et expliquer l’évolution des organismes',
                parent: 'bouchon-JF82'
            },
            {
                id: 'bouchon-JF8211',
                text: 'Reconnaitre une cellule',
                parent: 'bouchon-JF821'
            },
            {
                id: 'bouchon-JF82111',
                text: 'La cellule, unité structurelle du vivant',
                parent: 'bouchon-JF8211'
            },
            {
                id: 'bouchon-JF8212',
                text: 'Utiliser différents critères pour classer les êtres vivants ; identifier des liens de parenté entre des organismes.',
                parent: 'bouchon-JF821'
            },
            {
                id: 'bouchon-JF8213',
                text: 'Identifier les changements des peuplements de la Terre au cours du temps.',
                parent: 'bouchon-JF821'
            },
            {
                id: 'bouchon-JF82131',
                text: 'Diversités actuelle et passée des espèces.',
                parent: 'bouchon-JF8213'
            },
            {
                id: 'bouchon-JF82132',
                text: 'Évolution des espèces vivantes.',
                parent: 'bouchon-JF8213'
            },
            {
                id: 'bouchon-JF822',
                text: 'Expliquer les besoins variables en aliments de l’être humain ; l’origine et les techniques mises en oeuvre pour transformer et conserver les aliments',
                parent: 'bouchon-JF82'
            },
            {
                id: 'bouchon-JF8221',
                text: 'Établir une relation entre l’activité, l’âge, les conditions de l’environnement et les besoins de l’organisme.',
                parent: 'bouchon-JF822'
            },
            {
                id: 'bouchon-JF82211',
                text: 'Apports alimentaires : qualité et quantité.',
                parent: 'bouchon-JF8221'
            },
            {
                id: 'bouchon-JF82212',
                text: 'Origine des aliments consommés : un exemple d’élevage, un exemple de culture',
                parent: 'bouchon-JF8221'
            },
            {
                id: 'bouchon-JF8222',
                text: 'Relier l’approvisionnement des organes aux fonctions de nutrition.',
                parent: 'bouchon-JF822'
            },
            {
                id: 'bouchon-JF82221',
                text: 'Apports discontinus (repas) et besoins continus',
                parent: 'bouchon-JF8222'
            },
            {
                id: 'bouchon-JF8223',
                text: 'Mettre en évidence la place des microorganismes dans la production et la conservation des aliments.',
                parent: 'bouchon-JF822'
            },
            {
                id: 'bouchon-JF8224',
                text: 'Mettre en relation les paramètres physicochimiques lors de la conservation des aliments et la limitation de la prolifération de microorganismes pathogènes.',
                parent: 'bouchon-JF822'
            },
            {
                id: 'bouchon-JF82241',
                text: 'Quelques techniques permettant d’éviter la prolifération des microorganismes.',
                parent: 'bouchon-JF8224'
            },
            {
                id: 'bouchon-JF82242',
                text: 'Hygiène alimentaire.',
                parent: 'bouchon-JF8224'
            },
            {
                id: 'bouchon-JF823',
                text: 'Décrire comment les êtres vivants se développent et deviennent aptes à se reproduire',
                parent: 'bouchon-JF82'
            },
            {
                id: 'bouchon-JF8231',
                text: 'Identifier et caractériser les modifications subies par un organisme vivant (naissance, croissance, capacité à se reproduire, vieillissement, mort) au cours de sa vie.',
                parent: 'bouchon-JF823'
            },
            {
                id: 'bouchon-JF82311',
                text: 'Modifications de l’organisation et du fonctionnement d’une plante ou d’un animal au cours du temps, en lien avec sa nutrition et sa reproduction.',
                parent: 'bouchon-JF8231'
            },
            {
                id: 'bouchon-JF82312',
                text: 'Différences morphologiques homme, femme, garçon, fille.',
                parent: 'bouchon-JF8231'
            },
            {
                id: 'bouchon-JF82313',
                text: 'Stades de développement (grainesgermination- fleur-pollinisation, oeuf-larveadulte, oeuf-foetus-bébé-jeune-adulte).',
                parent: 'bouchon-JF8231'
            },
            {
                id: 'bouchon-JF8232',
                text: 'Décrire et identifier les changements du corps au moment de la puberté.',
                parent: 'bouchon-JF823'
            },
            {
                id: 'bouchon-JF82321',
                text: 'Modifications morphologiques, comportementales et physiologiques lors de la puberté.',
                parent: 'bouchon-JF8232'
            },
            {
                id: 'bouchon-JF82322',
                text: 'Rôle respectif des deux sexes dans la reproduction.',
                parent: 'bouchon-JF8232'
            },
            {
                id: 'bouchon-JF824',
                text: 'Expliquer l’origine de la matière organique des êtres vivants et son devenir',
                parent: 'bouchon-JF82'
            },
            {
                id: 'bouchon-JF8241',
                text: 'Relier les besoins des plantes vertes et leur place particulière dans les réseaux trophiques.',
                parent: 'bouchon-JF824'
            },
            {
                id: 'bouchon-JF82411',
                text: 'Besoins des plantes vertes.',
                parent: 'bouchon-JF8241'
            },
            {
                id: 'bouchon-JF8242',
                text: 'Identifier les matières échangées entre un être vivant et son milieu de vie.',
                parent: 'bouchon-JF824'
            },
            {
                id: 'bouchon-JF82421',
                text: 'Besoins alimentaires des animaux.',
                parent: 'bouchon-JF8242'
            },
            {
                id: 'bouchon-JF82422',
                text: 'Devenir de la matière organique n’appartenant plus à un organisme vivant.',
                parent: 'bouchon-JF8242'
            },
            {
                id: 'bouchon-JF82423',
                text: 'Décomposeurs.',
                parent: 'bouchon-JF8242'
            },
            {
                id: 'bouchon-JF83',
                text: 'Matériaux et objets techniques',
                parent: 'bouchon-JF8'
            },
            {
                id: 'bouchon-JF831',
                text: 'Identifier les principales évolutions du besoin et des objets.',
                parent: 'bouchon-JF83'
            },
            {
                id: 'bouchon-JF8311',
                text: 'Repérer les évolutions d’un objet dans différents contextes (historique, économique, culturel).',
                parent: 'bouchon-JF831'
            },
            {
                id: 'bouchon-JF83111',
                text: 'L’évolution technologique (innovation, invention, principe technique).',
                parent: 'bouchon-JF8311'
            },
            {
                id: 'bouchon-JF83112',
                text: 'L’évolution des besoins.',
                parent: 'bouchon-JF8311'
            },
            {
                id: 'bouchon-JF832',
                text: 'Décrire le fonctionnement d’objets techniques, leurs fonctions et leurs constitutions',
                parent: 'bouchon-JF83'
            },
            {
                id: 'bouchon-JF8321',
                text: 'Besoin, fonction d’usage et d’estime.',
                parent: 'bouchon-JF832'
            },
            {
                id: 'bouchon-JF8322',
                text: 'Fonction technique, solutions techniques.',
                parent: 'bouchon-JF832'
            },
            {
                id: 'bouchon-JF8323',
                text: 'Représentation du fonctionnement d’un objet technique.',
                parent: 'bouchon-JF832'
            },
            {
                id: 'bouchon-JF8324',
                text: 'Comparaison de solutions techniques : constitutions, fonctions, organes.',
                parent: 'bouchon-JF832'
            },
            {
                id: 'bouchon-JF833',
                text: 'Identifier les principales familles de matériaux',
                parent: 'bouchon-JF83'
            },
            {
                id: 'bouchon-JF8331',
                text: 'Familles de matériaux (distinction des matériaux selon les relations entre formes, fonctions et procédés).',
                parent: 'bouchon-JF833'
            },
            {
                id: 'bouchon-JF8332',
                text: 'Caractéristiques et propriétés (aptitude au façonnage, valorisation).',
                parent: 'bouchon-JF833'
            },
            {
                id: 'bouchon-JF8333',
                text: 'Impact environnemental.',
                parent: 'bouchon-JF833'
            },
            {
                id: 'bouchon-JF834',
                text: 'Concevoir et produire tout ou partie d’un objet technique en équipe pour traduire une solution technologique répondant à un besoin.',
                parent: 'bouchon-JF83'
            },
            {
                id: 'bouchon-JF8341',
                text: 'Notion de contrainte.',
                parent: 'bouchon-JF834'
            },
            {
                id: 'bouchon-JF8342',
                text: 'Recherche d’idées (schémas, croquis…).',
                parent: 'bouchon-JF834'
            },
            {
                id: 'bouchon-JF8343',
                text: 'Modélisation du réel (maquette, modèles géométrique et numérique), représentation en conception assistée par ordinateur.',
                parent: 'bouchon-JF834'
            },
            {
                id: 'bouchon-JF8344',
                text: 'Processus, planning, protocoles, procédés de réalisation (outils, machines).',
                parent: 'bouchon-JF834'
            },
            {
                id: 'bouchon-JF8345',
                text: 'Choix de matériaux.',
                parent: 'bouchon-JF834'
            },
            {
                id: 'bouchon-JF8346',
                text: 'Maquette, prototype.',
                parent: 'bouchon-JF834'
            },
            {
                id: 'bouchon-JF8347',
                text: 'Vérification et contrôles (dimensions, fonctionnement).',
                parent: 'bouchon-JF834'
            },
            {
                id: 'bouchon-JF835',
                text: 'Repérer et comprendre la communication et la gestion de l’information',
                parent: 'bouchon-JF83'
            },
            {
                id: 'bouchon-JF8351',
                text: 'Environnement numérique de travail.',
                parent: 'bouchon-JF835'
            },
            {
                id: 'bouchon-JF8352',
                text: 'Le stockage des données, notions d’algorithmes, les objets programmables.',
                parent: 'bouchon-JF835'
            },
            {
                id: 'bouchon-JF8353',
                text: 'Usage des moyens numériques dans un réseau.',
                parent: 'bouchon-JF835'
            },
            {
                id: 'bouchon-JF8354',
                text: 'Usage de logiciels usuels.',
                parent: 'bouchon-JF835'
            },
            {
                id: 'bouchon-JF84',
                text: 'La planète Terre. Les êtres vivants dans leur environnement',
                parent: 'bouchon-JF8'
            },
            {
                id: 'bouchon-JF841',
                text: 'Situer la Terre dans le système solaire et caractériser les conditions de la vie terrestre',
                parent: 'bouchon-JF84'
            },
            {
                id: 'bouchon-JF8411',
                text: 'Caractériser les conditions de vie sur Terre (température, présence d’eau liquide).',
                parent: 'bouchon-JF841'
            },
            {
                id: 'bouchon-JF84111',
                text: 'Le Soleil, les planètes.',
                parent: 'bouchon-JF8411'
            },
            {
                id: 'bouchon-JF84112',
                text: 'Position de la Terre dans le système solaire.',
                parent: 'bouchon-JF8411'
            },
            {
                id: 'bouchon-JF84113',
                text: 'Histoire de la Terre et développement de la vie.',
                parent: 'bouchon-JF8411'
            },
            {
                id: 'bouchon-JF8412',
                text: 'Décrire les mouvements de la Terre (rotation sur elle-même et alternance jour-nuit, autour du Soleil et cycle des saisons).',
                parent: 'bouchon-JF841'
            },
            {
                id: 'bouchon-JF84121',
                text: 'Les mouvements de la Terre sur elle-même et autour du Soleil.',
                parent: 'bouchon-JF8412'
            },
            {
                id: 'bouchon-JF84122',
                text: 'Représentations géométriques de l’espace et des astres (cercle, sphère).',
                parent: 'bouchon-JF8412'
            },
            {
                id: 'bouchon-JF8413',
                text: 'Identifier les composantes biologiques et géologiques d’un paysage.',
                parent: 'bouchon-JF841'
            },
            {
                id: 'bouchon-JF84131',
                text: 'Paysages, géologie locale, interactions avec l’environnement et le peuplement.',
                parent: 'bouchon-JF8413'
            },
            {
                id: 'bouchon-JF8414',
                text: 'Relier certains phénomènes naturels (tempêtes, inondations, tremblements de terre) à des risques pour les populations.',
                parent: 'bouchon-JF841'
            },
            {
                id: 'bouchon-JF84141',
                text: 'Phénomènes géologiques traduisant activité interne de la terre (volcanisme, tremblements de terre…).',
                parent: 'bouchon-JF8414'
            },
            {
                id: 'bouchon-JF84142',
                text: 'Phénomènes traduisant l’activité externe de la Terre : phénomènes météorologiques et climatiques ; évènements extrêmes (tempêtes, cyclones, inondations et sècheresses…).',
                parent: 'bouchon-JF8414'
            },
            {
                id: 'bouchon-JF842',
                text: 'Identifier des enjeux liés à l’environnement',
                parent: 'bouchon-JF84'
            },
            {
                id: 'bouchon-JF8421',
                text: 'Décrire un milieu de vie dans ses diverses composantes.',
                parent: 'bouchon-JF842'
            },
            {
                id: 'bouchon-JF84211',
                text: 'Interactions des organismes vivants entre eux et avec leur environnement.',
                parent: 'bouchon-JF8421'
            },
            {
                id: 'bouchon-JF8422',
                text: 'Relier le peuplement d’un milieu et les conditions de vie.',
                parent: 'bouchon-JF842'
            },
            {
                id: 'bouchon-JF84221',
                text: 'Modification du peuplement en fonction des conditions physicochimiques du milieu et des saisons.',
                parent: 'bouchon-JF8422'
            },
            {
                id: 'bouchon-JF84222',
                text: 'Écosystèmes (milieu de vie avec ses caractéristiques et son peuplement) ; conséquences de la modification d’un facteur physique ou biologique sur l’écosystème.',
                parent: 'bouchon-JF8422'
            },
            {
                id: 'bouchon-JF84223',
                text: 'La biodiversité, un réseau dynamique.',
                parent: 'bouchon-JF8422'
            },
            {
                id: 'bouchon-JF8423',
                text: 'Identifier la nature des interactions entre les êtres vivants et leur importance dans le peuplement des milieux.',
                parent: 'bouchon-JF842'
            },
            {
                id: 'bouchon-JF8424',
                text: 'Identifier quelques impacts humains dans un environnement (aménagement, impact technologique...).',
                parent: 'bouchon-JF842'
            },
            {
                id: 'bouchon-JF84241',
                text: 'Aménagements de de l’espace par les humains et contraintes naturelles ; impacts technologiques positifs et négatifs sur l’environnement.',
                parent: 'bouchon-JF8424'
            },
            {
                id: 'bouchon-JF8425',
                text: 'Suivre et décrire le devenir de quelques matériaux de l’environnement proche.',
                parent: 'bouchon-JF842'
            },
            {
                id: 'bouchon-JF8426',
                text: 'Relier les besoins de l’être humain, l’exploitation des ressources naturelles et les impacts à prévoir et gérer (risques, rejets, valorisations, épuisement des stocks).',
                parent: 'bouchon-JF842'
            },
            {
                id: 'bouchon-JF8427',
                text: 'Exploitation raisonnée et utilisation des ressources (eau, pétrole, charbon, minerais, biodiversité, sols, bois, roches à des fins de construction…).',
                parent: 'bouchon-JF842'
            },
            {
                id: 'bouchon-JF9',
                text: 'Mathématiques',
                parent: 'bouchon-niveau2'
            },
            {
                id: 'bouchon-JF91',
                text: 'Nombres et calculs',
                parent: 'bouchon-JF9'
            },
            {
                id: 'bouchon-JF911',
                text: 'Utiliser et représenter les grands nombres entiers, des fractions simples, les nombres décimaux',
                parent: 'bouchon-JF91'
            },
            {
                id: 'bouchon-JF9111',
                text: 'Composer, décomposer les grands nombres entiers, en utilisant des regroupements par milliers.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF91111',
                text: 'Unités de numération (unités simples, dizaines, centaines, milliers, millions, milliards) et leurs relations.',
                parent: 'bouchon-JF9111'
            },
            {
                id: 'bouchon-JF9112',
                text: 'Comprendre et appliquer les règles de la numération aux grands nombres (jusqu’à 12 chiffres).',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF9113',
                text: 'Comparer, ranger, encadrer des grands nombres entiers, les repérer et les placer sur une demidroite graduée adaptée.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF9114',
                text: 'Comprendre et utiliser la notion de fractions simples.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF91141',
                text: 'Écritures fractionnaires.',
                parent: 'bouchon-JF9114'
            },
            {
                id: 'bouchon-JF91142',
                text: 'Diverses désignations des fractions (orales, écrites et décompositions).',
                parent: 'bouchon-JF9114'
            },
            {
                id: 'bouchon-JF9115',
                text: 'Repérer et placer des fractions sur une demidroite graduée adaptée.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF91151',
                text: 'Une première extension de la relation d’ordre.',
                parent: 'bouchon-JF9115'
            },
            {
                id: 'bouchon-JF9116',
                text: 'Encadrer une fraction par deux nombres entiers consécutifs.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF9117',
                text: 'Établir des égalités entre des fractions simples.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF9118',
                text: 'Comprendre et utiliser la notion de nombre décimal.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF91181',
                text: 'Spécificités des nombres décimaux.',
                parent: 'bouchon-JF9118'
            },
            {
                id: 'bouchon-JF9119',
                text: 'Associer diverses désignations d’un nombre décimal (fractions décimales, écritures à virgule et décompositions).',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF91191',
                text: 'Règles et fonctionnement des systèmes de numération dans le champ des nombres décimaux, relations entre unités de numération (point de vue décimal), valeurs des chiffres en fonction de leur rang dans l’écriture à virgule d’un nombre décimal (point de vue positionnel).',
                parent: 'bouchon-JF9119'
            },
            {
                id: 'bouchon-JF911A',
                text: 'Repérer et placer des décimaux sur une demidroite graduée adaptée.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF911B',
                text: 'Comparer, ranger, encadrer, intercaler des nombres décimaux.',
                parent: 'bouchon-JF911'
            },
            {
                id: 'bouchon-JF911B1',
                text: 'Ordre sur les nombres décimaux.',
                parent: 'bouchon-JF911B'
            },
            {
                id: 'bouchon-JF912',
                text: 'Calculer avec des nombres entiers et des nombres décimaux',
                parent: 'bouchon-JF91'
            },
            {
                id: 'bouchon-JF9121',
                text: 'Mémoriser des faits numériques et des procédures élémentaires de calcul.',
                parent: 'bouchon-JF912'
            },
            {
                id: 'bouchon-JF9122',
                text: 'Élaborer ou choisir des stratégies de calcul à l’oral et à l’écrit.',
                parent: 'bouchon-JF912'
            },
            {
                id: 'bouchon-JF9123',
                text: 'Vérifier la vraisemblance d’un résultat, notamment en estimant son ordre de grandeur.',
                parent: 'bouchon-JF912'
            },
            {
                id: 'bouchon-JF91231',
                text: 'Addition, soustraction, multiplication, division.',
                parent: 'bouchon-JF9123'
            },
            {
                id: 'bouchon-JF91232',
                text: 'Propriétés des opérations :',
                parent: 'bouchon-JF9123'
            },
            {
                id: 'bouchon-JF912321',
                text: '2+9 = 9+2',
                parent: 'bouchon-JF91232'
            },
            {
                id: 'bouchon-JF912322',
                text: '3×5×2 = 3×10',
                parent: 'bouchon-JF91232'
            },
            {
                id: 'bouchon-JF912323',
                text: '5×12 = 5×10 + 5×2',
                parent: 'bouchon-JF91232'
            },
            {
                id: 'bouchon-JF91233',
                text: 'Faits et procédures numériques additifs et multiplicatifs.',
                parent: 'bouchon-JF9123'
            },
            {
                id: 'bouchon-JF91234',
                text: 'Multiples et diviseurs des nombres d’usage courant.',
                parent: 'bouchon-JF9123'
            },
            {
                id: 'bouchon-JF91235',
                text: 'Critères de divisibilité (2, 3, 4, 5, 9, 10).',
                parent: 'bouchon-JF9123'
            },
            {
                id: 'bouchon-JF9124',
                text: 'Calcul mental : calculer mentalement pour obtenir un résultat exact ou évaluer un ordre de grandeur.',
                parent: 'bouchon-JF912'
            },
            {
                id: 'bouchon-JF9125',
                text: 'Calcul en ligne : utiliser des parenthèses dans des situations très simples.',
                parent: 'bouchon-JF912'
            },
            {
                id: 'bouchon-JF91251',
                text: 'Règles d’usage des parenthèses.',
                parent: 'bouchon-JF9125'
            },
            {
                id: 'bouchon-JF9126',
                text: 'Calcul posé : mettre en oeuvre un algorithme de calcul posé pour l’addition, la soustraction, la multiplication, la division.',
                parent: 'bouchon-JF912'
            },
            {
                id: 'bouchon-JF91261',
                text: 'Techniques opératoires de calcul (dans le cas de la division, on se limite à diviser par un entier).',
                parent: 'bouchon-JF9126'
            },
            {
                id: 'bouchon-JF9127',
                text: 'Calcul instrumenté : utiliser une calculatrice pour trouver ou vérifier un résultat.',
                parent: 'bouchon-JF912'
            },
            {
                id: 'bouchon-JF91271',
                text: 'Fonctions de base d’une calculatrice.',
                parent: 'bouchon-JF9127'
            },
            {
                id: 'bouchon-JF913',
                text: 'Résoudre des problèmes en utilisant des fractions simples, les nombres décimaux et le calcul',
                parent: 'bouchon-JF91'
            },
            {
                id: 'bouchon-JF9131',
                text: 'Résoudre des problèmes mettant en jeu les quatre opérations.',
                parent: 'bouchon-JF913'
            },
            {
                id: 'bouchon-JF91311',
                text: 'Sens des opérations.',
                parent: 'bouchon-JF9131'
            },
            {
                id: 'bouchon-JF91312',
                text: 'Problèmes relevant :',
                parent: 'bouchon-JF9131'
            },
            {
                id: 'bouchon-JF913121',
                text: 'des structures additives ;',
                parent: 'bouchon-JF91312'
            },
            {
                id: 'bouchon-JF913122',
                text: 'des structures multiplicatives.',
                parent: 'bouchon-JF91312'
            },
            {
                id: 'bouchon-JF9132',
                text: 'Organisation et gestion de données',
                parent: 'bouchon-JF913'
            },
            {
                id: 'bouchon-JF9133',
                text: 'Prélever des données numériques à partir de supports variés. Produire des tableaux, diagrammes et graphiques organisant des données numériques.',
                parent: 'bouchon-JF913'
            },
            {
                id: 'bouchon-JF9134',
                text: 'Exploiter et communiquer des résultats de mesures.',
                parent: 'bouchon-JF913'
            },
            {
                id: 'bouchon-JF91341',
                text: 'Représentations usuelles :',
                parent: 'bouchon-JF9134'
            },
            {
                id: 'bouchon-JF913411',
                text: 'tableaux (en deux ou plusieurs colonnes, à double entrée) ;',
                parent: 'bouchon-JF91341'
            },
            {
                id: 'bouchon-JF913412',
                text: 'diagrammes en bâtons, circulaires ou semicirculaires',
                parent: 'bouchon-JF91341'
            },
            {
                id: 'bouchon-JF913413',
                text: 'graphiques cartésiens.',
                parent: 'bouchon-JF91341'
            },
            {
                id: 'bouchon-JF9135',
                text: 'Proportionnalité',
                parent: 'bouchon-JF913'
            },
            {
                id: 'bouchon-JF91351',
                text: 'Reconnaitre et résoudre des problèmes relevant de la proportionnalité en utilisant une procédure adaptée.',
                parent: 'bouchon-JF9135'
            },
            {
                id: 'bouchon-JF92',
                text: 'Grandeurs et mesures',
                parent: 'bouchon-JF9'
            },
            {
                id: 'bouchon-JF921',
                text: 'Comparer, estimer, mesurer des grandeurs géométriques avec des nombres entiers et des nombres décimaux : longueur (périmètre), aire, volume, angle. Utiliser le lexique, les unités, les instruments de mesures spécifiques de ces grandeurs.',
                parent: 'bouchon-JF92'
            },
            {
                id: 'bouchon-JF9211',
                text: 'Comparer des périmètres avec ou sans recours à la mesure.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF9212',
                text: 'Mesurer des périmètres en reportant des unités et des fractions d’unités, ou en utilisant une formule.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF92121',
                text: 'Notion de longueur : cas particulier du périmètre.',
                parent: 'bouchon-JF9212'
            },
            {
                id: 'bouchon-JF92122',
                text: 'Formule du périmètre d’un carré, d’un rectangle.',
                parent: 'bouchon-JF9212'
            },
            {
                id: 'bouchon-JF92123',
                text: 'Formule de la longueur d’un cercle.',
                parent: 'bouchon-JF9212'
            },
            {
                id: 'bouchon-JF92124',
                text: 'Unités relatives aux longueurs : relations entre les unités de longueur et les unités de numération (grands nombres, nombres décimaux).',
                parent: 'bouchon-JF9212'
            },
            {
                id: 'bouchon-JF9213',
                text: 'Comparer, classer et ranger des surfaces selon leurs aires sans avoir recours à la mesure.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF9214',
                text: 'Différencier aire et périmètre d’une surface.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF9215',
                text: 'Déterminer la mesure de l’aire d’une surface à partir d’un pavage simple ou en utilisant une formule.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF9216',
                text: 'Estimer la mesure d’une aire par différentes procédures.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF92161',
                text: 'Unités usuelles d’aire : multiples et sousmultiples du m² et leurs relations, are et hectare.',
                parent: 'bouchon-JF9216'
            },
            {
                id: 'bouchon-JF92162',
                text: 'Formules de l’aire d’un carré, d’un rectangle, d’un triangle, d’un disque.',
                parent: 'bouchon-JF9216'
            },
            {
                id: 'bouchon-JF9217',
                text: 'Relier les unités de volume et de contenance.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF9218',
                text: 'Estimer la mesure d’un volume par différentes procédures.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF92181',
                text: 'Unités usuelles de contenance (multiples et sous multiples du litre).',
                parent: 'bouchon-JF9218'
            },
            {
                id: 'bouchon-JF92182',
                text: 'Unités usuelles de volume (cm3, dm3, m3), relations entre les unités.',
                parent: 'bouchon-JF9218'
            },
            {
                id: 'bouchon-JF9219',
                text: 'Déterminer le volume d’un pavé droit en se rapportant à un dénombrement d’unités ou en utilisant une formule.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF92191',
                text: 'Formule du volume d’un cube, d’un pavé droit.',
                parent: 'bouchon-JF9219'
            },
            {
                id: 'bouchon-JF921A',
                text: 'Identifier des angles dans une figure géométrique.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF921B',
                text: 'Comparer des angles.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF921C',
                text: 'Reproduire un angle donné en utilisant un gabarit.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF921D',
                text: 'Reconnaitre qu’un angle est droit, aigu ou obtus.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF921E',
                text: 'Estimer la mesure d’un angle.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF921F',
                text: 'Estimer et vérifier qu’un angle est droit, aigu ou obtus.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF921G',
                text: 'Utiliser un instrument de mesure (le rapporteur) et une unité de mesure (le degré) pour : déterminer la mesure en degré d’un angle ; construire un angle de mesure donnée en degrés.',
                parent: 'bouchon-JF921'
            },
            {
                id: 'bouchon-JF921G1',
                text: 'Notion d’angle.',
                parent: 'bouchon-JF921G'
            },
            {
                id: 'bouchon-JF921G2',
                text: 'Lexique associé aux angles : angle droit, aigu, obtus.',
                parent: 'bouchon-JF921G'
            },
            {
                id: 'bouchon-JF921G3',
                text: 'Mesure en degré d’un angle.',
                parent: 'bouchon-JF921G'
            },
            {
                id: 'bouchon-JF922',
                text: 'Résoudre des problèmes impliquant des grandeurs (géométriques, physiques, économiques) en utilisant des nombres entiers et des nombres décimaux',
                parent: 'bouchon-JF92'
            },
            {
                id: 'bouchon-JF9221',
                text: 'Résoudre des problèmes de comparaison avec et sans recours à la mesure.',
                parent: 'bouchon-JF922'
            },
            {
                id: 'bouchon-JF9222',
                text: 'Résoudre des problèmes dont la résolution mobilise simultanément des unités différentes de mesure et/ou des conversions.',
                parent: 'bouchon-JF922'
            },
            {
                id: 'bouchon-JF9223',
                text: 'Calculer des périmètres, des aires ou des volumes, en mobilisant ou non, selon les cas, des formules.',
                parent: 'bouchon-JF922'
            },
            {
                id: 'bouchon-JF92231',
                text: 'Formules donnant',
                parent: 'bouchon-JF9223'
            },
            {
                id: 'bouchon-JF92232',
                text: 'le périmètre d’un carré, d’un rectangle ;',
                parent: 'bouchon-JF9223'
            },
            {
                id: 'bouchon-JF92233',
                text: 'la longueur d’un cercle ;',
                parent: 'bouchon-JF9223'
            },
            {
                id: 'bouchon-JF92234',
                text: 'l’aire d’un carré, d’un rectangle, d’un triangle, d’un disque ;',
                parent: 'bouchon-JF9223'
            },
            {
                id: 'bouchon-JF92235',
                text: 'le volume d’un cube, d’un pavé droit.',
                parent: 'bouchon-JF9223'
            },
            {
                id: 'bouchon-JF9224',
                text: 'Calculer la durée écoulée entre deux instants donnés.',
                parent: 'bouchon-JF922'
            },
            {
                id: 'bouchon-JF9225',
                text: 'Déterminer un instant à partir de la connaissance d’un instant et d’une durée.',
                parent: 'bouchon-JF922'
            },
            {
                id: 'bouchon-JF92251',
                text: 'Unités de mesures usuelles: jour, semaine, heure, minute, seconde, dixième de seconde, mois, année, siècle, millénaire.',
                parent: 'bouchon-JF9225'
            },
            {
                id: 'bouchon-JF9226',
                text: 'Proportionnalité',
                parent: 'bouchon-JF922'
            },
            {
                id: 'bouchon-JF92261',
                text: 'Identifier une situation de proportionnalité entre deux grandeurs.',
                parent: 'bouchon-JF9226'
            },
            {
                id: 'bouchon-JF922611',
                text: 'Graphiques représentant des variations entre deux grandeurs.',
                parent: 'bouchon-JF92261'
            },
            {
                id: 'bouchon-JF93',
                text: 'Espace et géométrie',
                parent: 'bouchon-JF9'
            },
            {
                id: 'bouchon-JF931',
                text: '(Se) repérer et (se) déplacer dans l’espace en utilisant ou en élaborant des représentations',
                parent: 'bouchon-JF93'
            },
            {
                id: 'bouchon-JF9311',
                text: 'Se repérer, décrire ou exécuter des déplacements, sur un plan ou sur une carte.',
                parent: 'bouchon-JF931'
            },
            {
                id: 'bouchon-JF9312',
                text: 'Accomplir, décrire, coder des déplacements dans des espaces familiers.',
                parent: 'bouchon-JF931'
            },
            {
                id: 'bouchon-JF9313',
                text: 'Programmer les déplacements d’un robot ou ceux d’un personnage sur un écran.',
                parent: 'bouchon-JF931'
            },
            {
                id: 'bouchon-JF93131',
                text: 'Vocabulaire permettant de définir des positions et des déplacements.',
                parent: 'bouchon-JF9313'
            },
            {
                id: 'bouchon-JF93132',
                text: 'Divers modes de représentation de l’espace.',
                parent: 'bouchon-JF9313'
            },
            {
                id: 'bouchon-JF932',
                text: 'Reconnaitre, nommer, décrire, reproduire, représenter, construire quelques solides et figures géométriques',
                parent: 'bouchon-JF931'
            },
            {
                id: 'bouchon-JF9321',
                text: 'Reconnaitre, nommer, comparer, vérifier, décrire : - des figures simples ou complexes (assemblages de figures simples) ; - des solides simples ou des assemblages de solides simples à partir de certaines de leurs propriétés.',
                parent: 'bouchon-JF932'
            },
            {
                id: 'bouchon-JF93211',
                text: 'Figures planes et solides, premières caractérisations :',
                parent: 'bouchon-JF9321'
            },
            {
                id: 'bouchon-JF932111',
                text: 'triangles dont les triangles particuliers (triangle rectangle, triangle isocèle, triangle équilatéral) ;',
                parent: 'bouchon-JF93211'
            },
            {
                id: 'bouchon-JF932112',
                text: 'quadrilatères dont les quadrilatères particuliers (carré, rectangle, losange, première approche du parallélogramme) ;',
                parent: 'bouchon-JF93211'
            },
            {
                id: 'bouchon-JF932113',
                text: 'cercle (comme ensemble des points situés à une distance donnée d’un point donné).',
                parent: 'bouchon-JF93211'
            },
            {
                id: 'bouchon-JF93212',
                text: 'Vocabulaire approprié pour nommer les solides : pavé droit, cube, prisme droit, pyramide régulière, cylindre, cône, boule.',
                parent: 'bouchon-JF9321'
            },
            {
                id: 'bouchon-JF9322',
                text: 'Reproduire, représenter, construire :',
                parent: 'bouchon-JF932'
            },
            {
                id: 'bouchon-JF93221',
                text: 'des figures simples ou complexes (assemblages de figures simples)',
                parent: 'bouchon-JF9322'
            },
            {
                id: 'bouchon-JF93222',
                text: 'des solides simples ou des assemblages de solides simples sous forme de maquettes ou de dessins ou à partir d’un patron (donné, dans le cas d’un prisme ou d’une pyramide, ou à construire dans le cas d’un pavé droit).',
                parent: 'bouchon-JF9322'
            },
            {
                id: 'bouchon-JF9323',
                text: 'Réaliser, compléter et rédiger un programme de construction.',
                parent: 'bouchon-JF932'
            },
            {
                id: 'bouchon-JF9324',
                text: 'Réaliser une figure simple ou une figure composée de figures simples à l’aide d’un logiciel.',
                parent: 'bouchon-JF932'
            },
            {
                id: 'bouchon-JF933',
                text: 'Reconnaitre et utiliser quelques relations géométriques',
                parent: 'bouchon-JF93'
            },
            {
                id: 'bouchon-JF9331',
                text: 'Effectuer des tracés correspondant à des relations de perpendicularité ou de parallélisme de droites et de segments.',
                parent: 'bouchon-JF933'
            },
            {
                id: 'bouchon-JF9332',
                text: 'Déterminer le plus court chemin entre deux points (en lien avec la notion d’alignement).',
                parent: 'bouchon-JF933'
            },
            {
                id: 'bouchon-JF9333',
                text: 'Déterminer le plus court chemin entre un point et une droite ou entre deux droites parallèles (en lien avec la perpendicularité).',
                parent: 'bouchon-JF933'
            },
            {
                id: 'bouchon-JF93331',
                text: 'Alignement, appartenance.',
                parent: 'bouchon-JF9333'
            },
            {
                id: 'bouchon-JF93332',
                text: 'Perpendicularité, parallélisme (construction de droites parallèles, lien avec la propriété reliant droites parallèles et perpendiculaires).',
                parent: 'bouchon-JF9333'
            },
            {
                id: 'bouchon-JF93333',
                text: 'Egalite de longueurs.',
                parent: 'bouchon-JF9333'
            },
            {
                id: 'bouchon-JF93334',
                text: 'Egalite d’angles.',
                parent: 'bouchon-JF9333'
            },
            {
                id: 'bouchon-JF93335',
                text: 'Distance entre deux points, entre un point et une droite.',
                parent: 'bouchon-JF9333'
            },
            {
                id: 'bouchon-JF9334',
                text: 'Compléter une figure par symétrie axiale.',
                parent: 'bouchon-JF933'
            },
            {
                id: 'bouchon-JF9335',
                text: 'Construire la figure symétrique d’une figure donnée par rapport à un axe donné que l’axe de symétrie coupe ou non la figure, construire le symétrique d’une droite, d’un segment, d’un point par rapport à un axe donné.',
                parent: 'bouchon-JF933'
            },
            {
                id: 'bouchon-JF93351',
                text: 'Figure symétrique, axe de symétrie d’une figure, figures symétriques par rapport à un axe.',
                parent: 'bouchon-JF9335'
            },
            {
                id: 'bouchon-JF93252',
                text: 'Propriétés de conservation de la symétrie axiale.',
                parent: 'bouchon-JF9335'
            },
            {
                id: 'bouchon-JF93353',
                text: 'Médiatrice d’un segment.',
                parent: 'bouchon-JF9335'
            },
            {
                id: 'bouchon-JF9336',
                text: 'Proportionnalité - Reproduire une figure en respectant une échelle.',
                parent: 'bouchon-JF933'
            },
            {
                id: 'bouchon-JF93361',
                text: 'Agrandissement ou réduction d’une figure.',
                parent: 'bouchon-JF9336'
            },
            {
                id: 'bouchon-compTrav',
                text: 'Compétences travaillées',
                parent: '#'
            },
            {
                id: 'bouchon-W',
                text: 'CYCLE 2',
                parent: 'bouchon-compTrav'
            },
            {
                id: 'bouchon-W1',
                text: 'Français',
                parent: 'bouchon-W'
            },
            {
                id: 'bouchon-W11',
                text: 'Comprendre et s’exprimer à l’oral',
                parent: 'bouchon-W1'
            },
            {
                id: 'bouchon-W111',
                text: 'Écouter pour comprendre des messages oraux ou des textes lus par un adulte.',
                parent: 'bouchon-W11'
            },
            {
                id: 'bouchon-W112',
                text: 'Dire pour être entendu et compris.',
                parent: 'bouchon-W11'
            },
            {
                id: 'bouchon-W113',
                text: 'Participer à des échanges dans des situations diversifiées.',
                parent: 'bouchon-W11'
            },
            {
                id: 'bouchon-W114',
                text: 'Adopter une distance critique par rapport au langage produit.',
                parent: 'bouchon-W11'
            },
            {
                id: 'bouchon-W12',
                text: 'Lire',
                parent: 'bouchon-W1'
            },
            {
                id: 'bouchon-W121',
                text: 'Identifier des mots de manière de plus en plus aisée.',
                parent: 'bouchon-W12'
            },
            {
                id: 'bouchon-W122',
                text: 'Comprendre un texte.',
                parent: 'bouchon-W12'
            },
            {
                id: 'bouchon-W123',
                text: 'Pratiquer différentes formes de lecture.',
                parent: 'bouchon-W12'
            },
            {
                id: 'bouchon-W124',
                text: 'Lire à voix haute.',
                parent: 'bouchon-W12'
            },
            {
                id: 'bouchon-W125',
                text: 'Contrôler sa compréhension.',
                parent: 'bouchon-W12'
            },
            {
                id: 'bouchon-W13',
                text: 'Écrire',
                parent: 'bouchon-W1'
            },
            {
                id: 'bouchon-W131',
                text: 'Copier de manière experte.',
                parent: 'bouchon-W13'
            },
            {
                id: 'bouchon-W132',
                text: 'Produire des écrits.',
                parent: 'bouchon-W13'
            },
            {
                id: 'bouchon-W133',
                text: 'Réviser et améliorer l’écrit qu’on a produit.',
                parent: 'bouchon-W13'
            },
            {
                id: 'bouchon-W14',
                text: 'Comprendre le fonctionnement de la langue',
                parent: 'bouchon-W1'
            },
            {
                id: 'bouchon-W141',
                text: 'Maitriser les relations entre l’oral et l’écrit.',
                parent: 'bouchon-W14'
            },
            {
                id: 'bouchon-W142',
                text: 'Mémoriser et se remémorer l’orthographe de mots fréquents et de mots irréguliers dont le sens est connu.',
                parent: 'bouchon-W14'
            },
            {
                id: 'bouchon-W143',
                text: 'Identifier les principaux constituants d’une phrase simple en relation avec sa cohérence sémantique.',
                parent: 'bouchon-W14'
            },
            {
                id: 'bouchon-W144',
                text: 'Raisonner pour résoudre des problèmes orthographiques.',
                parent: 'bouchon-W14'
            },
            {
                id: 'bouchon-W145',
                text: 'Orthographier les formes verbales les plus fréquentes.',
                parent: 'bouchon-W14'
            },
            {
                id: 'bouchon-W146',
                text: 'Identifier des relations entre les mots, entre les mots et leur contexte d’utilisation ; s’en servir pour mieux comprendre.',
                parent: 'bouchon-W14'
            },
            {
                id: 'bouchon-W147',
                text: 'Étendre ses connaissances lexicales, mémoriser et réutiliser des mots nouvellement appris.',
                parent: 'bouchon-W14'
            },
            {
                id: 'bouchon-W2',
                text: 'Langues vivantes',
                parent: 'bouchon-W'
            },
            {
                id: 'bouchon-W21',
                text: 'Comprendre l’oral',
                parent: 'bouchon-W2'
            },
            {
                id: 'bouchon-W211',
                text: 'Écouter et comprendre des messages oraux simples relevant de la vie quotidienne, des textes simples lus par le professeur.',
                parent: 'bouchon-W21'
            },
            {
                id: 'bouchon-W22',
                text: 'S’exprimer oralement en continu',
                parent: 'bouchon-W2'
            },
            {
                id: 'bouchon-W221',
                text: 'En s’appuyant sur un modèle, réciter, se décrire, lire ou raconter.',
                parent: 'bouchon-W22'
            },
            {
                id: 'bouchon-W23',
                text: 'Prendre part à une conversation',
                parent: 'bouchon-W2'
            },
            {
                id: 'bouchon-W231',
                text: 'Participer à des échanges simples pour être entendu et compris dans quelques situations diversifiées de la vie quotidienne.',
                parent: 'bouchon-W23'
            },
            {
                id: 'bouchon-W24',
                text: 'Découvrir quelques aspects culturels d’une langue vivante étrangère et régionale',
                parent: 'bouchon-W2'
            },
            {
                id: 'bouchon-W241',
                text: 'Identifier quelques grands repères culturels de l’environnement quotidien des élèves du même âge dans les pays ou régions étudiés.',
                parent: 'bouchon-W24'
            },
            {
                id: 'bouchon-W3',
                text: 'Enseignements artistiques',
                parent: 'bouchon-W'
            },
            {
                id: 'bouchon-W31',
                text: 'Expérimenter, produire, créer',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W311',
                text: 'S’approprier par les sens les éléments du langage plastique : matière, support, couleur…',
                parent: 'bouchon-W31'
            },
            {
                id: 'bouchon-W312',
                text: 'Observer les effets produits par ses gestes, par les outils utilisés.',
                parent: 'bouchon-W31'
            },
            {
                id: 'bouchon-W313',
                text: 'Tirer parti de trouvailles fortuites, saisir les effets du hasard.',
                parent: 'bouchon-W31'
            },
            {
                id: 'bouchon-W314',
                text: 'Représenter le monde environnant ou donner forme à son imaginaire en explorant la diversité des domaines (dessin, collage, modelage, sculpture, photographie…).',
                parent: 'bouchon-W31'
            },
            {
                id: 'bouchon-W32',
                text: 'Mettre en oeuvre un projet artistique',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W321',
                text: 'Respecter l’espace, les outils et les matériaux partagés.',
                parent: 'bouchon-W32'
            },
            {
                id: 'bouchon-W322',
                text: 'Mener à terme une production individuelle dans le cadre d’un projet accompagné par le professeur.',
                parent: 'bouchon-W32'
            },
            {
                id: 'bouchon-W323',
                text: 'Montrer sans réticence ses productions et regarder celles des autres.',
                parent: 'bouchon-W32'
            },
            {
                id: 'bouchon-W33',
                text: 'S’exprimer, analyser sa pratique, celle de ses pairs ; établir une relation avec celle des artistes, s’ouvrir à l’altérité',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W331',
                text: 'Prendre la parole devant un groupe pour partager ses trouvailles, s’intéresser à celles découvertes dans des oeuvres d’art.',
                parent: 'bouchon-W33'
            },
            {
                id: 'bouchon-W332',
                text: 'Formuler ses émotions, entendre et respecter celles des autres.',
                parent: 'bouchon-W33'
            },
            {
                id: 'bouchon-W333',
                text: 'Repérer les éléments du langage plastique dans une production : couleurs, formes, matières, support…',
                parent: 'bouchon-W33'
            },
            {
                id: 'bouchon-W34',
                text: 'Se repérer dans les domaines liés aux arts plastiques, être sensible aux questions de l’art',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W341',
                text: 'Effectuer des choix parmi les images rencontrées, établir un premier lien entre son univers visuel et la culture artistique.',
                parent: 'bouchon-W34'
            },
            {
                id: 'bouchon-W342',
                text: 'Exprimer ses émotions lors de la rencontre avec des oeuvres d’art, manifester son intérêt pour la rencontre directe avec des oeuvres.',
                parent: 'bouchon-W34'
            },
            {
                id: 'bouchon-W343',
                text: 'S’approprier quelques oeuvres de domaines et d’époques variées appartenant au patrimoine national et mondial.',
                parent: 'bouchon-W34'
            },
            {
                id: 'bouchon-W344',
                text: 'S’ouvrir à la diversité des pratiques et des cultures artistiques.',
                parent: 'bouchon-W34'
            },
            {
                id: 'bouchon-W35',
                text: 'Chanter',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W351',
                text: 'Chanter une mélodie simple avec une intonation juste, chanter une comptine ou un chant par imitation.',
                parent: 'bouchon-W35'
            },
            {
                id: 'bouchon-W352',
                text: 'Interpréter un chant avec expressivité.',
                parent: 'bouchon-W35'
            },
            {
                id: 'bouchon-W36',
                text: 'Écouter, comparer',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W361',
                text: 'Décrire et comparer des éléments sonores.',
                parent: 'bouchon-W36'
            },
            {
                id: 'bouchon-W362',
                text: 'Comparer des musiques et identifier des ressemblances et des différences.',
                parent: 'bouchon-W36'
            },
            {
                id: 'bouchon-W37',
                text: 'Explorer et imaginer',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W371',
                text: 'Imaginer des représentations graphiques ou corporelles de la musique.',
                parent: 'bouchon-W37'
            },
            {
                id: 'bouchon-W372',
                text: 'Inventer une organisation simple à partir de différents éléments sonores.',
                parent: 'bouchon-W37'
            },
            {
                id: 'bouchon-W38',
                text: 'Échanger, partager',
                parent: 'bouchon-W3'
            },
            {
                id: 'bouchon-W381',
                text: 'Exprimer ses émotions, ses sentiments et ses préférences.',
                parent: 'bouchon-W38'
            },
            {
                id: 'bouchon-W382',
                text: 'Écouter et respecter l’avis des autres et l’expression de leur sensibilité.',
                parent: 'bouchon-W38'
            },
            {
                id: 'bouchon-W4',
                text: 'Éducation physique et sportive',
                parent: 'bouchon-W'
            },
            {
                id: 'bouchon-W41',
                text: 'Développer sa motricité et construire un langage du corps',
                parent: 'bouchon-W4'
            },
            {
                id: 'bouchon-W411',
                text: 'Prendre conscience des différentes ressources à mobiliser pour agir avec son corps.',
                parent: 'bouchon-W41'
            },
            {
                id: 'bouchon-W412',
                text: 'Adapter sa motricité à des environnements variés.',
                parent: 'bouchon-W41'
            },
            {
                id: 'bouchon-W413',
                text: 'S’exprimer par son corps et accepter de se montrer à autrui.',
                parent: 'bouchon-W41'
            },
            {
                id: 'bouchon-W42',
                text: 'S’approprier seul ou à plusieurs par la pratique, les méthodes et outils pour apprendre',
                parent: 'bouchon-W4'
            },
            {
                id: 'bouchon-W421',
                text: 'Apprendre par essai-erreur en utilisant les effets de son action.',
                parent: 'bouchon-W42'
            },
            {
                id: 'bouchon-W422',
                text: 'Apprendre à planifier son action avant de la réaliser.',
                parent: 'bouchon-W42'
            },
            {
                id: 'bouchon-W43',
                text: 'Partager des règles, assumer des rôles et des responsabilités pour apprendre à vivre ensemble',
                parent: 'bouchon-W4'
            },
            {
                id: 'bouchon-W431',
                text: 'Assumer les rôles spécifiques aux différentes APSA (joueur, coach, arbitre, juge, médiateur, organisateur,…).',
                parent: 'bouchon-W43'
            },
            {
                id: 'bouchon-W432',
                text: 'Élaborer, respecter et faire respecter règles et règlements.',
                parent: 'bouchon-W43'
            },
            {
                id: 'bouchon-W433',
                text: 'Accepter et prendre en considération toutes les différences interindividuelles au sein d’un groupe.',
                parent: 'bouchon-W43'
            },
            {
                id: 'bouchon-W44',
                text: 'Apprendre à entretenir sa santé par une activité physique régulière',
                parent: 'bouchon-W4'
            },
            {
                id: 'bouchon-W441',
                text: 'Découvrir les principes d’une bonne hygiène de vie, à des fins de santé et de bien-être.',
                parent: 'bouchon-W44'
            },
            {
                id: 'bouchon-W442',
                text: 'Ne pas se mettre en danger par un engagement physique dont l’intensité excède ses qualités physiques.',
                parent: 'bouchon-W44'
            },
            {
                id: 'bouchon-W45',
                text: 'S’approprier une culture physique sportive et artistique',
                parent: 'bouchon-W4'
            },
            {
                id: 'bouchon-W451',
                text: 'Découvrir la variété des activités et des spectacles sportifs.',
                parent: 'bouchon-W45'
            },
            {
                id: 'bouchon-W452',
                text: 'Exprimer des intentions et des émotions par son corps dans un projet artistique individuel ou collectif.',
                parent: 'bouchon-W45'
            },
            {
                id: 'bouchon-W5',
                text: 'Questionner le monde',
                parent: 'bouchon-W'
            },
            {
                id: 'bouchon-W51',
                text: 'Pratiquer des démarches scientifiques',
                parent: 'bouchon-W5'
            },
            {
                id: 'bouchon-W511',
                text: 'Pratiquer, avec l’aide des professeurs, quelques moments d’une démarche d’investigation : questionnement, observation, expérience, description, raisonnement, conclusion.',
                parent: 'bouchon-W51'
            },
            {
                id: 'bouchon-W52',
                text: 'Imaginer, réaliser',
                parent: 'bouchon-W5'
            },
            {
                id: 'bouchon-W521',
                text: 'Observer des objets simples et des situations d’activités de la vie quotidienne.',
                parent: 'bouchon-W52'
            },
            {
                id: 'bouchon-W522',
                text: 'Imaginer et réaliser des objets simples et de petits montages.',
                parent: 'bouchon-W52'
            },
            {
                id: 'bouchon-W53',
                text: 'S’approprier des outils et des méthodes',
                parent: 'bouchon-W5'
            },
            {
                id: 'bouchon-W531',
                text: 'Choisir ou utiliser le matériel adapté proposé pour mener une observation, effectuer une mesure, réaliser une expérience.',
                parent: 'bouchon-W53'
            },
            {
                id: 'bouchon-W532',
                text: 'Manipuler avec soin.',
                parent: 'bouchon-W53'
            },
            {
                id: 'bouchon-W54',
                text: 'Pratiquer des langages',
                parent: 'bouchon-W5'
            },
            {
                id: 'bouchon-W541',
                text: 'Communiquer en français, à l’oral et à l’écrit, en cultivant précision, syntaxe et richesse du vocabulaire.',
                parent: 'bouchon-W54'
            },
            {
                id: 'bouchon-W542',
                text: 'Lire et comprendre des textes documentaires illustrés.',
                parent: 'bouchon-W54'
            },
            {
                id: 'bouchon-W543',
                text: 'Extraire d’un texte ou d’une ressource documentaire une information qui répond à un besoin, une question.',
                parent: 'bouchon-W54'
            },
            {
                id: 'bouchon-W544',
                text: 'Restituer les résultats des observations sous forme orale ou d’écrits variés (notes, listes, dessins, voire tableaux).',
                parent: 'bouchon-W54'
            },
            {
                id: 'bouchon-W55',
                text: 'Mobiliser des outils numériques',
                parent: 'bouchon-W5'
            },
            {
                id: 'bouchon-W551',
                text: 'Découvrir des outils numériques pour dessiner, communiquer, rechercher et restituer des informations simples.',
                parent: 'bouchon-W55'
            },
            {
                id: 'bouchon-W56',
                text: 'Adopter un comportement éthique et responsable',
                parent: 'bouchon-W5'
            },
            {
                id: 'bouchon-W561',
                text: 'Développer un comportement responsable vis-à-vis de l’environnement et de la santé grâce à une attitude raisonnée fondée sur la connaissance.',
                parent: 'bouchon-W56'
            },
            {
                id: 'bouchon-W562',
                text: 'Mettre en pratique les premières notions d’éco-gestion de l’environnement par des actions simples individuelles ou collectives : gestion de déchets, du papier et économies d’eau et d’énergie (éclairage, chauffage...).',
                parent: 'bouchon-W56'
            },
            {
                id: 'bouchon-W57',
                text: 'Se situer dans l’espace et dans le temps',
                parent: 'bouchon-W5'
            },
            {
                id: 'bouchon-W571',
                text: 'Construire des repères spatiaux :',
                parent: 'bouchon-W57'
            },
            {
                id: 'bouchon-W5711',
                text: 'se repérer, s’orienter et se situer dans un espace géographique ;',
                parent: 'bouchon-W571'
            },
            {
                id: 'bouchon-W5712',
                text: 'utiliser et produire des représentations de l’espace.',
                parent: 'bouchon-W571'
            },
            {
                id: 'bouchon-W572',
                text: 'Construire des repères temporels :',
                parent: 'bouchon-W57'
            },
            {
                id: 'bouchon-W5721',
                text: 'ordonner des événements ;',
                parent: 'bouchon-W572'
            },
            {
                id: 'bouchon-W5722',
                text: 'mémoriser quelques repères chronologiques.',
                parent: 'bouchon-W572'
            },
            {
                id: 'bouchon-W6',
                text: 'Mathématiques',
                parent: 'bouchon-W'
            },
            {
                id: 'bouchon-W61',
                text: 'Chercher',
                parent: 'bouchon-W6'
            },
            {
                id: 'bouchon-W611',
                text: 'S’engager dans une démarche de résolution de problèmes en observant, en posant des questions, en manipulant, en expérimentant, en émettant des hypothèses, si besoin avec l’accompagnement du professeur après un temps de recherche autonome.',
                parent: 'bouchon-W61'
            },
            {
                id: 'bouchon-W612',
                text: 'Tester, essayer plusieurs pistes proposées par soi-même, les autres élèves ou le professeur.',
                parent: 'bouchon-W61'
            },
            {
                id: 'bouchon-W62',
                text: 'Modéliser',
                parent: 'bouchon-W6'
            },
            {
                id: 'bouchon-W621',
                text: 'Utiliser des outils mathématiques pour résoudre des problèmes concrets, notamment des problèmes portant sur des grandeurs et leurs mesures.',
                parent: 'bouchon-W62'
            },
            {
                id: 'bouchon-W622',
                text: 'Réaliser que certains problèmes relèvent de situations additives, d’autres de situations multiplicatives, de partages ou de groupements.',
                parent: 'bouchon-W62'
            },
            {
                id: 'bouchon-W623',
                text: 'Reconnaitre des formes dans des objets réels et les reproduire géométriquement.',
                parent: 'bouchon-W62'
            },
            {
                id: 'bouchon-W63',
                text: 'Représenter',
                parent: 'bouchon-W6'
            },
            {
                id: 'bouchon-W631',
                text: 'Appréhender différents systèmes de représentations (dessins, schémas, arbres de calcul, etc.).',
                parent: 'bouchon-W63'
            },
            {
                id: 'bouchon-W632',
                text: 'Utiliser des nombres pour représenter des quantités ou des grandeurs.',
                parent: 'bouchon-W63'
            },
            {
                id: 'bouchon-W633',
                text: 'Utiliser diverses représentations de solides et de situations spatiales.',
                parent: 'bouchon-W63'
            },
            {
                id: 'bouchon-W64',
                text: 'Raisonner',
                parent: 'bouchon-W6'
            },
            {
                id: 'bouchon-W641',
                text: 'Anticiper le résultat d’une manipulation, d’un calcul, ou d’une mesure.',
                parent: 'bouchon-W64'
            },
            {
                id: 'bouchon-W642',
                text: 'Raisonner sur des figures pour les reproduire avec des instruments.',
                parent: 'bouchon-W64'
            },
            {
                id: 'bouchon-W643',
                text: 'Tenir compte d’éléments divers (arguments d’autrui, résultats d’une expérience, sources internes ou externes à la classe, etc.) pour modifier son jugement.',
                parent: 'bouchon-W64'
            },
            {
                id: 'bouchon-W644',
                text: 'Prendre progressivement conscience de la nécessité et de l’intérêt de justifier ce que l’on affirme.',
                parent: 'bouchon-W64'
            },
            {
                id: 'bouchon-W65',
                text: 'Calculer',
                parent: 'bouchon-W6'
            },
            {
                id: 'bouchon-W651',
                text: 'Calculer avec des nombres entiers, mentalement ou à la main, de manière exacte ou approchée, e utilisant des stratégies adaptées aux nombres en jeu.',
                parent: 'bouchon-W65'
            },
            {
                id: 'bouchon-W652',
                text: 'Contrôler la vraisemblance de ses résultats.',
                parent: 'bouchon-W65'
            },
            {
                id: 'bouchon-W66',
                text: 'Communiquer',
                parent: 'bouchon-W6'
            },
            {
                id: 'bouchon-W661',
                text: 'Utiliser l’oral et l’écrit, le langage naturel puis quelques représentations et quelques symboles pour expliciter des démarches, argumenter des raisonnements.',
                parent: 'bouchon-W66'
            },
            {
                id: 'bouchon-X',
                text: 'CYCLE 3',
                parent: 'bouchon-compTrav'
            },
            {
                id: 'bouchon-X1',
                text: 'Français',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X11',
                text: 'Comprendre et s’exprimer à l’oral',
                parent: 'bouchon-X1'
            },
            {
                id: 'bouchon-X111',
                text: 'Écouter pour comprendre un message oral, un propos, un discours, un texte lu.',
                parent: 'bouchon-X11'
            },
            {
                id: 'bouchon-X112',
                text: 'Parler en prenant en compte son auditoire.',
                parent: 'bouchon-X11'
            },
            {
                id: 'bouchon-X113',
                text: 'Participer à des échanges dans des situations diversifiées.',
                parent: 'bouchon-X11'
            },
            {
                id: 'bouchon-X114',
                text: 'Adopter une attitude critique par rapport au langage produit.',
                parent: 'bouchon-X11'
            },
            {
                id: 'bouchon-X12',
                text: 'Lire',
                parent: 'bouchon-X1'
            },
            {
                id: 'bouchon-X121',
                text: 'Lire avec fluidité.',
                parent: 'bouchon-X12'
            },
            {
                id: 'bouchon-X122',
                text: 'Comprendre un texte littéraire et l’interpréter.',
                parent: 'bouchon-X12'
            },
            {
                id: 'bouchon-X123',
                text: 'Comprendre des textes, des documents et des images et les interpréter.',
                parent: 'bouchon-X12'
            },
            {
                id: 'bouchon-X124',
                text: 'Contrôler sa compréhension, être un lecteur autonome.',
                parent: 'bouchon-X12'
            },
            {
                id: 'bouchon-X13',
                text: 'Écrire',
                parent: 'bouchon-X1'
            },
            {
                id: 'bouchon-X131',
                text: 'Écrire à la main de manière fluide et efficace.',
                parent: 'bouchon-X13'
            },
            {
                id: 'bouchon-X132',
                text: 'Écrire avec un clavier rapidement et efficacement.',
                parent: 'bouchon-X13'
            },
            {
                id: 'bouchon-X133',
                text: 'Recourir à l’écriture pour réfléchir et pour apprendre.',
                parent: 'bouchon-X13'
            },
            {
                id: 'bouchon-X134',
                text: 'Produire des écrits variés.',
                parent: 'bouchon-X13'
            },
            {
                id: 'bouchon-X135',
                text: 'Réécrire à partir de nouvelles consignes ou faire évoluer son texte.',
                parent: 'bouchon-X13'
            },
            {
                id: 'bouchon-X136',
                text: 'Prendre en compte les normes de l’écrit pour formuler, transcrire et réviser.',
                parent: 'bouchon-X13'
            },
            {
                id: 'bouchon-X14',
                text: 'Comprendre le fonctionnement de la langue',
                parent: 'bouchon-X1'
            },
            {
                id: 'bouchon-X141',
                text: 'Maitriser les relations entre l’oral et l’écrit.',
                parent: 'bouchon-X14'
            },
            {
                id: 'bouchon-X142',
                text: 'Acquérir la structure, le sens et l’orthographe des mots.',
                parent: 'bouchon-X14'
            },
            {
                id: 'bouchon-X143',
                text: 'Maitriser la forme des mots en lien avec la syntaxe.',
                parent: 'bouchon-X14'
            },
            {
                id: 'bouchon-X144',
                text: 'Observer le fonctionnement du verbe et l’orthographier.',
                parent: 'bouchon-X14'
            },
            {
                id: 'bouchon-X145',
                text: 'Identifier les constituants d’une phrase simple en relation avec son sens ; distinguer phrase simple et phrase complexe.',
                parent: 'bouchon-X14'
            },
            {
                id: 'bouchon-X2',
                text: 'Langues vivantes',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X21',
                text: 'Écouter et comprendre',
                parent: 'bouchon-X2'
            },
            {
                id: 'bouchon-X211',
                text: ' Écouter et comprendre des messages oraux simples relevant de la vie quotidienne, des histoires simples.',
                parent: 'bouchon-X21'
            },
            {
                id: 'bouchon-X212',
                text: ' Exercer sa mémoire auditive à court et à long terme pour mémoriser des mots, des expressions courantes.',
                parent: 'bouchon-X21'
            },
            {
                id: 'bouchon-X213',
                text: ' Utiliser des indices sonores et visuels pour déduire le sens de mots inconnus, d’un message.',
                parent: 'bouchon-X21'
            },
            {
                id: 'bouchon-X22',
                text: 'Lire et comprendre',
                parent: 'bouchon-X2'
            },
            {
                id: 'bouchon-X221',
                text: ' Utiliser le contexte, les illustrations et les connaissances pour comprendre un texte.',
                parent: 'bouchon-X22'
            },
            {
                id: 'bouchon-X222',
                text: ' Reconnaitre des mots isolés dans un énoncé, un court texte.',
                parent: 'bouchon-X22'
            },
            {
                id: 'bouchon-X223',
                text: ' S’appuyer sur des mots outils, des structures simples, des expressions rituelles.',
                parent: 'bouchon-X22'
            },
            {
                id: 'bouchon-X224',
                text: ' Percevoir la relation entre certains graphèmes et phonèmes spécifiques à la langue.',
                parent: 'bouchon-X22'
            },
            {
                id: 'bouchon-X23',
                text: 'Parler en continu',
                parent: 'bouchon-X2'
            },
            {
                id: 'bouchon-X231',
                text: ' Mémoriser et reproduire des énoncés.',
                parent: 'bouchon-X23'
            },
            {
                id: 'bouchon-X232',
                text: ' S’exprimer de manière audible, en modulant débit et voix.',
                parent: 'bouchon-X23'
            },
            {
                id: 'bouchon-X233',
                text: ' Participer à des échanges simples en mobilisant ses connaissances phonologiques, grammaticales, lexicales, pour être entendu et compris dans quelques situations diversifiées de la vie quotidienne.',
                parent: 'bouchon-X23'
            },
            {
                id: 'bouchon-X24',
                text: 'Écrire',
                parent: 'bouchon-X2'
            },
            {
                id: 'bouchon-X241',
                text: ' Écrire des mots et des expressions dont l’orthographe et la syntaxe ont été mémorisées.',
                parent: 'bouchon-X24'
            },
            {
                id: 'bouchon-X242',
                text: ' Mobiliser des structures simples pour écrire des phrases en s’appuyant sur une trame connue.',
                parent: 'bouchon-X24'
            },
            {
                id: 'bouchon-X25',
                text: 'Réagir et dialoguer',
                parent: 'bouchon-X2'
            },
            {
                id: 'bouchon-X251',
                text: ' Poser des questions simples.',
                parent: 'bouchon-X25'
            },
            {
                id: 'bouchon-X252',
                text: ' Mobiliser des énoncés adéquats au contexte dans une succession d’échanges ritualisés.',
                parent: 'bouchon-X25'
            },
            {
                id: 'bouchon-X253',
                text: ' Utiliser des procédés très simples pour commencer, poursuivre et terminer une conversation brève.',
                parent: 'bouchon-X25'
            },
            {
                id: 'bouchon-X26',
                text: 'Découvrir les aspects culturels d’une langue vivante étrangère et régionale',
                parent: 'bouchon-X2'
            },
            {
                id: 'bouchon-X261',
                text: ' Identifier quelques grands repères culturels de l’environnement quotidien des élèves du même âge dans les pays ou régions étudiés.',
                parent: 'bouchon-X26'
            },
            {
                id: 'bouchon-X262',
                text: ' Mobiliser ses connaissances culturelles pour décrire ou raconter des personnages réels ou imaginaires.',
                parent: 'bouchon-X26'
            },
            {
                id: 'bouchon-X3',
                text: 'Arts plastiques',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X31',
                text: 'Expérimenter, produire, créer',
                parent: 'bouchon-X3'
            },
            {
                id: 'bouchon-X311',
                text: ' Choisir, organiser et mobiliser des gestes, des outils et des matériaux en fonction des effets qu’ils produisent.',
                parent: 'bouchon-X31'
            },
            {
                id: 'bouchon-X312',
                text: ' Représenter le monde environnant ou donner forme à son imaginaire en explorant divers domaines (dessin, collage, modelage, sculpture, photographie, vidéo…).',
                parent: 'bouchon-X31'
            },
            {
                id: 'bouchon-X313',
                text: ' Rechercher une expression personnelle en s’éloignant des stéréotypes.',
                parent: 'bouchon-X31'
            },
            {
                id: 'bouchon-X314',
                text: ' Intégrer l’usage des outils informatiques de travail de l’image et de recherche d’information, au service de la pratique plastique.',
                parent: 'bouchon-X31'
            },
            {
                id: 'bouchon-X32',
                text: 'Mettre en oeuvre un projet artistique',
                parent: 'bouchon-X3'
            },
            {
                id: 'bouchon-X321',
                text: ' Identifier les principaux outils et compétences nécessaires à la réalisation d’un projet artistique.',
                parent: 'bouchon-X32'
            },
            {
                id: 'bouchon-X322',
                text: ' Se repérer dans les étapes de la réalisation d’une production plastique individuelle ou collective, anticiper les difficultés éventuelles.',
                parent: 'bouchon-X32'
            },
            {
                id: 'bouchon-X323',
                text: ' Identifier et assumer sa part de responsabilité dans un processus coopératif de création.',
                parent: 'bouchon-X32'
            },
            {
                id: 'bouchon-X324',
                text: ' Adapter son projet en fonction des contraintes de réalisation et de la prise en compte du spectateur.',
                parent: 'bouchon-X32'
            },
            {
                id: 'bouchon-X33',
                text: 'S’exprimer, analyser sa pratique, celle de ses pairs ; établir une relation avec celle des artistes, s’ouvrir à l’altérité',
                parent: 'bouchon-X3'
            },
            {
                id: 'bouchon-X331',
                text: ' Décrire et interroger à l’aide d’un vocabulaire spécifique ses productions plastiques, celles de ses pairs et des oeuvres d’art étudiées en classe.',
                parent: 'bouchon-X33'
            },
            {
                id: 'bouchon-X332',
                text: ' Justifier des choix pour rendre compte du cheminement qui conduit de l’intention à la réalisation.',
                parent: 'bouchon-X33'
            },
            {
                id: 'bouchon-X333',
                text: ' Formuler une expression juste de ses émotions, en prenant appui sur ses propres réalisations plastiques, celles des autres élèves et des oeuvres d’art.',
                parent: 'bouchon-X33'
            },
            {
                id: 'bouchon-X34',
                text: 'Se repérer dans les domaines liés aux arts plastiques, être sensible aux questions de l’art',
                parent: 'bouchon-X3'
            },
            {
                id: 'bouchon-X341',
                text: ' Repérer, pour les dépasser, certains a priori et stéréotypes culturels et artistiques.',
                parent: 'bouchon-X34'
            },
            {
                id: 'bouchon-X342',
                text: ' Identifier quelques caractéristiques qui inscrivent une oeuvre d’art dans une aire géographique ou culturelle et dans un temps historique, contemporain, proche ou lointain.',
                parent: 'bouchon-X34'
            },
            {
                id: 'bouchon-X343',
                text: ' Décrire des oeuvres d’art, en proposer une compréhension personnelle argumentée.',
                parent: 'bouchon-X34'
            },
            {
                id: 'bouchon-X4',
                text: 'EDUCATION MUSICALE',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X41',
                text: 'Chanter et interpréter',
                parent: 'bouchon-X4'
            },
            {
                id: 'bouchon-X411',
                text: ' Reproduire et interpréter un modèle mélodique et rythmique.',
                parent: 'bouchon-X41'
            },
            {
                id: 'bouchon-X412',
                text: ' Interpréter un répertoire varié avec expressivité.',
                parent: 'bouchon-X41'
            },
            {
                id: 'bouchon-X42',
                text: 'Écouter, comparer et commenter',
                parent: 'bouchon-X4'
            },
            {
                id: 'bouchon-X421',
                text: ' Décrire et comparer des éléments sonores issus de contextes musicaux différents.',
                parent: 'bouchon-X42'
            },
            {
                id: 'bouchon-X422',
                text: ' Identifier et nommer ressemblances et différences dans deux extraits musicaux.',
                parent: 'bouchon-X42'
            },
            {
                id: 'bouchon-X423',
                text: ' Identifier quelques caractéristiques qui inscrivent une oeuvre musicale dans une aire géographique ou culturelle et dans un temps historique contemporain, proche ou lointain.',
                parent: 'bouchon-X42'
            },
            {
                id: 'bouchon-X43',
                text: 'Explorer, imaginer et créer',
                parent: 'bouchon-X4'
            },
            {
                id: 'bouchon-X431',
                text: ' Imaginer l’organisation de différents éléments sonores.',
                parent: 'bouchon-X43'
            },
            {
                id: 'bouchon-X432',
                text: ' Faire des propositions personnelles lors de moments de création, d’invention et d’interprétation.',
                parent: 'bouchon-X43'
            },
            {
                id: 'bouchon-X44',
                text: 'Échanger, partager et argumenter',
                parent: 'bouchon-X4'
            },
            {
                id: 'bouchon-X441',
                text: ' Argumenter un jugement sur une musique.',
                parent: 'bouchon-X44'
            },
            {
                id: 'bouchon-X442',
                text: ' Écouter et respecter le point de vue des autres et l’expression de leur sensibilité.',
                parent: 'bouchon-X44'
            },
            {
                id: 'bouchon-X5',
                text: 'HISTOIRE DES ARTS',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X51',
                text: 'Identifier',
                parent: 'bouchon-X5'
            },
            {
                id: 'bouchon-X511',
                text: ' Donner un avis argumenté sur ce que représente ou exprime une oeuvre d’art.',
                parent: 'bouchon-X51'
            },
            {
                id: 'bouchon-X52',
                text: 'Analyser',
                parent: 'bouchon-X5'
            },
            {
                id: 'bouchon-X521',
                text: ' Dégager d’une oeuvre d’art, par l’observation ou l’écoute, ses principales caractéristiques techniques et formelles.',
                parent: 'bouchon-X52'
            },
            {
                id: 'bouchon-X53',
                text: 'Se repérer',
                parent: 'bouchon-X5'
            },
            {
                id: 'bouchon-X531',
                text: ' Dans un musée, un lieu d’art, un site patrimonial.',
                parent: 'bouchon-X53'
            },
            {
                id: 'bouchon-X6',
                text: 'ÉDUCATION PHYSIQUE ET SPORTIVE',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X61',
                text: 'Développer sa motricité et construire un langage du corps',
                parent: 'bouchon-X6'
            },
            {
                id: 'bouchon-X611',
                text: ' Adapter sa motricité à des situations variées.',
                parent: 'bouchon-X61'
            },
            {
                id: 'bouchon-X612',
                text: ' Acquérir des techniques spécifiques pour améliorer son efficacité.',
                parent: 'bouchon-X61'
            },
            {
                id: 'bouchon-X613',
                text: ' Mobiliser différentes ressources (physiologique, biomécanique, psychologique, émotionnelle) pour agir de manière efficiente.',
                parent: 'bouchon-X61'
            },
            {
                id: 'bouchon-X62',
                text: 'S’approprier seul ou à plusieurs par la pratique, les méthodes et outils pour apprendre',
                parent: 'bouchon-X6'
            },
            {
                id: 'bouchon-X621',
                text: ' Apprendre par l’action, l’observation, l’analyse de son activité et de celle des autres.',
                parent: 'bouchon-X62'
            },
            {
                id: 'bouchon-X622',
                text: ' Répéter un geste pour le stabiliser et le rendre plus efficace.',
                parent: 'bouchon-X62'
            },
            {
                id: 'bouchon-X623',
                text: ' Utiliser des outils numériques pour observer, évaluer et modifier ses actions.',
                parent: 'bouchon-X62'
            },
            {
                id: 'bouchon-X63',
                text: 'Partager des règles, assumer des rôles et des responsabilités',
                parent: 'bouchon-X6'
            },
            {
                id: 'bouchon-X631',
                text: ' Assumer les rôles sociaux spécifiques aux différentes APSA et à la classe (joueur, coach, arbitre, juge, observateur, tuteur, médiateur, organisateur…).',
                parent: 'bouchon-X63'
            },
            {
                id: 'bouchon-X632',
                text: ' Comprendre, respecter et faire respecter règles et règlements.',
                parent: 'bouchon-X63'
            },
            {
                id: 'bouchon-X633',
                text: ' Assurer sa sécurité et celle d’autrui dans des situations variées.',
                parent: 'bouchon-X63'
            },
            {
                id: 'bouchon-X634',
                text: ' S’engager dans les activités sportives et artistiques collectives.',
                parent: 'bouchon-X63'
            },
            {
                id: 'bouchon-X64',
                text: 'Apprendre à entretenir sa santé par une activité physique régulière',
                parent: 'bouchon-X6'
            },
            {
                id: 'bouchon-X641',
                text: ' Évaluer la quantité et la qualité de son activité physique quotidienne dans et hors l’école.',
                parent: 'bouchon-X64'
            },
            {
                id: 'bouchon-X642',
                text: ' Connaitre et appliquer des principes d’une bonne hygiène de vie.',
                parent: 'bouchon-X64'
            },
            {
                id: 'bouchon-X643',
                text: ' Adapter l’intensité de son engagement physique à ses possibilités pour ne pas se mettre en danger.',
                parent: 'bouchon-X64'
            },
            {
                id: 'bouchon-X65',
                text: 'S’approprier une culture physique sportive et artistique',
                parent: 'bouchon-X6'
            },
            {
                id: 'bouchon-X651',
                text: ' Savoir situer des performances à l’échelle de la performance humaine.',
                parent: 'bouchon-X65'
            },
            {
                id: 'bouchon-X652',
                text: ' Comprendre et respecter l’environnement des pratiques physiques et sportives.',
                parent: 'bouchon-X65'
            },
            {
                id: 'bouchon-X7',
                text: 'HISTOIRE ET GEOGRAPHIE',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X71',
                text: 'Se repérer dans le temps : construire des repères historiques',
                parent: 'bouchon-X7'
            },
            {
                id: 'bouchon-X711',
                text: ' Situer chronologiquement des grandes périodes historiques.',
                parent: 'bouchon-X71'
            },
            {
                id: 'bouchon-X712',
                text: ' Ordonner des faits les uns par rapport aux autres et les situer dans une époque ou une période donnée.',
                parent: 'bouchon-X71'
            },
            {
                id: 'bouchon-X713',
                text: ' Manipuler et réinvestir le repère historique dans différents contextes.',
                parent: 'bouchon-X71'
            },
            {
                id: 'bouchon-X714',
                text: ' Utiliser des documents donnant à voir une représentation du temps (dont les frises chronologiques), à différentes échelles, et le lexique relatif au découpage du temps et suscitant la mise en perspective des faits.',
                parent: 'bouchon-X71'
            },
            {
                id: 'bouchon-X715',
                text: ' Mémoriser les repères historiques liés au programme et savoir les mobiliser dans différents contextes.',
                parent: 'bouchon-X71'
            },
            {
                id: 'bouchon-X72',
                text: 'Se repérer dans l’espace : construire des repères géographiques',
                parent: 'bouchon-X7'
            },
            {
                id: 'bouchon-X721',
                text: ' Nommer et localiser les grands repères géographiques.',
                parent: 'bouchon-X72'
            },
            {
                id: 'bouchon-X722',
                text: ' Nommer et localiser un lieu dans un espace géographique.',
                parent: 'bouchon-X72'
            },
            {
                id: 'bouchon-X723',
                text: ' Nommer, localiser et caractériser des espaces.',
                parent: 'bouchon-X72'
            },
            {
                id: 'bouchon-X724',
                text: ' Situer des lieux et des espaces les uns par rapport aux autres.',
                parent: 'bouchon-X72'
            },
            {
                id: 'bouchon-X725',
                text: ' Appréhender la notion d’échelle géographique.',
                parent: 'bouchon-X72'
            },
            {
                id: 'bouchon-X726',
                text: ' Mémoriser les repères géographiques liés au programme et savoir les mobiliser dans différents contextes.',
                parent: 'bouchon-X72'
            },
            {
                id: 'bouchon-X73',
                text: 'Raisonner, justifier une démarche et les choix effectués',
                parent: 'bouchon-X7'
            },
            {
                id: 'bouchon-X731',
                text: ' Poser des questions, se poser des questions.',
                parent: 'bouchon-X73'
            },
            {
                id: 'bouchon-X732',
                text: ' Formuler des hypothèses.',
                parent: 'bouchon-X73'
            },
            {
                id: 'bouchon-X733',
                text: ' Vérifier.',
                parent: 'bouchon-X73'
            },
            {
                id: 'bouchon-X734',
                text: ' Justifier.',
                parent: 'bouchon-X73'
            },
            {
                id: 'bouchon-X74',
                text: 'S’informer dans le monde du numérique',
                parent: 'bouchon-X7'
            },
            {
                id: 'bouchon-X741',
                text: ' Connaitre différents systèmes d’information, les utiliser.',
                parent: 'bouchon-X74'
            },
            {
                id: 'bouchon-X742',
                text: ' Trouver, sélectionner et exploiter des informations dans une ressource numérique.',
                parent: 'bouchon-X74'
            },
            {
                id: 'bouchon-X743',
                text: ' Identifier la ressource numérique utilisée.',
                parent: 'bouchon-X74'
            },
            {
                id: 'bouchon-X75',
                text: 'Comprendre un document',
                parent: 'bouchon-X7'
            },
            {
                id: 'bouchon-X751',
                text: ' Comprendre le sens général d’un document.',
                parent: 'bouchon-X75'
            },
            {
                id: 'bouchon-X752',
                text: ' Identifier le document et savoir pourquoi il doit être identifié.',
                parent: 'bouchon-X75'
            },
            {
                id: 'bouchon-X753',
                text: ' Extraire des informations pertinentes pour répondre à une question.',
                parent: 'bouchon-X75'
            },
            {
                id: 'bouchon-X754',
                text: ' Savoir que le document exprime un point de vue, identifier et questionner le sens implicite d’un document',
                parent: 'bouchon-X75'
            },
            {
                id: 'bouchon-X76',
                text: 'Pratiquer différents langages en histoire et en géographie',
                parent: 'bouchon-X7'
            },
            {
                id: 'bouchon-X761',
                text: ' Écrire pour structurer sa pensée et son savoir, pour argumenter et écrire pour communiquer et échanger.',
                parent: 'bouchon-X76'
            },
            {
                id: 'bouchon-X762',
                text: ' Reconnaitre un récit historique.',
                parent: 'bouchon-X76'
            },
            {
                id: 'bouchon-X763',
                text: ' S’exprimer à l’oral pour penser, communiquer et échanger.',
                parent: 'bouchon-X76'
            },
            {
                id: 'bouchon-X764',
                text: ' S’approprier et utiliser un lexique historique et géographique approprié',
                parent: 'bouchon-X76'
            },
            {
                id: 'bouchon-X765',
                text: ' Réaliser ou compléter des productions graphiques.',
                parent: 'bouchon-X76'
            },
            {
                id: 'bouchon-X766',
                text: ' Utiliser des cartes analogiques et numériques à différentes échelles, des photographies de paysages ou de lieux.',
                parent: 'bouchon-X76'
            },
            {
                id: 'bouchon-X77',
                text: 'Coopérer et mutualiser',
                parent: 'bouchon-X7'
            },
            {
                id: 'bouchon-X771',
                text: ' Organiser son travail dans le cadre d’un groupe pour élaborer une tâche commune et/ou une production collective et mettre à la disposition des autres ses compétences et ses connaissances',
                parent: 'bouchon-X77'
            },
            {
                id: 'bouchon-X772',
                text: ' Travailler en commun pour faciliter les apprentissages individuels.',
                parent: 'bouchon-X77'
            },
            {
                id: 'bouchon-X773',
                text: ' Apprendre à utiliser les outils numériques qui peuvent conduire à des réalisations collectives',
                parent: 'bouchon-X77'
            },
            {
                id: 'bouchon-X8',
                text: 'SCIENCE ET TECHNOLOGIE',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X81',
                text: 'Pratiquer des démarches scientifiques et technologiques',
                parent: 'bouchon-X8'
            },
            {
                id: 'bouchon-X811',
                text: ' formuler une question ou une problématique scientifique ou technologique simple ;',
                parent: 'bouchon-X81'
            },
            {
                id: 'bouchon-X812',
                text: ' proposer une ou des hypothèses pour répondre à une question ou un problème ;',
                parent: 'bouchon-X81'
            },
            {
                id: 'bouchon-X813',
                text: ' proposer des expériences simples pour tester une hypothèse ;',
                parent: 'bouchon-X81'
            },
            {
                id: 'bouchon-X814',
                text: ' interpréter un résultat, en tirer une conclusion ;',
                parent: 'bouchon-X81'
            },
            {
                id: 'bouchon-X815',
                text: ' formaliser une partie de sa recherche sous une forme écrite ou orale.',
                parent: 'bouchon-X81'
            },
            {
                id: 'bouchon-X82',
                text: 'Concevoir, créer, réaliser',
                parent: 'bouchon-X8'
            },
            {
                id: 'bouchon-X821',
                text: ' Identifier les évolutions des besoins et des objets techniques dans leur contexte.',
                parent: 'bouchon-X82'
            },
            {
                id: 'bouchon-X822',
                text: ' Identifier les principales familles de matériaux.',
                parent: 'bouchon-X82'
            },
            {
                id: 'bouchon-X823',
                text: ' Décrire le fonctionnement d’objets techniques, leurs fonctions et leurs composants.',
                parent: 'bouchon-X82'
            },
            {
                id: 'bouchon-X824',
                text: ' Réaliser en équipe tout ou une partie d’un objet technique répondant à un besoin.',
                parent: 'bouchon-X82'
            },
            {
                id: 'bouchon-X825',
                text: ' Repérer et comprendre la communication et la gestion de l’information.',
                parent: 'bouchon-X82'
            },
            {
                id: 'bouchon-X83',
                text: 'S’approprier des outils et des méthodes',
                parent: 'bouchon-X8'
            },
            {
                id: 'bouchon-X831',
                text: ' Choisir ou utiliser le matériel adapté pour mener une observation, effectuer une mesure, réaliser une expérience ou une production.',
                parent: 'bouchon-X83'
            },
            {
                id: 'bouchon-X832',
                text: ' Faire le lien entre la mesure réalisée, les unités et l’outil utilisés.',
                parent: 'bouchon-X83'
            },
            {
                id: 'bouchon-X833',
                text: ' Garder une trace écrite ou numérique des recherches, des observations et des expériences réalisées.',
                parent: 'bouchon-X83'
            },
            {
                id: 'bouchon-X834',
                text: ' Organiser seul ou en groupe un espace de réalisation expérimentale.',
                parent: 'bouchon-X83'
            },
            {
                id: 'bouchon-X835',
                text: ' Effectuer des recherches bibliographiques simples et ciblées. Extraire les informations pertinentes d’un document et les mettre en relation pour répondre à une question.',
                parent: 'bouchon-X83'
            },
            {
                id: 'bouchon-X836',
                text: ' Utiliser les outils mathématiques adaptés.',
                parent: 'bouchon-X83'
            },
            {
                id: 'bouchon-X84',
                text: 'Pratiquer des langages',
                parent: 'bouchon-X8'
            },
            {
                id: 'bouchon-X841',
                text: ' Rendre compte des observations, expériences, hypothèses, conclusions en utilisant un vocabulaire précis.',
                parent: 'bouchon-X84'
            },
            {
                id: 'bouchon-X842',
                text: ' Exploiter un document constitué de divers supports (texte, schéma, graphique, tableau, algorithme simple).',
                parent: 'bouchon-X84'
            },
            {
                id: 'bouchon-X843',
                text: ' Utiliser différents modes de représentation formalisés (schéma, dessin, croquis, tableau, graphique, texte).',
                parent: 'bouchon-X84'
            },
            {
                id: 'bouchon-X844',
                text: ' Expliquer un phénomène à l’oral et à l’écrit.',
                parent: 'bouchon-X84'
            },
            {
                id: 'bouchon-X85',
                text: 'Mobiliser des outils numériques',
                parent: 'bouchon-X8'
            },
            {
                id: 'bouchon-X851',
                text: ' Utiliser des outils numériques pour :',
                parent: 'bouchon-X85'
            },
            {
                id: 'bouchon-X8511',
                text: 'communiquer des résultats ;',
                parent: 'bouchon-X851'
            },
            {
                id: 'bouchon-X8512',
                text: 'traiter des données ;',
                parent: 'bouchon-X851'
            },
            {
                id: 'bouchon-X8513',
                text: 'simuler des phénomènes ;',
                parent: 'bouchon-X851'
            },
            {
                id: 'bouchon-X8514',
                text: 'représenter des objets techniques.',
                parent: 'bouchon-X851'
            },
            {
                id: 'bouchon-X852',
                text: ' Identifier des sources d’informations fiables.',
                parent: 'bouchon-X85'
            },
            {
                id: 'bouchon-X86',
                text: 'Adopter un comportement éthique et responsable',
                parent: 'bouchon-X8'
            },
            {
                id: 'bouchon-X861',
                text: ' Relier des connaissances acquises en sciences et technologie à des questions de santé, de sécurité et d’environnement.',
                parent: 'bouchon-X86'
            },
            {
                id: 'bouchon-X862',
                text: ' Mettre en oeuvre une action responsable et citoyenne, individuellement ou collectivement, en et hors milieu scolaire, et en témoigner.',
                parent: 'bouchon-X86'
            },
            {
                id: 'bouchon-X87',
                text: 'Se situer dans l’espace et dans le temps',
                parent: 'bouchon-X8'
            },
            {
                id: 'bouchon-X871',
                text: ' Replacer des évolutions scientifiques et technologiques dans un contexte historique, géographique, économique et culturel.',
                parent: 'bouchon-X87'
            },
            {
                id: 'bouchon-X872',
                text: ' Se situer dans l’environnement et maitriser les notions d’échelle.',
                parent: 'bouchon-X87'
            },
            {
                id: 'bouchon-X9',
                text: 'MATHEMATIQUES',
                parent: 'bouchon-X'
            },
            {
                id: 'bouchon-X91',
                text: 'Chercher',
                parent: 'bouchon-X9'
            },
            {
                id: 'bouchon-X911',
                text: ' Prélever et organiser les informations nécessaires à la résolution de problèmes à partir de supports variés : textes, tableaux, diagrammes, graphiques, dessins, schémas, etc.',
                parent: 'bouchon-X91'
            },
            {
                id: 'bouchon-X912',
                text: ' S’engager dans une démarche, observer, questionner, manipuler, expérimenter, émettre des hypothèses, en mobilisant des outils ou des procédures mathématiques déjà rencontrées, en élaborant un raisonnement adapté à une situation nouvelle.',
                parent: 'bouchon-X91'
            },
            {
                id: 'bouchon-X913',
                text: ' Tester, essayer plusieurs pistes de résolution.',
                parent: 'bouchon-X91'
            },
            {
                id: 'bouchon-X92',
                text: 'Modéliser',
                parent: 'bouchon-X9'
            },
            {
                id: 'bouchon-X921',
                text: ' Utiliser les mathématiques pour résoudre quelques problèmes issus de situations de la vie quotidienne.',
                parent: 'bouchon-X92'
            },
            {
                id: 'bouchon-X922',
                text: ' Reconnaitre et distinguer des problèmes relevant de situations additives, multiplicatives, de proportionnalité.',
                parent: 'bouchon-X92'
            },
            {
                id: 'bouchon-X923',
                text: ' Reconnaitre des situations réelles pouvant être modélisées par des relations géométriques (alignement, parallélisme, perpendicularité, symétrie).',
                parent: 'bouchon-X92'
            },
            {
                id: 'bouchon-X924',
                text: ' Utiliser des propriétés géométriques pour reconnaitre des objets.',
                parent: 'bouchon-X92'
            },
            {
                id: 'bouchon-X93',
                text: 'Représenter',
                parent: 'bouchon-X9'
            },
            {
                id: 'bouchon-X931',
                text: ' Utiliser des outils pour représenter un problème : dessins, schémas, diagrammes, graphiques, écritures avec parenthésages, …',
                parent: 'bouchon-X93'
            },
            {
                id: 'bouchon-X932',
                text: ' Produire et utiliser diverses représentations des fractions simples et des nombres décimaux.',
                parent: 'bouchon-X93'
            },
            {
                id: 'bouchon-X933',
                text: ' Analyser une figure plane sous différents aspects (surface, contour de celle-ci, lignes et points).',
                parent: 'bouchon-X93'
            },
            {
                id: 'bouchon-X934',
                text: ' Reconnaitre et utiliser des premiers éléments de codages d’une figure plane ou d’un solide.',
                parent: 'bouchon-X93'
            },
            {
                id: 'bouchon-X935',
                text: ' Utiliser et produire des représentations de solides et de situations spatiales.',
                parent: 'bouchon-X93'
            },
            {
                id: 'bouchon-X94',
                text: 'Raisonner',
                parent: 'bouchon-X9'
            },
            {
                id: 'bouchon-X940',
                text: ' Résoudre des problèmes nécessitant l’organisation de données multiples ou la construction d’une démarche qui combine des étapes de raisonnement.',
                parent: 'bouchon-X94'
            },
            {
                id: 'bouchon-X941',
                text: ' En géométrie, passer progressivement de la perception au contrôle par les instruments pour amorcer des raisonnements s’appuyant uniquement sur des propriétés des figures et sur des relations entre objets.',
                parent: 'bouchon-X94'
            },
            {
                id: 'bouchon-X942',
                text: ' Progresser collectivement dans une investigation en sachant prendre en compte le point de vue d’autrui.',
                parent: 'bouchon-X94'
            },
            {
                id: 'bouchon-X943',
                text: ' Justifier ses affirmations et rechercher la validité des informations dont on dispose.',
                parent: 'bouchon-X94'
            },
            {
                id: 'bouchon-X96',
                text: 'Calculer',
                parent: 'bouchon-X9'
            },
            {
                id: 'bouchon-X961',
                text: ' Calculer avec des nombres décimaux, de manière exacte ou approchée, en utilisant des stratégies ou des techniques appropriées (mentalement, en ligne, ou en posant les opérations).',
                parent: 'bouchon-X96'
            },
            {
                id: 'bouchon-X962',
                text: ' Contrôler la vraisemblance de ses résultats.',
                parent: 'bouchon-X96'
            },
            {
                id: 'bouchon-X963',
                text: ' Utiliser une calculatrice pour trouver ou vérifier un résultat.',
                parent: 'bouchon-X96'
            },
            {
                id: 'bouchon-X97',
                text: 'Communiquer',
                parent: 'bouchon-X9'
            },
            {
                id: 'bouchon-X971',
                text: ' Utiliser progressivement un vocabulaire adéquat et/ou des notations adaptées pour décrire une situation, exposer une argumentation.',
                parent: 'bouchon-X97'
            },
            {
                id: 'bouchon-X972',
                text: ' Expliquer sa démarche ou son raisonnement, comprendre les explications d’un autre et argumenter dans l’échange.',
                parent: 'bouchon-X97'
            }
        ],
        dateDerniereSauvegarde: new Date('2017-07-03T15:57:12.878Z'),
        journal: [
            {
                id: 'bouchon-30', date: new Date('2024-09-01T22:00:00.000Z'),
                remarque: 'cahier journal du 2 septembre 2021 : une belle journée studieuse',
                temps: [
                    {
                        debut: '9h00', fin: '9h15',
                        id: 'bouchon-28',
                        groupes: [{
                            id: 'bouchon-40', nom: 'accueil',
                            commentaire: 'Temps d\'accueil : un élève en retard mais le temps a été calme',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: ['bouchon-evnr1v6a', 'bouchon-rvns1q6a', 'bouchon-lkjsf2d3'],
                            competences: [
                                'bouchon-j1_264'
                            ]
                        }]
                    },
                    {
                        debut: '9h15', fin: '9h45',
                        id: 'bouchon-29', groupes: [{
                            id: 'bouchon-39', nom: 'math',
                            commentaire: 'début de journée',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: ['bouchon-evnr1v6a', 'bouchon-rvns1q6a', 'bouchon-lkjsf2d3'],
                            competences: [
                                'bouchon-j1_264'
                            ]
                        }]
                    }
                ]
            },
            {
                id: 'bouchon-31', date: new Date('2024-09-02T22:00:00.000Z'),
                remarque: 'Cahier journal du 3/09/21',
                temps: [
                    {
                        debut: '9h00', fin: '9h15',
                        id: 'bouchon-32',
                        groupes: [{
                            id: 'bouchon-38', nom: 'T1',
                            commentaire: 'Comm T1',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: [
                                'bouchon-evnr1v6a',
                                'bouchon-rvns1q6a',
                                'bouchon-lkjsf2d3'
                            ],
                            competences: [
                                'bouchon-j1_263',
                                'bouchon-JF1221'
                            ]
                        }]
                    },
                    {
                        debut: '9h15', fin: '9h30',
                        id: 'bouchon-33',
                        groupes: [{
                            id: 'bouchon-37', nom: 'T2',
                            commentaire: 'Comm T2',
                            objectifs: 'obj', consignes: 'cons', materiel: 'mat',
                            eleves: [
                                'bouchon-evnr1v6a',
                                'bouchon-rvns1q6a'
                            ],
                            competences: [
                                'bouchon-j1_266',
                                'bouchon-JF1222'
                            ]
                        }]
                    }
                ]
            }
        ],
        taches: [
            {
                id: 'bouchon-36', titre: 'Taches 1',
                echeances: [
                    {
                        id: 'bouchon-34', nom: 'Echéance 1-2',
                        date: new Date('2017-09-21T22:00:00.000Z'),
                        termine: false
                    },
                    {
                        id: 'bouchon-35', nom: 'Echéance 1-1',
                        date: new Date('2017-09-14T22:00:00.000Z'),
                        termine: false
                    }
                ]
            },
            {
                id: 'bouchon-36a', titre: 'Taches 2',
                echeances: [
                    {
                        id: 'bouchon-34a', nom: 'Echéance 2-1',
                        date: new Date('2020-09-21T22:00:00.000Z'),
                        termine: false
                    }
                ]
            },
            {
                id: 'bouchon-36b', titre: 'Taches 3',
                echeances: [
                    {
                        id: 'bouchon-34b', nom: 'Echéance 3-1',
                        date: new Date('2026-09-21T22:00:00.000Z'),
                        termine: false
                    },
                    {
                        id: 'bouchon-35b', nom: 'Echéance 3-1',
                        date: new Date('2024-08-21T22:00:00.000Z'),
                        termine: false
                    },
                    {
                        id: 'bouchon-35bb', nom: 'Echéance 3-termineFin',
                        date: new Date('2024-08-22T22:00:00.000Z'),
                        termine: true
                    },
                    {
                        id: 'bouchon-35bbb', nom: 'Echéance 3-termineDebut',
                        date: new Date('2024-08-02T22:00:00.000Z'),
                        termine: true
                    }
                ]
            }
        ]
    };
}