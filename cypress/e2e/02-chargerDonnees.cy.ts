
describe('Charger données', () => {

  it('Route charger données - arrivée sur la page', () => {

    // Navigation
    cy.visit('http://localhost:4200/#/route-accueil');

    // Changement de route
    cy.get('a.mat-mdc-tab-link.maclasse-t-routechargerdonnees').click();

    // Vérification de la présence des fieldset et de leur titre
    cy.get('fieldset.maclasse-formulaire').should('have.length', 1);
    cy.get('fieldset.maclasse-formulaire').eq(0).find('legend').should('have.text', 'Sélectionner un fichier de l\'application MaClasse pour en charger les données.')

    // Clic sans saisie
    cy.get('button.maclasse-t-charger').should('be.disabled');
  });

  it('Route charger données - saisir données avec mauvais mot de passe', () => {

    // Saisie de données dans les champs (force:true car les input seraient masqués ?)
    cy.get('.maclasse-t-fichier').selectFile('cypress/fixtures/sauvegarde.jdd', { force: true });
    cy.get('.maclasse-t-motDePasse').type('mauvaisMotDePasse', { force: true });

    // Contrôle de l'absence de message d'erreur avant
    cy.get('.maclasse-message-erreur').should('have.length', 0);

    // Clic avec un mauvais mot de passe
    cy.get('button.maclasse-t-charger').should('be.not.disabled');
    cy.get('button.maclasse-t-charger').click();

    // Contrôle de présence d'un message d'erreur après
    cy.get('.maclasse-message-erreur').should('have.length', 1);
    cy.get('.maclasse-message-erreur').should('have.text', 'Erreur durant le déchiffrement des données. Le mot de passe est-il bon ?')
  });

  it('Route charger données - réussir à charger les données', () => {

    // Saisie de données dans les champs (force:true car les input seraient masqués ?)
    cy.get('.maclasse-t-fichier').selectFile('cypress/fixtures/sauvegarde.jdd', { force: true });
    cy.get('.maclasse-t-motDePasse').clear();
    cy.get('.maclasse-t-motDePasse').type('démonstration', { force: true });

    // Clic avec un bon mot de passe
    cy.get('button.maclasse-t-charger').should('be.not.disabled');
    cy.get('button.maclasse-t-charger').click();

    // Contrôle de présence des autres éléments du menu
    cy.get('.maclasse-t-routeORGA').should('be.visible');
    cy.get('.maclasse-t-routeQUOTIDIEN').should('be.visible');
    cy.get('.maclasse-t-routePARAMETRAGE').should('be.visible');
  });
})