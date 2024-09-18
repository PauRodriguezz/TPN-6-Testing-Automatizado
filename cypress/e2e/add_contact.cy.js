// contact.test.js
describe('First Name Input Tests', () => {
    const firstNameInput = '#firstName'; // Define the input field selector

    beforeEach(() => {
        // Visit the contact form page before each test
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/addContact');
    });

    it('Ensure that the input field can accept and display a first name up to a reasonable character limit', () => {
        const firstName = 'JohnDoeJohnDoeJohnDoeJohnDoeJohnDoeJohnDoeJohnDoeJohnDoeJohnDoeJohnDoe'; // 50 characters

        // Enter the first name into the input field
        cy.get(firstNameInput).clear().type(firstName);

        // Assert that the input value matches the entered name
        cy.get(firstNameInput).should('have.value', firstName);
    });
});

//Validacion del Correo Electronico 
describe('Validación del campo de correo electrónico', () => {
    
    const emailInput = () => cy.get('#email');

    const fillEmail = (email) => {
        emailInput().type(email);
    };

    const getEmailValue = () => {
        return emailInput().invoke('val');
    };

    beforeEach(() => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/addContact');
    });

    it('Debería aceptar un formato de correo electrónico válido', () => {
        const validEmail = 'test@example.com';
        fillEmail(validEmail);
        getEmailValue().should('eq', validEmail);
    });

    it('Debería rechazar un formato de correo electrónico inválido - falta el "@"', () => {
        const invalidEmail = 'testexample.com';
        fillEmail(invalidEmail);
        getEmailValue().should('eq', invalidEmail);
    });

    it('Debería rechazar un formato de correo electrónico inválido - falta el dominio', () => {
        const invalidEmail = 'test@.com';
        fillEmail(invalidEmail);
        getEmailValue().should('eq', invalidEmail);
    });

    it('Debería rechazar un formato de correo electrónico inválido - falta la parte local', () => {
        const invalidEmail = '@example.com';
        fillEmail(invalidEmail);
        getEmailValue().should('eq', invalidEmail);
    });
});