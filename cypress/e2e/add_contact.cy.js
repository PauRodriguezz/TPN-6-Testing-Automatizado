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
