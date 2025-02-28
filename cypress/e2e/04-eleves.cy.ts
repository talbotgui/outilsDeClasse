
describe('Route élèves', () => {

  it('Elèves - charger les données', () => {

    // Navigation
    cy.visit('http://localhost:4200/#/route-accueil');
    // Changement de route
    cy.get('a.mat-mdc-tab-link.maclasse-t-routechargerdonnees').click();
    // Saisie de données dans les champs (force:true car les input seraient masqués ?)
    cy.get('.maclasse-t-fichier').selectFile('cypress/fixtures/sauvegarde.jdd', { force: true });
    cy.get('.maclasse-t-motDePasse').type('démonstration', { force: true });
    // Clic avec un bon mot de passe
    cy.get('button.maclasse-t-charger').click();
    // Contrôle de présence des autres éléments du menu (au cas où)
    cy.get('.maclasse-t-routeORGA').should('be.visible');
    cy.get('.maclasse-t-routeQUOTIDIEN').should('be.visible');
    cy.get('.maclasse-t-routePARAMETRAGE').should('be.visible');
  });

  it('Elèves - accéder à la route', () => {

    // Accès à la route
    cy.get('.maclasse-t-routeORGA').click();
    cy.get('.maclasse-t-routeeleve').click();

    // Vérification de la présence des éléments
    cy.get('mat-chip-option').should('have.length', 5);
    cy.get('.maclasse-table-ligne').should('have.length', 5);
    cy.get('.maclasse-t-ajouterUnEleve').should('have.length', 1);

    // Affichage des données du second élève dans la liste des mat-chip
    cy.get('mat-chip-option').eq(1).click();
    cy.get('.maclasse-formulaire').should('have.length', 8);

  });

  it('Elèves - modifier formulaire', () => {
    // Fonctionnement édition
    cy.get('.maclasse-t-commencerEdition').should('be.visible');
    cy.get('.maclasse-t-supprimerEleve').should('be.visible');
    cy.get('.maclasse-t-commencerEdition').click();
    cy.get('.maclasse-t-terminerEdition').should('be.visible');
    cy.get('route-eleve').find('input:text').should('have.length', 31);
    cy.get('route-eleve').find('input[type=email]').should('have.length', 2);
    cy.get('route-eleve').find('input[type=tel]').should('have.length', 2);
    cy.get('route-eleve').find('textarea').should('have.length', 2);

    // Modification des données dans tous les champs
    for (let i = 0; i < 31; i++) {
      const valeur = (i == 2 || i == 3) ? '31/12/2039' : 'toto';
      cy.get('route-eleve').find('input:text').eq(i).clear({ force: true }).type(valeur, { force: true }).blur();
    }
    for (let i = 0; i < 2; i++) {
      cy.get('route-eleve').find('input[type=email]').eq(i).clear({ force: true }).type('toto', { force: true }).blur();
    }
    for (let i = 0; i < 2; i++) {
      cy.get('route-eleve').find('input[type=tel]').eq(i).clear({ force: true }).type('toto', { force: true }).blur();
    }
    for (let i = 0; i < 2; i++) {
      cy.get('route-eleve').find('textarea').eq(i).clear({ force: true }).type('toto', { force: true }).blur();
    }
    cy.get('.angular-editor-textarea').click().type('toto', { force: true });

    // Fin de l'édition
    cy.get('.maclasse-t-terminerEdition').click();
    cy.get('.maclasse-t-commencerEdition').should('be.visible');
    cy.get('.maclasse-t-terminerEdition').should('not.exist');

    // Validation des modifications
    cy.get('div:contains(toto)').should('have.length', 55);
  });

  it('Elèves - supprimer donnée', () => {
    // Suppression
    cy.get('.maclasse-t-supprimerEleve').click();

    // Vérification compte élèves
    cy.get('mat-chip-option').should('have.length', 4);
  });
})