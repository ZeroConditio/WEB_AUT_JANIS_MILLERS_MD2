export class homePage{
    static get url(){
        return '';
    }

    static get makeAppointment(){
        return cy.get('#btn-make-appointment')
    }

    static get usernameField(){
        return cy.get('#txt-username');
    }

    static get passwordField(){
        return cy.get('#txt-password');
    }
    
    static get loginButton(){
        return cy.get('#btn-login');
    }
    
    static get checkBoxApply(){
        return cy.get('#chk_hospotal_readmission')
    }

    static get radioButtonMedicaid(){
        return cy.get('#radio_program_medicaid');
    }

    static get calendarButton(){
        return cy.get('#txt_visit_date');
    }

    static get commentField(){
        return cy.get('#txt_comment');
    }

    static get bookButton(){
        return cy.get('#btn-book-appointment');
    }
}
