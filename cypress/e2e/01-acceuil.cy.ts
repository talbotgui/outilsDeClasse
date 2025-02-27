
describe('Accueil', () => {

  it('Route accueil sans données', () => {

    // Navigation
    cy.visit('http://localhost:4200/#/route-accueil');

    // Vérification du titre
    cy.get('h1.maclasse-titreApplication').should('contain.text', 'Application de gestion de ma classe');

    // Vérification du menu
    cy.get('a.mat-mdc-tab-link.maclasse-t-routeaccueil').should('contain.text', 'Accueil');
    cy.get('a.mat-mdc-tab-link.maclasse-t-routechargerdonnees').should('contain.text', 'Charger mon année');
    cy.get('body').find('a.mat-mdc-tab-link').should('have.length', 2);

    // Vérification de l'affichage de l'accueil
    cy.get('h2.maclasse-t-titreAccueil').should('be.visible');

    // Vérification de l'aide
    cy.get('button.maclasse-t-afficherAide').should('be.visible');
    cy.get('button.maclasse-t-afficherAide').click();
    cy.get('button.maclasse-t-masquerAide').should('be.visible');
    cy.get('h2.maclasse-t-aideAccueil').should('be.visible');
    cy.get('button.maclasse-t-masquerAide').click();
    cy.get('button.maclasse-t-afficherAide').should('be.visible');
  });
})