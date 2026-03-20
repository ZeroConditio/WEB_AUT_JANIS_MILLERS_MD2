import { homePage } from "../pageObjects/homePage";

describe('DEMO QA', () => {
    context('Appointment test', () => {
        beforeEach(() => {
            cy.visit('');
        });
        it('Make Appointment', () => {
            const demoAcc = {
                user: 'John Doe',
                pass: 'ThisIsNotAPassword',
                comment: 'CURA Healthcare Service'
            }

            // Get to login page
            homePage.makeAppointment.click();
        
            // Set username
            homePage.usernameField.type(demoAcc.user);
            // Set password
            homePage.passwordField.type(demoAcc.pass);
            // Login
            homePage.loginButton.click();

            // Details
            // facility
            // https://docs.cypress.io/api/commands/select
            cy.get('select').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center')
            cy.get('#combo_facility').should('have.value', 'Seoul CURA Healthcare Center');
            // Checkbox
            homePage.checkBoxApply.click();

            // homePage.checkBoxApply.check();
            // Program
            homePage.radioButtonMedicaid.click();
            homePage.radioButtonMedicaid.should('be.checked');

            // Calendar
            homePage.calendarButton.click();
            cy.contains('.day', '30').click();

            homePage.calendarButton.click();
            homePage.calendarButton.should('contain.value', '30/')
            // Comment
            homePage.commentField.type(demoAcc.comment);
            homePage.commentField.should('have.value', 'CURA Healthcare Service');
            // Validate data
            
            // Book
            homePage.bookButton.click();
        });
    });



    
});
