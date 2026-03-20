export class historyPage{
    static get url(){
        return '';
    }

    static get sidebar(){
        return cy.get('#menu-toggle');
    }

    static get nav(){
        return cy.get('#sidebar-wrapper');
    }

    static get historyList(){
        return cy.get('#history');
    }
    


}