
describe('Route compétence', () => {

  it('Compétence - charger les données', () => {

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

  it('Compétence - accéder à la route', () => {

    // Accès à la route
    cy.get('.maclasse-t-routeORGA').click();
    cy.get('.maclasse-t-routecompetence').click();

    // Vérification de la présence des éléments
    cy.get('route-competence').find('.mdc-tab').should('have.length', 2);
    cy.get('route-competence').find('#mat-tab-label-0-1').click();
    cy.get('.maclasse-t-selectionnerCompetence').should('be.visible');
    cy.get('route-competence').find('#mat-tab-label-0-0').click();
    cy.get('.maclasse-t-rechercheCompetence').should('be.visible');
    cy.get('.maclasse-t-copierLibelle').should('have.length', 1);
    cy.get('.maclasse-t-copierLibelleDepuisArbre').should('have.length', 2);

    // Vérification fonctionnement de la recherche fulltext
    cy.get('.maclasse-t-rechercheCompetence').type('écritures mathématiques');
    cy.get('.maclasse-t-propositionCompetence').should('have.length', 1);
    cy.get('.maclasse-t-propositionCompetence').click();
    cy.get('.maclasse-t-bouchon-j1_484').should('exist');

    // Vérification fonctionnement de la recherche par arbo
    cy.get('route-competence').find('#mat-tab-label-0-1').click();
    cy.get('.maclasse-t-selectionnerCompetence').click();
    cy.get('.maclasse-t-selectionnerCompetence').get('.maclasse-t-bouchon-compAsso').click();
    cy.get('.maclasse-t-libelle-bouchon-compAsso').should('be.visible');
    cy.get('.maclasse-t-bouchon-j1_484').should('not.exist');


  });
})