// logout.spec.js

describe('Pruebas del botón de logout', () => {
  const logoutButton = () => cy.get('#logout');

  const clickLogoutButton = () => {
      logoutButton().click();
  };

  beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
  });

  it('Verificar que el botón es visible y está etiquetado correctamente como "Logout"', () => {
      logoutButton().should('be.visible');
      logoutButton().should('have.text', 'Logout');
  });

  it('Confirmar que el botón realiza la acción de logout sin errores', () => {
      clickLogoutButton();
      cy.url().should('include', '/logout');
  });
});
