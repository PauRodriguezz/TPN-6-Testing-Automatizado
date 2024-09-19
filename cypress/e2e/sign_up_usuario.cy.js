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

    //Test prueba de boton
    it('Confirme que el texto del botón sea claramente legible e indique correctamente "Sign up".', () => {
      cy.get('button')  // Asegúrate de usar el selector correcto para el botón "Sign up"
        .should('be.visible')
        .and('contain', 'Sign up');  // Verifica que el texto del botón sea "Sign up"
    });

  });

// Tests para el registro de usuario
describe('User Registration', () => {
  beforeEach(() => {
    // Visita la URL antes de cada test
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
  });

  it('Verifique que el usuario pueda completar correctamente los campos de nombre, apellido, correo electrónico y contraseña y enviar el formulario.', () => {
    // Completar el formulario con los datos
    cy.get('#firstName').type('Leonel10');
    cy.get('#lastName').type('Messi');
    cy.get('#email').type('leomessi1000@gmail.com');
    cy.get('#password').type('campeonDelMundo');

    // Enviar el formulario
    cy.get('#submit').click();

  });
});


  