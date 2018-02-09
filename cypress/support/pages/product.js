Cypress.Commands.add('visitProductPage', () => {
    cy.fixture('productData.json').then(function (data) {
        cy.visit(data.productUrl);
    });
});