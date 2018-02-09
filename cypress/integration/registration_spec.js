describe('Missguided Registration Page', () => {
    context('Desktop user can register on missguided', () => {
        it('should let a new user register', () => {
            cy.viewport('macbook-15');
            cy.visit("/customer/account/login/");
            cy.get('.account-login__label--last').click();
            cy.loginPageRegisterFormfill({firstName: "TestHashMerge"});
            cy.get('#register').click();
            cy.get('.success-msg span').should('have.text', "Thank you for registering with Missguided.");
        });
    });
    context('iPhone-6 user can register on missguided', () => {
        it('should let a new user register', () => {
            cy.viewport('iphone-6');
            cy.visit("/customer/account/login/");
            cy.get('.account-login__label--last').click();
            cy.loginPageRegisterFormfill();
            cy.get('#register').click();
            cy.get('.success-msg span').should('have.text', "Thank you for registering with Missguided.");
        });
    });
 });