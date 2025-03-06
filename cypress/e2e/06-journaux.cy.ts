
describe('Route journaux', () => {

  it('Journaux - charger les données', () => {
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

  it('Journaux - accéder à la route', () => {

    // Accès à la route
    cy.get('.maclasse-t-routeQUOTIDIEN').click();
    cy.get('.maclasse-t-routejournal').click();

    // Vérification de la présence des éléments
    cy.get('.maclasse-t-selection').find('button').should('have.length', 5);
    cy.get('.maclasse-t-selection').find('input').should('have.length', 1);
    cy.get('.maclasse-t-aucunJournal').should('have.length', 1);
  });

  it('Journaux - créer un journal', () => {

    // Création / suppression / création du journal
    cy.get('.maclasse-t-aucunJournal').find('button').click();
    cy.get('.maclasse-t-boutonSupprimerJournal').click();
    cy.get('.maclasse-t-aucunJournal').find('button').click();
  });

  it('Journaux - renseigner un journal', () => {

    // Ajout de données de 5 temps + 1 transport + 1 récréation
    cy.get('.angular-editor-textarea').eq(0).click().type('commentaire du jour', { force: true });
    cy.get('.maclasse-t-boutonAjouterTemps').click();
    for (let i = 0; i < 5; i++) {
      if (i == 1) {
        cy.get('.maclasse-t-fieldsetTemps').eq(i).find('.maclasse-t-supprimerGroupe').click();
        cy.get('.maclasse-t-fieldsetTemps').eq(i).find('.maclasse-t-ajouterGroupe').click();
      }
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('mat-select[name=debut]').click();
      cy.get('.cdk-overlay-container').find('mat-option').contains('08h00').click();
      cy.get('.angular-editor-textarea').eq(0).click()
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('mat-select[name=fin]').click();
      cy.get('.cdk-overlay-container').find('mat-option').contains('08h30').click();
      cy.get('.angular-editor-textarea').eq(0).click()
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('input[name=Nom]').type('Temps' + i, { force: true });
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('mat-chip-option').eq(i % 4).click();
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('input[name=Objectifs]').type('Objectifs-Temps' + i);
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('input[name=Consignes]').type('Consignes-Temps' + i);
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('input[name=Materiel]').type('Materiel-Temps' + i);
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('.angular-editor-textarea').click().type('bilan du temps' + i, { force: true });
      cy.get('.maclasse-t-fieldsetTemps').eq(i).find('.maclasse-t-ajouterCompetence').click();
      cy.get('mat-dialog-content').find('textarea').type('addition');
      cy.get('.cdk-overlay-pane').find('mat-option').contains('mémoriser la table d\'addition').click();
      cy.get('.cdk-overlay-pane').find('button').contains('Valider').click();
      if (i == 1) {
        cy.get('.maclasse-t-fieldsetTemps').eq(i).find('.maclasse-t-ajouterTransportApres').click();
      }
      else if (i == 3) {
        cy.get('.maclasse-t-fieldsetTemps').eq(i).find('.maclasse-t-ajouterRecreationApres').click();
      }
      if (i < 5) {
        cy.get('.maclasse-t-fieldsetTemps').eq(i).find('.maclasse-t-ajouterTempsApres').click();
      }
    }
  });

  it('Journaux - supprimer/inverser les temps d\'un journal', () => {

    // Suppression du premier temps
    cy.get('.maclasse-t-fieldsetTemps').eq(1).find('.maclasse-t-supprimerTemps').click();

    // Inversion des deux derniers et retour à l'origine
    cy.get('.maclasse-t-fieldsetTemps').eq(2).find('.maclasse-legendFlex').contains('Temps3');
    cy.get('.maclasse-t-fieldsetTemps').eq(3).find('.maclasse-legendFlex').contains('Temps4');
    cy.get('.maclasse-t-fieldsetTemps').eq(3).find('.maclasse-t-monterTemps').click();
    cy.get('.maclasse-t-fieldsetTemps').eq(2).find('.maclasse-legendFlex').contains('Temps4');
    cy.get('.maclasse-t-fieldsetTemps').eq(3).find('.maclasse-legendFlex').contains('Temps3');
    cy.get('.maclasse-t-fieldsetTemps').eq(2).find('.maclasse-t-descendreTemps').click();
    cy.get('.maclasse-t-fieldsetTemps').eq(2).find('.maclasse-legendFlex').contains('Temps3');
    cy.get('.maclasse-t-fieldsetTemps').eq(3).find('.maclasse-legendFlex').contains('Temps4');
  });
})