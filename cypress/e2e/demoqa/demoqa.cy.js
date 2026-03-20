import { homePage } from "../pageObjects/homePage";
import { appointmentPage } from "../pageObjects/appointmentPage";

describe('DEMO QA', () => {
    context('Appointment test', () => {
        beforeEach(() => {
            cy.visit('');
        });
        it('Make Appointment', () => {
            const demoAcc = {
                user: 'John Doe',
                pass: 'ThisIsNotAPassword',
                comment: ' CURA Healthcare Service'
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
            // Checkbox
            homePage.checkBoxApply.click();
            // Program
            homePage.radioButtonMedicaid.click();
            // Calendar
            homePage.calendarButton.click();
            cy.contains('.day', '30').click();
            // Comment
            homePage.commentField.type(demoAcc.comment);
            // Book
            homePage.bookButton.click();
        });
    });



    
});
