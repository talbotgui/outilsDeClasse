
describe('Route projets', () => {

  it('Projets - charger les données', () => {

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

  it('Projets - accéder à la route', () => {

    // Accès à la route
    cy.get('.maclasse-t-routeORGA').click();
    cy.get('.maclasse-t-routeprojet').click();

    // Vérification de la présence des éléments
    cy.get('mat-chip-option').should('have.length', 3);
    cy.get('.maclasse-table-ligne').should('have.length', 3);
    cy.get('.maclasse-t-ajouterUnProjet').should('have.length', 1);

    // Affichage des données du premier projet dans la liste des mat-chip
    cy.get('mat-chip-option').eq(1).click();
    cy.get('.maclasse-formulaire').should('have.length', 6);

  });

  it('Projets - modifier formulaire', () => {
    // Fonctionnement édition
    cy.get('.maclasse-t-commencerEdition').should('be.visible');
    cy.get('.maclasse-t-supprimerProjet').should('be.visible');
    cy.get('.maclasse-t-commencerEdition').click();
    cy.get('.maclasse-t-terminerEdition').should('be.visible');
    cy.get('route-projet').find('input:text').should('have.length', 1);
    cy.get('.maclasse-t-selectionEleve').should('have.length', 4);
    cy.get('.angular-editor-textarea').should('have.length', 4);

    // Modification des données dans tous les champs
    cy.get('route-projet').find('input:text').clear().type('toto').blur();
    for (let i = 0; i < 4; i++) {
      cy.get('.maclasse-t-selectionEleve').eq(i).click();
    }
    for (let i = 0; i < 4; i++) {
      cy.get('.angular-editor-textarea').eq(i).click().type('toto', { force: true });
    }

    // Fin de l'édition
    cy.get('.maclasse-t-terminerEdition').click();
    cy.get('.maclasse-t-commencerEdition').should('be.visible');
    cy.get('.maclasse-t-terminerEdition').should('not.exist');

    // Validation des modifications
    cy.get('div:contains(toto)').should('have.length', 11);
  });

  it('Projets - supprimer donnée', () => {
    // Suppression
    cy.get('.maclasse-t-supprimerProjet').click();

    // Vérification affichage popup bloquant
    cy.get('mat-dialog-container').should('exist');
    cy.get('mat-dialog-container').find('li').should('have.length', 4);

    // fermeture popup
    cy.get('mat-dialog-container').find('button').click();

    // Vérification compte des projets
    cy.get('mat-chip-option').should('have.length', 3);
  });
})