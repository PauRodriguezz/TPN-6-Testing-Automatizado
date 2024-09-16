describe('Button Tests', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });

    //Primer Test
    it('Verifique que al hacer clic en el botón "Registrarse" se redirija al usuario a la página "/addUser".', () => {
      cy.get('button')  // Asegúrate de usar el selector correcto para el botón "Registrarse"
        .contains('Sign up')
        .click();
  
      cy.url().should('include', '/addUser');
    });

  });
  