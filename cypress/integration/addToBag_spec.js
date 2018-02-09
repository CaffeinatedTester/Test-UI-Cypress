beforeEach( function () {
    cy.server();
});

describe('Missguided Product Page', function () {
    context('Desktop User', function () {
        it('Should allow a user to add a product to bag', function () {
            cy.viewport('macbook-15');
            cy.visitProductPage();
            cy.route('POST', /ajax\/cart\/add/).as('getLogin')
            cy.get('#addToBasketButton').click();
            cy.wait('@getLogin').then(function(xhr){
                expect(xhr.status).to.equal(200);
            });
        });
    });
    context('Mobile user can register on missguided', function () {
        it('Should allow a user to add a product to bag', function () {
            cy.viewport('iphone-6');
            cy.visitProductPage();
            cy.route('POST', /ajax\/cart\/add/).as('getLogin')
            cy.get('#addToBasketButton').click();
            cy.wait('@getLogin').then(function(xhr){
                expect(xhr.status).to.equal(200);
            });
        });
    });
 });