import { Annee } from './model';

export class Jdd {
    static ajouterDesErreurAuJdd(annee: Annee) {
        // problème E1
        annee.eleves[1].commentairesDePeriode[0].idPeriode = 'mauvaisIdPeriode';
        // problème E2
        annee.eleves[1].parcoursDePeriode[0].idPeriode = 'mauvaisIdPeriode';

        // problème J1
        annee.journal[1].temps[0].groupes[0].eleves.push('mauvaisIdEleve');
        // problème J2
        annee.journal[1].temps[0].groupes[0].competences.push('mauvaisIdCompetence');

        // problème N1
        annee.eleves[1].notes[1].idPeriode = 'mauvaisIdPeriode';
        // problème N2 + PRO5
        annee.eleves[1].notes[1].idItem = 'mauvaisIdCompetence';
        // problème N3
        annee.eleves[1].notes[1].valeurEvaluation = 'mauvaiseValeurEvaluation';
        // problème N4
        annee.eleves[1].notes[0].idsProjets?.push('mauvaisIdProjet');

        // problème P1
        annee.periodes.push({ id: 'periodeMauvaise1', debut: new Date('2025-02-27T00:00:00.000Z'), fin: undefined, nom: 'Période mal renseignée' });
        // problème P2
        annee.periodes.push({ id: 'periodeMauvaise2', debut: new Date('2025-02-28T00:00:00.000Z'), fin: new Date('2025-04-09T00:00:00.000Z'), nom: 'Période mal renseignée' });

        // problème PRO1 et PRO2
        annee.projets[0].sousProjetParPeriode?.push({ id: 'bouchon-p1p2', idPeriode: 'mauvaisIdPeriode', idCompetences: ['mauvaisIdCompetence'], commentaire: 'comme cela' });
        // problème PRO3
        annee.projets[0].idsEleve?.push('mauvaisIdEleve');
        // problème PRO4
        annee.eleves[1].notes[1].idsProjets = [];
    }

    // Jeu de données riche
    static JDD_RICHE: Annee = {
        versionMajeureApplication: 2024,
        motDePasse: 'démonstration',
        id: 'bouchon-0',
        enteteEdition: '<img class="maclasse-afficherAgauche" src="data:image/jpeg;base64,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"/><div class="maclasse-afficherAdroiteViaPosition">Académie XXXX<br/>Circonscription XXX<br/>2024-2025<br/>DITEP<br/>1 rue de l\'école</div>',
        enseignant: 'M. Toto',
        cycleNiveau: '2 / CE1',
        anneeScolaire: '2025-2026',
        projets: [
            {
                id: 'bouchon-p1', nom: 'projet1', description: 'Description globale du <b>projet 1</b>',
                idsEleve: ['bouchon-evnr1v6a'],
                sousProjetParPeriode: [
                    { id: 'bouchon-p1p1', idPeriode: 'bouchon-1', idCompetences: ['M-1-1-1-7', 'M-1-1-1-6'], commentaire: 'comme ceci' },
                    { id: 'bouchon-p1p2', idPeriode: 'bouchon-2', idCompetences: ['M-1-1-1-5', 'M-1-1-1-4'], commentaire: 'comme cela' }
                ]
            },
            {
                id: 'bouchon-p2', nom: 'projet2', description: 'Description globale du <i>projet 2</i>',
                idsEleve: [],
                sousProjetParPeriode: [
                    { id: 'bouchon-p2p1', idPeriode: 'bouchon-1', idCompetences: ['M-1-1-1-3', 'M-1-1-1-2'], commentaire: 'encore ci' },
                    { id: 'bouchon-p2p2', idPeriode: 'bouchon-2', idCompetences: ['M-1-1-1-7', 'M-1-1-1-6'], commentaire: 'encore ça' }
                ]
            }
        ],
        periodes: [
            {
                id: 'bouchon-1',
                debut: new Date('2025-08-31T22:00:00.000Z'),
                fin: new Date('2025-10-17T22:00:00.000Z'),
                nom: 'Periode 1'
            },
            {
                id: 'bouchon-2',
                debut: new Date('2025-11-02T23:00:00.000Z'),
                fin: new Date('2025-12-20T23:00:00.000Z'),
                nom: 'Periode 2'
            },
            {
                id: 'bouchon-3',
                debut: new Date('2026-01-04T23:00:00.000Z'),
                fin: new Date('2026-02-14T23:00:00.000Z'),
                nom: 'Periode 3'
            },
            {
                id: 'bouchon-4',
                debut: new Date('2026-03-01T23:00:00.000Z'),
                fin: new Date('2026-04-10T22:00:00.000Z'),
                nom: 'Periode 4'
            },
            {
                id: 'bouchon-5',
                debut: new Date('2026-04-26T22:00:00.000Z'),
                fin: new Date('2026-07-03T22:00:00.000Z'),
                nom: 'Periode 5'
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
            P: 'Père',
            M: 'Mère',
            S: 'Structure',
            F: 'Famille d\'accueil',
            A: 'Autre'
        },
        mapRaisonAbsence: {
            I: 'Inclusion',
            O: 'Orthophoniste',
            PM: 'Psychomotricité',
            P: 'Psychologue',
            A: 'Autre'
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
                        id: '2021b', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022b', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023b', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024b', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025b', annee: 2025,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: 'acc',
                datesPPA: 'ppa',
                datesESS: 'ess',
                notes: [],
                commentairesDePeriode: [],
                parcoursDePeriode: []
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
                        id: '2021c', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022c', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023c', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024c', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025c', annee: 2025,
                        niveau: 'CE1',
                        etablissement: '',
                        accompagnement: ''
                    }
                ],
                dateAdmission: new Date('2015-09-01T00:00:00.000Z'),
                accueil: '',
                datesPPA: '',
                datesESS: '',
                absences: [
                    { id: 'ca1', frequence: 2, raison: 'I', jour: 2, heureDebut: '8H00', heureFin: '12h00' },
                    { id: 'ca1', frequence: 2, raison: 'I', jour: 3, heureDebut: '8H00', heureFin: '12h00' },
                    { id: 'ca1', frequence: 2, raison: 'I', jour: 4, heureDebut: '8H00', heureFin: '12h00' }
                ],
                inclusion: { id: 'bouchon-10' },
                notes: [
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1nLieep1',
                        idItem: 'M-1-1-1-7',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1nLieep2',
                        idItem: 'M-1-1-1-6',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1nLieep3',
                        idItem: 'M-1-1-1-5',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1nLieep4',
                        idItem: 'M-1-1-1-4',
                        constatEnPreparation: 'note lié au projet 1',
                        idsProjets: ['bouchon-p1']
                    },
                    {
                        commentaireEvaluationPublic: 'comm bulletin note P1',
                        dateCreation: new Date('2025-09-15T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n1',
                        idItem: 'M-2-2-4',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta Prépa P1 e1n1'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n2',
                        idItem: 'M-3-1-3',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n2'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n3',
                        idItem: 'M-3-1-1',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n3'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n4',
                        idItem: 'M-3-1-2',
                        valeurEvaluation: '3',
                        constatEnPreparation: 'consta Prépa P1 e1n4'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireAA',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n5',
                        idItem: 'M-3-1',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta Prépa P1 e1n5'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n6',
                        idItem: 'M-3-2-2',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n6'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n7',
                        idItem: 'M-3-2-1',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n7'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n8',
                        idItem: 'M-3-3-5',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n8'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n9',
                        idItem: 'M-3-3-4',
                        valeurEvaluation: 'a',
                        constatEnPreparation: 'consta Prépa P1 e1n9'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n10',
                        idItem: 'M-3-3-3',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n10'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n11',
                        idItem: 'M-3-3-2',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n11'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaireBB',
                        dateCreation: new Date('2025-09-22T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e1n12',
                        idItem: 'M-3-3-1',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e1n12'
                    },
                    {
                        commentaireEvaluationPublic: 'eval P2',
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1n13',
                        idItem: 'M-4-2-4',
                        valeurEvaluation: '1',
                        constatEnPreparation: 'consta P2 e1n13',
                    },
                    {
                        dateCreation: new Date('2025-12-02T00:00:00.000Z'),
                        idPeriode: 'bouchon-2',
                        id: 'bouchon-e1n14',
                        idItem: 'M-4-2-3',
                        constatEnPreparation: 'consta P2 encore e1n14'
                    }
                ],
                commentairesDePeriode: [
                    { id: 'cc1', idPeriode: 'bouchon-1', commentaire: 'Bravo pour cette période 1!' },
                    { id: 'cc2', idPeriode: 'bouchon-2', commentaire: 'Bravo pour cette période 2!' },
                    { id: 'cc3', idPeriode: 'bouchon-3', commentaire: 'Bravo pour cette période 3!' },
                    { id: 'cc4', idPeriode: 'bouchon-4', commentaire: 'Bravo pour cette période 4!' }
                ],
                parcoursDePeriode: [
                    { id: 'cp1', idPeriode: 'bouchon-1', commentaire: 'Bravo pour cette période 1!' }
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
                        id: '2021', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025', annee: 2025,
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
                        dateCreation: new Date('2025-09-16T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e2n1',
                        idItem: 'M-4-2-4',
                        valeurEvaluation: 'n',
                        constatEnPreparation: 'consta Prépa P1 e2n1'
                    },
                    {
                        commentaireEvaluationPublic: 'commentaire seconde competence sur le domaine',
                        dateCreation: new Date('2025-09-17T00:00:00.000Z'),
                        idPeriode: 'bouchon-1',
                        id: 'bouchon-e2n2',
                        idItem: 'M-4-2-3',
                        valeurEvaluation: '2',
                        constatEnPreparation: 'consta Prépa P1 e2n2'
                    }
                ],
                commentairesDePeriode: [],
                parcoursDePeriode: []
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
                        id: '2021a', annee: 2021,
                        niveau: 'PS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2022a', annee: 2022,
                        niveau: 'MS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2023a', annee: 2023,
                        niveau: 'GS',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2024a', annee: 2024,
                        niveau: 'CP',
                        etablissement: '',
                        accompagnement: ''
                    },
                    {
                        id: '2025a', annee: 2025,
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
                notes: [],
                commentairesDePeriode: [],
                parcoursDePeriode: []
            }
        ],
        competences: [
            {
                "id": "M",
                "parent": "#",
                "text": "Mathématiques"
            },
            {
                "id": "M-1",
                "parent": "M",
                "text": "Découvrir les nombres"
            },
            {
                "id": "M-1-1",
                "parent": "M-1",
                "text": "Exprimer une quantité par un nombre"
            },
            {
                "id": "M-1-1-1",
                "parent": "M-1-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-1-1-1-1",
                "parent": "M-1-1-1",
                "text": "Comprendre qu’une quantité d’objets ne dépend ni de la nature de ces objets ni de leur organisation spatiale."
            },
            {
                "id": "M-1-1-1-2",
                "parent": "M-1-1-1",
                "text": "Comprendre que si on ajoute un objet à une collection, le nombre qui désigne sa quantité est le suivant dans la suite orale des noms des nombres."
            },
            {
                "id": "M-1-1-1-3",
                "parent": "M-1-1-1",
                "text": "Comprendre que dans la suite orale des noms des nombres, chaque nombre s’obtient en ajoutant un au nombre précédent"
            },
            {
                "id": "M-1-1-1-4",
                "parent": "M-1-1-1",
                "text": "Dénombrer une collection d’objets (jusqu’à trois, voire quatre)."
            },
            {
                "id": "M-1-1-1-5",
                "parent": "M-1-1-1",
                "text": "Constituer une collection (jusqu’à trois, voire quatre objets) d’un cardinal donné."
            },
            {
                "id": "M-1-1-1-6",
                "parent": "M-1-1-1",
                "text": "Comparer des quantités."
            },
            {
                "id": "M-1-1-1-7",
                "parent": "M-1-1-1",
                "text": "Composer et décomposer des nombres (deux, trois, voire quatre)."
            },
            {
                "id": "M-1-1-1-8",
                "parent": "M-1-1-1",
                "text": "Manipuler et verbaliser des compositions et des décompositions de nombres"
            },
            {
                "id": "M-1-1-1-9",
                "parent": "M-1-1-1",
                "text": "Associer une quantité, le nom d’un nombre et une écriture chiffrée."
            },
            {
                "id": "M-1-1-1-10",
                "parent": "M-1-1-1",
                "text": "Connaitre la comptine numérique de un à six."
            },
            {
                "id": "M-1-1-2",
                "parent": "M-1-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-1-2-1",
                "parent": "M-1-1-2",
                "text": "Poursuivre la compréhension qu’une quantité d’objets ne dépend ni de leur nature ni de leur organisation spatiale."
            },
            {
                "id": "M-1-1-2-2",
                "parent": "M-1-1-2",
                "text": "Poursuivre la compréhension des faits suivants : si on ajoute un objet à une collection, le nombre qui désigne sa quantité est le suivant."
            },
            {
                "id": "M-1-1-2-3",
                "parent": "M-1-1-2",
                "text": "Poursuivre la compréhension des faits suivants : dans la suite orale des nombres, chaque nombre s’obtient en ajoutant un au nombre précédent."
            },
            {
                "id": "M-1-1-2-4",
                "parent": "M-1-1-2",
                "text": "Parcourir une collection en passant une et une seule fois par chacun de ses éléments."
            },
            {
                "id": "M-1-1-2-5",
                "parent": "M-1-1-2",
                "text": "Dénombrer une collection d’objets (jusqu’à six)."
            },
            {
                "id": "M-1-1-2-6",
                "parent": "M-1-1-2",
                "text": "Constituer une collection d’un cardinal donné (jusqu’à six objets)."
            },
            {
                "id": "M-1-1-2-7",
                "parent": "M-1-1-2",
                "text": "Comparer des quantités."
            },
            {
                "id": "M-1-1-2-8",
                "parent": "M-1-1-2",
                "text": "Composer et décomposer des nombres inférieurs ou égaux à six."
            },
            {
                "id": "M-1-1-2-9",
                "parent": "M-1-1-2",
                "text": "Manipuler et verbaliser des compositions et des décompositions de nombres."
            },
            {
                "id": "M-1-1-2-10",
                "parent": "M-1-1-2",
                "text": "Associer une quantité, le nom d’un nombre et une écriture chiffrée."
            },
            {
                "id": "M-1-1-2-11",
                "parent": "M-1-1-2",
                "text": "Écrire en chiffres les nombres de un à six."
            },
            {
                "id": "M-1-1-2-12",
                "parent": "M-1-1-2",
                "text": "Connaitre la comptine numérique de un à douze."
            },
            {
                "id": "M-1-1-3",
                "parent": "M-1-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-1-3-1",
                "parent": "M-1-1-3",
                "text": "Poursuivre la compréhension qu’une quantité d’objets ne dépend ni de la nature de ces objets ni de leur organisation spatiale."
            },
            {
                "id": "M-1-1-3-2",
                "parent": "M-1-1-3",
                "text": "Poursuivre la compréhension des faits suivants : si on ajoute un objet à une collection, le nombre qui désigne sa quantité est le suivant dans la suite orale des noms des nombres."
            },
            {
                "id": "M-1-1-3-3",
                "parent": "M-1-1-3",
                "text": "Poursuivre la compréhension des faits suivants : dans la suite orale des nombres, chaque nombre s’obtient en ajoutant un au nombre précédent."
            },
            {
                "id": "M-1-1-3-4",
                "parent": "M-1-1-3",
                "text": "Poursuivre les stratégies de parcours d’une collection en passant une et une seule fois par chacun de ses éléments."
            },
            {
                "id": "M-1-1-3-5",
                "parent": "M-1-1-3",
                "text": "Dénombrer une collection d’objets (jusqu’à dix, voire au-delà)."
            },
            {
                "id": "M-1-1-3-6",
                "parent": "M-1-1-3",
                "text": "Constituer une collection d’un cardinal donné (jusqu’à dix, voire au-delà)."
            },
            {
                "id": "M-1-1-3-7",
                "parent": "M-1-1-3",
                "text": "Comparer des quantités."
            },
            {
                "id": "M-1-1-3-8",
                "parent": "M-1-1-3",
                "text": "Composer et décomposer des nombres inférieurs ou égaux à dix, voire au-delà."
            },
            {
                "id": "M-1-1-3-9",
                "parent": "M-1-1-3",
                "text": "Manipuler et verbaliser des compositions et des décompositions de nombres. Cela permet d’installer le fait que, dans une composition, l’ordre ne compte pas."
            },
            {
                "id": "M-1-1-3-10",
                "parent": "M-1-1-3",
                "text": "Surcompter (c’est-à-dire compter de un en un à partir d’un nombre donné)."
            },
            {
                "id": "M-1-1-3-11",
                "parent": "M-1-1-3",
                "text": "Associer une quantité, le nom d’un nombre et une écriture chiffrée."
            },
            {
                "id": "M-1-1-3-12",
                "parent": "M-1-1-3",
                "text": "Écrire en chiffres les nombres de un à dix."
            },
            {
                "id": "M-1-1-3-13",
                "parent": "M-1-1-3",
                "text": "Connaitre et utiliser la comptine numérique jusqu’à trente."
            },
            {
                "id": "M-1-2",
                "parent": "M-1",
                "text": "Exprimer un rang ou une position par un nombre"
            },
            {
                "id": "M-1-2-1",
                "parent": "M-1-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-2-1-1",
                "parent": "M-1-2-1",
                "text": "Comprendre la notion de rang."
            },
            {
                "id": "M-1-2-1-2",
                "parent": "M-1-2-1",
                "text": "Déterminer l’effet d’un déplacement sur une position."
            },
            {
                "id": "M-1-2-1-3",
                "parent": "M-1-2-1",
                "text": "Se familiariser avec le début de la bande numérique."
            },
            {
                "id": "M-1-2-2",
                "parent": "M-1-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-1-2-2-1",
                "parent": "M-1-2-2",
                "text": "Comprendre la notion de rang d’un objet."
            },
            {
                "id": "M-1-2-2-2",
                "parent": "M-1-2-2",
                "text": "Déterminer l’effet d’un déplacement sur une position."
            },
            {
                "id": "M-1-2-2-3",
                "parent": "M-1-2-2",
                "text": "Comprendre le lien entre un ajout et un avancement et celui entre un retrait et un recul."
            },
            {
                "id": "M-1-2-2-4",
                "parent": "M-1-2-2",
                "text": "Construire la bande numérique jusqu’à dix."
            },
            {
                "id": "M-2",
                "parent": "M",
                "text": "Utiliser les nombres pour résoudre des problèmes"
            },
            {
                "id": "M-2-1",
                "parent": "M-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-2-1-1",
                "parent": "M-2-1",
                "text": "Recherche du tout ou d’une partie dans un problème de parties-tout."
            },
            {
                "id": "M-2-2",
                "parent": "M-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-2-2-1",
                "parent": "M-2-2",
                "text": "Rechercher le tout ou une partie dans un problème de parties-tout."
            },
            {
                "id": "M-2-2-2",
                "parent": "M-2-2",
                "text": "Trouver une position finale à partir d’une position initiale et d’un déplacement sur une piste."
            },
            {
                "id": "M-2-2-3",
                "parent": "M-2-2",
                "text": "Rechercher le tout dans un problème de groupements."
            },
            {
                "id": "M-2-2-4",
                "parent": "M-2-2",
                "text": "Rechercher la valeur d’une part dans un problème de partage équitable."
            },
            {
                "id": "M-2-3",
                "parent": "M-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-2-3-1",
                "parent": "M-2-3",
                "text": "Déterminer le tout ou une partie dans un problème de parties-tout (d’abord deux parties, puis éventuellement trois)."
            },
            {
                "id": "M-2-3-2",
                "parent": "M-2-3",
                "text": "Déterminer la quantité d’objets ayant été ajoutée ou retirée  à une collection à partir de ses quantités initiale et finale."
            },
            {
                "id": "M-2-3-3",
                "parent": "M-2-3",
                "text": "Déterminer la position finale (respectivement initiale) à partir de la position initiale (respectivement finale) et d’un déplacement sur une piste du type du jeu de l’oie ou sur la bande numérique."
            },
            {
                "id": "M-2-3-4",
                "parent": "M-2-3",
                "text": "Déterminer le cardinal d’une collection à partir de celui d’une autre collection et de l’écart entre les deux."
            },
            {
                "id": "M-2-3-5",
                "parent": "M-2-3",
                "text": "Déterminer le tout dans un problème de groupement d'objets."
            },
            {
                "id": "M-2-3-6",
                "parent": "M-2-3",
                "text": "Déterminer la valeur d’une part dans un problème de partage équitable (avec éventuelement un reste)."
            },
            {
                "id": "M-3",
                "parent": "M",
                "text": "Explorer les solides et les formes planes"
            },
            {
                "id": "M-3-1",
                "parent": "M-3",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-3-1-1",
                "parent": "M-3-1",
                "text": "Reconnaitre, trier et classer des objets selon leur forme."
            },
            {
                "id": "M-3-1-2",
                "parent": "M-3-1",
                "text": "Percevoir l’invariance de la forme d’un objet par rapport aux déplacements qu’il peut subir."
            },
            {
                "id": "M-3-1-3",
                "parent": "M-3-1",
                "text": "Reproduire des assemblages de solides ou de formes planes."
            },
            {
                "id": "M-3-2",
                "parent": "M-3",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-3-2-1",
                "parent": "M-3-2",
                "text": "Reconnaitre et classer des solides (cube, boule, pyramide à base carrée, cylindre) et des formes géométriques planes (triangle, carré, disque)."
            },
            {
                "id": "M-3-2-2",
                "parent": "M-3-2",
                "text": "Reproduire des assemblages de solides ou de formes planes (au maximum cinq)."
            },
            {
                "id": "M-3-3",
                "parent": "M-3",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-3-3-1",
                "parent": "M-3-3",
                "text": "Décrire quelques solides simples : cube, pavé, boule, pyramides à base carrée ou triangulaire, cylindre, cône."
            },
            {
                "id": "M-3-3-2",
                "parent": "M-3-3",
                "text": "Reconnaitre, trier et classer des formes géométriques planes, indépendamment d’autres critères comme la couleur, la taille, l’orientation."
            },
            {
                "id": "M-3-3-3",
                "parent": "M-3-3",
                "text": "Décrire et nommer quelques figures géométriques simples : carré, rectangle, triangle, disque."
            },
            {
                "id": "M-3-3-4",
                "parent": "M-3-3",
                "text": "Reproduire des assemblages de solides (au maximum cinq) et de formes planes (au maximum huit)."
            },
            {
                "id": "M-3-3-5",
                "parent": "M-3-3",
                "text": "S’approprier la règle comme outil de tracé."
            },
            {
                "id": "M-4",
                "parent": "M",
                "text": "Explorer des grandeurs"
            },
            {
                "id": "M-4-1",
                "parent": "M-4",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-4-1-1",
                "parent": "M-4-1",
                "text": "La longueur : reconnaitre un objet de même longueur qu'un objet donné."
            },
            {
                "id": "M-4-1-2",
                "parent": "M-4-1",
                "text": "La longueur : comparer des objets selon leur longueur."
            },
            {
                "id": "M-4-2",
                "parent": "M-4",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-4-2-1",
                "parent": "M-4-2",
                "text": "La longueur : comparer directement des longueurs d'objets rectilignes et verbaliser le résultat."
            },
            {
                "id": "M-4-2-2",
                "parent": "M-4-2",
                "text": "La longueur : classer des objets rectilignes selon leur longueur."
            },
            {
                "id": "M-4-2-3",
                "parent": "M-4-2",
                "text": "La longueur : ordonner des objets rectilignes selon leur longueur et verbaliser le résultat."
            },
            {
                "id": "M-4-2-4",
                "parent": "M-4-2",
                "text": "La masse : comparer les masses de deux objets."
            },
            {
                "id": "M-4-3",
                "parent": "M-4",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-4-3-1",
                "parent": "M-4-3",
                "text": "La longueur : comparer indirectement des longueurs. d'objets rectilignes"
            },
            {
                "id": "M-4-3-2",
                "parent": "M-4-3",
                "text": "La longueur : ordonner des objets rectilignes selon leur longueur (au maximum cinq)."
            },
            {
                "id": "M-4-3-3",
                "parent": "M-4-3",
                "text": "La longueur : produire un objet rectiligne de même longueur qu'un objet donné."
            },
            {
                "id": "M-4-3-4",
                "parent": "M-4-3",
                "text": "La masse : ordonner les masses de trois objets et verbaliser les résultats."
            },
            {
                "id": "M-4-3-5",
                "parent": "M-4-3",
                "text": "La masse : reconnaitre l’égalité de deux masses et verbaliser le résultat."
            },
            {
                "id": "M-5",
                "parent": "M",
                "text": "Se familiariser avec les motifs organisés"
            },
            {
                "id": "M-5-1",
                "parent": "M-5",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "M-5-1-1",
                "parent": "M-5-1",
                "text": "Mémoriser un motif répétitif très simple."
            },
            {
                "id": "M-5-1-2",
                "parent": "M-5-1",
                "text": "Reproduire un motif répétitif à l’identique."
            },
            {
                "id": "M-5-2",
                "parent": "M-5",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-5-2-1",
                "parent": "M-5-2",
                "text": "Mémoriser un motif répétitif simple."
            },
            {
                "id": "M-5-2-2",
                "parent": "M-5-2",
                "text": "Reconnaitre un motif répétitif à ses régularités."
            },
            {
                "id": "M-5-2-3",
                "parent": "M-5-2",
                "text": "Décrire oralement des motifs répétitifs simples  de différentes natures, sans nécessairement recourir au vocabulaire spécialisé."
            },
            {
                "id": "M-5-2-4",
                "parent": "M-5-2",
                "text": "Prolonger l'amorce d'un motif répétitif et verbaliser la règle de prolongement utilisée."
            },
            {
                "id": "M-5-3",
                "parent": "M-5",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "M-5-3-1",
                "parent": "M-5-3",
                "text": "Repérer et décrire la structure d’un motif évolutif."
            },
            {
                "id": "M-5-3-2",
                "parent": "M-5-3",
                "text": "Identifier la structure d'un motif répétitif ou évolutif indépendamment des éléments physiques qui le composent."
            },
            {
                "id": "M-5-3-3",
                "parent": "M-5-3",
                "text": "Créer des motifs de différentes natures."
            },
            {
                "id": "F",
                "parent": "#",
                "text": "Français"
            },
            {
                "id": "F-1",
                "parent": "F",
                "text": "Acquérir le langage oral"
            },
            {
                "id": "F-1-1",
                "parent": "F-1",
                "text": "Enrichir son vocabulaire"
            },
            {
                "id": "F-1-1-1",
                "parent": "F-1-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-1-1-1",
                "parent": "F-1-1-1",
                "text": "Comprendre, mémoriser, réemployer les mots des corpus enseignés"
            },
            {
                "id": "F-1-1-1-2",
                "parent": "F-1-1-1",
                "text": "Organiser les mots en catégorie et en réseau"
            },
            {
                "id": "F-1-1-2",
                "parent": "F-1-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-1-2-1",
                "parent": "F-1-1-2",
                "text": "Comprendre, mémoriser, réemployer les mots des corpus enseignés"
            },
            {
                "id": "F-1-1-2-2",
                "parent": "F-1-1-2",
                "text": "Organiser les mots en catégorie et en réseau"
            },
            {
                "id": "F-1-1-3",
                "parent": "F-1-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-1-3-1",
                "parent": "F-1-1-3",
                "text": "Comprendre, mémoriser, réemployer les mots des corpus enseignés"
            },
            {
                "id": "F-1-1-3-2",
                "parent": "F-1-1-3",
                "text": "Organiser les mots en catégorie et en réseau"
            },
            {
                "id": "F-1-2",
                "parent": "F-1",
                "text": "Développer sa syntaxe"
            },
            {
                "id": "F-1-2-1",
                "parent": "F-1-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-2-1-1",
                "parent": "F-1-2-1",
                "text": "Diversifier les pronoms employés"
            },
            {
                "id": "F-1-2-1-2",
                "parent": "F-1-2-1",
                "text": "Construire à l’oral un système de temps de plus en plus efficace"
            },
            {
                "id": "F-1-2-1-3",
                "parent": "F-1-2-1",
                "text": "Formuler des énoncés de plus en plus complexes"
            },
            {
                "id": "F-1-2-2",
                "parent": "F-1-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-2-2-1",
                "parent": "F-1-2-2",
                "text": "Diversifier les pronoms employés"
            },
            {
                "id": "F-1-2-2-2",
                "parent": "F-1-2-2",
                "text": "Construire à l’oral un système de temps de plus en plus efficace"
            },
            {
                "id": "F-1-2-2-3",
                "parent": "F-1-2-2",
                "text": "Formuler des énoncés de plus en plus complexes"
            },
            {
                "id": "F-1-2-3",
                "parent": "F-1-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-2-3-1",
                "parent": "F-1-2-3",
                "text": "Diversifier les pronoms employés"
            },
            {
                "id": "F-1-2-3-2",
                "parent": "F-1-2-3",
                "text": "Construire à l’oral un système de temps de plus en plus efficace"
            },
            {
                "id": "F-1-2-3-3",
                "parent": "F-1-2-3",
                "text": "Formuler des énoncés de plus en plus complexes"
            },
            {
                "id": "F-1-3",
                "parent": "F-1",
                "text": "Articuler distinctement"
            },
            {
                "id": "F-1-3-1",
                "parent": "F-1-3",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-3-1-1",
                "parent": "F-1-3-1",
                "text": "Articuler distinctement les couples de consonnes proches t/k, f/s, m/n"
            },
            {
                "id": "F-1-3-2",
                "parent": "F-1-3",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-3-2-1",
                "parent": "F-1-3-2",
                "text": "Distinguer et produire correctement les nasales é/in, a/an, o/on"
            },
            {
                "id": "F-1-3-2-2",
                "parent": "F-1-3-2",
                "text": "Articuler distinctement les couples de consonnes proches suivants : f/v, s/z, p/b, t/d, k/g"
            },
            {
                "id": "F-1-3-3",
                "parent": "F-1-3",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-3-3-1",
                "parent": "F-1-3-3",
                "text": "Prononcer correctement les couples de consonnes proches suivants : ch/s, ch/j, ch/z"
            },
            {
                "id": "F-1-3-3-2",
                "parent": "F-1-3-3",
                "text": "Prononcer correctement les doubles consonnes br/cr/bl/pl/sl"
            },
            {
                "id": "F-1-4",
                "parent": "F-1",
                "text": "Produire des discours variés"
            },
            {
                "id": "F-1-4-1",
                "parent": "F-1-4",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-1-4-1-1",
                "parent": "F-1-4-1",
                "text": "Entrer en communication verbale avec un adulte ou un autre élève"
            },
            {
                "id": "F-1-4-1-2",
                "parent": "F-1-4-1",
                "text": "Dire ce qu’on fait"
            },
            {
                "id": "F-1-4-1-3",
                "parent": "F-1-4-1",
                "text": "Dire ce qu’on a fait et, peu à peu, ce qu'on va faire"
            },
            {
                "id": "F-1-4-1-4",
                "parent": "F-1-4-1",
                "text": "Prendre part à l’oralisation d’un court texte mémorisé"
            },
            {
                "id": "F-1-4-2",
                "parent": "F-1-4",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-4-2-1",
                "parent": "F-1-4-2",
                "text": "Dire ce qu’on va faire"
            },
            {
                "id": "F-1-4-2-2",
                "parent": "F-1-4-2",
                "text": "Dire comment on a fait ou comment on va faire"
            },
            {
                "id": "F-1-4-2-3",
                "parent": "F-1-4-2",
                "text": "Oraliser un court texte mémorisé"
            },
            {
                "id": "F-1-4-2-4",
                "parent": "F-1-4-2",
                "text": "Participer à des échanges en restant dans le propos"
            },
            {
                "id": "F-1-4-3",
                "parent": "F-1-4",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-1-4-3-1",
                "parent": "F-1-4-3",
                "text": "Décrire une action ou une activité qui a été menée par un autre élève"
            },
            {
                "id": "F-1-4-3-2",
                "parent": "F-1-4-3",
                "text": "Se faire comprendre, par le truchement du langage, d’un adulte qui ne connait rien à la situation évoquée"
            },
            {
                "id": "F-1-4-3-3",
                "parent": "F-1-4-3",
                "text": "Participer à une conversation avec un adulte ou des pairs et reformuler son propos s’il n’a pas été compris"
            },
            {
                "id": "F-1-4-3-4",
                "parent": "F-1-4-3",
                "text": "Émettre une hypothèse"
            },
            {
                "id": "F-2",
                "parent": "F",
                "text": "Passer de l’oral à l’écrit : se préparer à apprendre à lire"
            },
            {
                "id": "F-2-1",
                "parent": "F-2",
                "text": "Acquérir les habiletés phonologiques et le principe alphabétique"
            },
            {
                "id": "F-2-1-1",
                "parent": "F-2-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-2-1-1-1",
                "parent": "F-2-1-1",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-1-1-1-1",
                "parent": "F-2-1-1-1",
                "text": "Identifier les sons de la langue, lors de situations d’écoute proposées par le professeur."
            },
            {
                "id": "F-2-1-1-1-2",
                "parent": "F-2-1-1-1",
                "text": "Identifier un mot donné à l’oral dans une phrase, dans un texte."
            },
            {
                "id": "F-2-1-1-2",
                "parent": "F-2-1-1",
                "text": "Manipuler des syllabes orales puis des phonèmes"
            },
            {
                "id": "F-2-1-1-2-1",
                "parent": "F-2-1-1-2",
                "text": "Scander les syllabes d’un mot"
            },
            {
                "id": "F-2-1-1-2-2",
                "parent": "F-2-1-1-2",
                "text": "Dire des comptines courtes comprenant des phonèmes proches."
            },
            {
                "id": "F-2-1-1-3",
                "parent": "F-2-1-1",
                "text": "Connaitre le nom des lettres"
            },
            {
                "id": "F-2-1-1-3-1",
                "parent": "F-2-1-1-3",
                "text": "Reconnaitre et nommer certaines lettres de son prénom écrit en capitales."
            },
            {
                "id": "F-2-1-2",
                "parent": "F-2-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-1-2-1",
                "parent": "F-2-1-2",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-1-2-1-1",
                "parent": "F-2-1-2-1",
                "text": "Utiliser la voix parlée, chantée et les possibilités vocales (imitation de sons, onomatopées) afin d’expérimenter différents sons."
            },
            {
                "id": "F-2-1-2-1-2",
                "parent": "F-2-1-2-1",
                "text": "Entendre, discriminer des phonèmes"
            },
            {
                "id": "F-2-1-2-2",
                "parent": "F-2-1-2",
                "text": "Manipuler des syllabes orales puis des phonèmes"
            },
            {
                "id": "F-2-1-2-2-1",
                "parent": "F-2-1-2-2",
                "text": "Scander les syllabes d’un mot."
            },
            {
                "id": "F-2-1-2-2-2",
                "parent": "F-2-1-2-2",
                "text": "Manipuler les syllabes d’un mot (ajout, suppression, permutation, répétition, fusion, substitution)."
            },
            {
                "id": "F-2-1-2-2-3",
                "parent": "F-2-1-2-2",
                "text": "Dire des comptines courtes comprenant des phonèmes proches."
            },
            {
                "id": "F-2-1-2-3",
                "parent": "F-2-1-2",
                "text": "Connaitre le nom des lettres"
            },
            {
                "id": "F-2-1-2-3-1",
                "parent": "F-2-1-2-3",
                "text": "Nommer les lettres de son prénom et quelques lettres de mots connus (le professeur nomme systématiquement les lettres)."
            },
            {
                "id": "F-2-1-2-3-2",
                "parent": "F-2-1-2-3",
                "text": "Connaitre la correspondance entre les lettres scriptes majuscules et minuscules et les lettres cursives minuscules."
            },
            {
                "id": "F-2-1-2-4",
                "parent": "F-2-1-2",
                "text": "Connaitre le son des lettres"
            },
            {
                "id": "F-2-1-2-4-1",
                "parent": "F-2-1-2-4",
                "text": "Donner les valeurs sonores de quelques lettres de mots simples connus."
            },
            {
                "id": "F-2-1-3",
                "parent": "F-2-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-1-3-1",
                "parent": "F-2-1-3",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-1-3-1-1",
                "parent": "F-2-1-3-1",
                "text": "Utiliser les possibilités sonores de la voix."
            },
            {
                "id": "F-2-1-3-1-2",
                "parent": "F-2-1-3-1",
                "text": "Augmenter sa mémoire auditive et sa capacité de concentration."
            },
            {
                "id": "F-2-1-3-2",
                "parent": "F-2-1-3",
                "text": "Manipuler des syllabes orales puis des phonèmes"
            },
            {
                "id": "F-2-1-3-2-1",
                "parent": "F-2-1-3-2",
                "text": "Supprimer, ajouter, remplacer, inverser, substituer, fusionner les syllabes d’un mot."
            },
            {
                "id": "F-2-1-3-2-2",
                "parent": "F-2-1-3-2",
                "text": "Repérer et produire des rimes et des assonances."
            },
            {
                "id": "F-2-1-3-2-3",
                "parent": "F-2-1-3-2",
                "text": "Entendre, discriminer, manipuler des phonèmes"
            },
            {
                "id": "F-2-1-3-3",
                "parent": "F-2-1-3",
                "text": "Connaitre le nom des lettres"
            },
            {
                "id": "F-2-1-3-3-1",
                "parent": "F-2-1-3-3",
                "text": "Connaitre le nom des lettres de l’alphabet."
            },
            {
                "id": "F-2-1-3-3-2",
                "parent": "F-2-1-3-3",
                "text": "Connaitre les différentes graphies d’une même lettre (majuscule lettre capitale ; minuscules scriptes ; cursives)."
            },
            {
                "id": "F-2-1-3-3-3",
                "parent": "F-2-1-3-3",
                "text": "Distinguer des lettres visuellement proches (b/d, c/e/o, p/q) grâce à leur écriture cursive et les nommer correctement."
            },
            {
                "id": "F-2-1-3-4",
                "parent": "F-2-1-3",
                "text": "Connaitre le son des lettres"
            },
            {
                "id": "F-2-1-3-4-1",
                "parent": "F-2-1-3-4",
                "text": "Connaitre le nom des lettres de l’alphabet et leur valeur sonore hormis les occlusives."
            },
            {
                "id": "F-2-1-3-4-2",
                "parent": "F-2-1-3-4",
                "text": "Discriminer des mots auditivement proches."
            },
            {
                "id": "F-2-2",
                "parent": "F-2",
                "text": "S’éveiller à la diversité linguistique"
            },
            {
                "id": "F-2-2-1",
                "parent": "F-2-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-2-2-1-1",
                "parent": "F-2-2-1",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-2-1-1-1",
                "parent": "F-2-2-1-1",
                "text": "Écouter des chants, des comptines, des histoires connues dans des versions en français et en langue étrangère."
            },
            {
                "id": "F-2-2-2",
                "parent": "F-2-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-2-2-1",
                "parent": "F-2-2-2",
                "text": "Écouter, identifier, discriminer et reproduire des sons"
            },
            {
                "id": "F-2-2-2-1-1",
                "parent": "F-2-2-2-1",
                "text": "Participer à des jeux dans une autre langue : jeux de doigts, rondes, jeux dansés, mimes, jeux de cour, jeux de cartes."
            },
            {
                "id": "F-2-2-2-1-2",
                "parent": "F-2-2-2-1",
                "text": "Comparer des histoires lues en français et dans une autre langue."
            },
            {
                "id": "F-2-3",
                "parent": "F-2",
                "text": "Écouter et comprendre différentes formes d’écrits"
            },
            {
                "id": "F-2-3-1",
                "parent": "F-2-3",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-2-3-1-1",
                "parent": "F-2-3-1",
                "text": "Découvrir les supports de l’écrit"
            },
            {
                "id": "F-2-3-1-1-1",
                "parent": "F-2-3-1-1",
                "text": "Repérer les outils fonctionnels utilisés quotidiennement en classe (étiquette du prénom, emploi du temps, affiches, etc.)."
            },
            {
                "id": "F-2-3-1-1-2",
                "parent": "F-2-3-1-1",
                "text": "Reconnaitre quelques écrits utilisés et produits en classe (comptines, recettes, carnet de lecteur)"
            },
            {
                "id": "F-2-3-1-2",
                "parent": "F-2-3-1",
                "text": "Comprendre des textes lus par le professeur"
            },
            {
                "id": "F-2-3-1-2-1",
                "parent": "F-2-3-1-2",
                "text": "Reconnaitre un personnage, le nommer et le situer dans les illustrations."
            },
            {
                "id": "F-2-3-1-2-2",
                "parent": "F-2-3-1-2",
                "text": "Comprendre des histoires où l’enchainement des actions peut être rattaché à des expériences connues de la vie quotidienne (le bain, le coucher, etc.)"
            },
            {
                "id": "F-2-3-2",
                "parent": "F-2-3",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-3-2-1",
                "parent": "F-2-3-2",
                "text": "Découvrir les supports de l’écrit"
            },
            {
                "id": "F-2-3-2-1-1",
                "parent": "F-2-3-2-1",
                "text": "Reconnaitre, nommer et identifier la fonction de différents écrits rencontrés dans la vie courante."
            },
            {
                "id": "F-2-3-2-1-2",
                "parent": "F-2-3-2-1",
                "text": "Prendre conscience de la notion de destinataire et de contenu de la requête adressée par un écrit."
            },
            {
                "id": "F-2-3-2-1-3",
                "parent": "F-2-3-2-1",
                "text": "Identifier et utiliser quotidiennement des outils fonctionnels pour se repérer, s’organiser, ranger."
            },
            {
                "id": "F-2-3-2-2",
                "parent": "F-2-3-2",
                "text": "Comprendre des textes lus par le professeur"
            },
            {
                "id": "F-2-3-2-2-1",
                "parent": "F-2-3-2-2",
                "text": "Identifier et décrire le personnage principal et les personnages secondaires."
            },
            {
                "id": "F-2-3-2-2-2",
                "parent": "F-2-3-2-2",
                "text": "Comprendre des histoires dont les actions sont organisées autour d’une structure répétitive (rencontres successives) et commencer à comprendre les informations implicites (émotions, états et sentiments des personnages)."
            },
            {
                "id": "F-2-3-3",
                "parent": "F-2-3",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-2-3-3-1",
                "parent": "F-2-3-3",
                "text": "Découvrir les supports de l’écrit"
            },
            {
                "id": "F-2-3-3-1-1",
                "parent": "F-2-3-3-1",
                "text": "Différencier les types d’écrits et associer un écrit à un projet d’écriture ou de communication."
            },
            {
                "id": "F-2-3-3-1-2",
                "parent": "F-2-3-3-1",
                "text": "Repérer et dégager la structure et l’organisation (mise en page, typographie) de formes d’écrits fréquemment utilisés en classe (structure de la lettre, de la recette, du conte, d’un écrit documentaire, d’une notice de fabrication)"
            },
            {
                "id": "F-2-3-3-2",
                "parent": "F-2-3-3",
                "text": "Comprendre des textes lus par le professeur"
            },
            {
                "id": "F-2-3-3-2-1",
                "parent": "F-2-3-3-2",
                "text": "Construire les caractéristiques des personnages archétypaux (loup, princesse, ogre, sorcière, renard, fée, etc.)."
            },
            {
                "id": "F-2-3-3-2-2",
                "parent": "F-2-3-3-2",
                "text": "Comprendre des histoires où l’enchainement des actions est lié au destin de personnages centraux ou secondaires qui évoluent et interagissent, dans des lieux diversifiés."
            },
            {
                "id": "F-2-3-3-2-3",
                "parent": "F-2-3-3-2",
                "text": "Comprendre les émotions, les intentions et les sentiments qui animent les personnages."
            },
            {
                "id": "F-2-3-3-2-4",
                "parent": "F-2-3-3-2",
                "text": "Établir un lien entre la lecture effectuée et sa propre expérience"
            },
            {
                "id": "F-3",
                "parent": "F",
                "text": "Passer de l’oral à l’écrit : se préparer à apprendre à écrire"
            },
            {
                "id": "F-3-1",
                "parent": "F-3",
                "text": "Apprendre le geste d’écriture"
            },
            {
                "id": "F-3-1-1",
                "parent": "F-3-1",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-3-1-1-1",
                "parent": "F-3-1-1",
                "text": "Participer aux activités de motricité générale, de motricité fine et aux exercices de graphismes"
            },
            {
                "id": "F-3-1-1-2",
                "parent": "F-3-1-1",
                "text": "Guider son geste par le regard lorsqu’il trace ou écrit "
            },
            {
                "id": "F-3-1-1-3",
                "parent": "F-3-1-1",
                "text": "Prendre des repères spatiaux sur le support utilisé pour tracer."
            },
            {
                "id": "F-3-1-2",
                "parent": "F-3-1",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-1-2-1",
                "parent": "F-3-1-2",
                "text": "Adopter une posture adaptée au geste d’écriture"
            },
            {
                "id": "F-3-1-2-2",
                "parent": "F-3-1-2",
                "text": "Adopter une préhension correcte du stylo et s’entrainer à ne pas le lever en écrivant"
            },
            {
                "id": "F-3-1-2-3",
                "parent": "F-3-1-2",
                "text": "Utiliser de façon coordonnée les quatre articulations qui servent à tenir et guider le crayon (épaule, coude, poignet, doigts)."
            },
            {
                "id": "F-3-1-2-4",
                "parent": "F-3-1-2",
                "text": "Tracer des lettres capitales."
            },
            {
                "id": "F-3-1-2-5",
                "parent": "F-3-1-2",
                "text": "S’initier aux tracés de l’écriture cursive."
            },
            {
                "id": "F-3-1-3",
                "parent": "F-3-1",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-1-3-1",
                "parent": "F-3-1-3",
                "text": "Tenir correctement son stylo par la pince des doigts et utiliser de façon coordonnée les quatre articulations (épaule, coude, poignet, doigts)."
            },
            {
                "id": "F-3-1-3-2",
                "parent": "F-3-1-3",
                "text": "Travailler la ligature entre deux lettres."
            },
            {
                "id": "F-3-1-3-3",
                "parent": "F-3-1-3",
                "text": "Tracer des lettres en écriture cursive, les enchainer. "
            },
            {
                "id": "F-3-2",
                "parent": "F-3",
                "text": "Produire de premiers écrits"
            },
            {
                "id": "F-3-2-1",
                "parent": "F-3-2",
                "text": "À aborder avant 4 ans"
            },
            {
                "id": "F-3-2-1-1",
                "parent": "F-3-2-1",
                "text": "Passer de l’oral à l’écrit"
            },
            {
                "id": "F-3-2-1-1-1",
                "parent": "F-3-2-1-1",
                "text": "Percevoir que l’écrit encode l’oral."
            },
            {
                "id": "F-3-2-1-1-2",
                "parent": "F-3-2-1-1",
                "text": "Utiliser un support écrit connu."
            },
            {
                "id": "F-3-2-1-2",
                "parent": "F-3-2-1",
                "text": "Produire des écrits"
            },
            {
                "id": "F-3-2-1-2-1",
                "parent": "F-3-2-1-2",
                "text": "Mimer la posture et les gestes d’écriture de l’adulte lors de la production de traces qui s’apparentent à de l’écriture."
            },
            {
                "id": "F-3-2-1-2-2",
                "parent": "F-3-2-1-2",
                "text": "Tracer volontairement des signes abstraits dont on comprend qu’il ne s’agit pas de dessins, mais de lettres"
            },
            {
                "id": "F-3-2-2",
                "parent": "F-3-2",
                "text": "À partir de 4 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-2-2-1",
                "parent": "F-3-2-2",
                "text": "Passer de l’oral à l’écrit"
            },
            {
                "id": "F-3-2-2-1-1",
                "parent": "F-3-2-2-1",
                "text": "Comprendre que lorsque l’adulte lit un même écrit plusieurs fois, ce qu’il lit est toujours identique."
            },
            {
                "id": "F-3-2-2-1-2",
                "parent": "F-3-2-2-1",
                "text": "Comprendre que l’écrit code des sons."
            },
            {
                "id": "F-3-2-2-1-3",
                "parent": "F-3-2-2-1",
                "text": "Proposer au professeur, lors d’une activité de dictée à l’adulte, le contenu d’un court message, stabiliser un énoncé oral et le mémoriser pour pouvoir ensuite le dicter au professeur."
            },
            {
                "id": "F-3-2-2-1-4",
                "parent": "F-3-2-2-1",
                "text": "Comparer la longueur d’un texte écrit et la durée du texte entendu."
            },
            {
                "id": "F-3-2-2-1-5",
                "parent": "F-3-2-2-1",
                "text": "Savoir que le sens de la lecture est de gauche à droite et de haut en bas."
            },
            {
                "id": "F-3-2-2-2",
                "parent": "F-3-2-2",
                "text": "Produire des écrits"
            },
            {
                "id": "F-3-2-2-2-1",
                "parent": "F-3-2-2-2",
                "text": "Chercher parmi les outils à sa disposition des modèles qui seront réutilisés dans un essai d’écriture."
            },
            {
                "id": "F-3-2-3",
                "parent": "F-3-2",
                "text": "À partir de 5 ans ou dès que les apprentissages précédents ont pu être observés"
            },
            {
                "id": "F-3-2-3-1",
                "parent": "F-3-2-3",
                "text": "Passer de l’oral à l’écrit"
            },
            {
                "id": "F-3-2-3-1-1",
                "parent": "F-3-2-3-1",
                "text": "Segmenter l’oral en mots, les mots en syllabes, quelques syllabes en phonèmes."
            },
            {
                "id": "F-3-2-3-1-2",
                "parent": "F-3-2-3-1",
                "text": "Comprendre que l’écrit encode l’oral et que les sons de la langue sont codés par des lettres."
            },
            {
                "id": "F-3-2-3-1-3",
                "parent": "F-3-2-3-1",
                "text": "Suivre la trace écrite des yeux lors d’une relecture par l’adulte d’un message produit lors d’une dictée à l’adulte."
            },
            {
                "id": "F-3-2-3-2",
                "parent": "F-3-2-3",
                "text": "Produire des écrits"
            },
            {
                "id": "F-3-2-3-2-1",
                "parent": "F-3-2-3-2",
                "text": "Mémoriser la graphie d’un mot transparent, en s’appuyant sur la connaissance des lettres et la conscience phonologique et le retranscrire sur un support."
            },
            {
                "id": "F-3-2-3-2-2",
                "parent": "F-3-2-3-2",
                "text": "Réinvestir ses premières connaissances relatives au principe alphabétique pour produire un écrit."
            },
            {
                "id": "F-3-2-3-2-3",
                "parent": "F-3-2-3-2",
                "text": "Se repérer dans l’alphabet pour retrouver l’écriture d’une lettre nécessaire pour produire un écrit."
            },
            {
                "id": "F-3-2-3-2-4",
                "parent": "F-3-2-3-2",
                "text": "Mémoriser l’écriture de mots transparents ou de syllabes connues pour les réutiliser dans une production d’écrit."
            },
            {
                "id": "F-3-2-3-2-5",
                "parent": "F-3-2-3-2",
                "text": "Comprendre qu’il existe une norme pour écrire : ponctuation, majuscules, mise en page, etc."
            },
            {
                "id": "F-3-2-3-2-6",
                "parent": "F-3-2-3-2",
                "text": "Persévérer pour mener la production d’écrit à son terme : préparation, énonciation et révision"
            }
        ],
        dateDerniereSauvegarde: new Date('2025-08-17T21:00:00.000Z'),
        journal: [
            {
                id: 'bouchon-30', date: new Date('2025-08-31T22:00:00.000Z'),
                remarque: 'cahier journal du 1 septembre 2025 : une belle journée studieuse',
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
                                'M-1-1-1-7'
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
                                'M-1-1-1-7'
                            ]
                        }]
                    }
                ]
            },
            {
                id: 'bouchon-31', date: new Date('2025-09-01T22:00:00.000Z'),
                remarque: 'Cahier journal du 02/09',
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
                                'M-1-1-1-7', 'M-1-1-1-6'
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
                                'M-1-1-1-7', 'M-1-1-1-6'
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
                        date: new Date('2025-09-21T22:00:00.000Z'),
                        termine: false
                    },
                    {
                        id: 'bouchon-35', nom: 'Echéance 1-1',
                        date: new Date('2025-09-14T22:00:00.000Z'),
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