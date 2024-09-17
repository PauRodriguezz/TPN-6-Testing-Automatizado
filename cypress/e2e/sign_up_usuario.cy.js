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

    //Segundo Test
    it('Confirme que el texto del botón sea claramente legible e indique correctamente "Sign up".', () => {
      cy.get('button')  // Asegúrate de usar el selector correcto para el botón "Sign up"
        .should('be.visible')
        .and('contain', 'Sign up');  // Verifica que el texto del botón sea "Sign up"
    });

  });


  