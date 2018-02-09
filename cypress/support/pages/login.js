import faker from "faker";
import * as _ from 'lodash';

// Add form fill commands login page

Cypress.Commands.add('loginPageRegisterFormfill', (userData) => {
    let defaultUserData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.name.firstName() + faker.name.lastName() + "@example.com",
        dob: "01/01/1990",
        password: "Tester01",
        confirmation: "Tester01"
    }
    userData = _.merge(defaultUserData, userData);
    cy.get('#firstname').type(userData.firstName, {force: true});
    cy.get('#lastname').type(userData.lastName, {force: true});
    cy.get('#birth_date').type("01/01/1991", {force: true});
    cy.get('#email').type(userData.email, {force: true});
    cy.get('#password').type(userData.password, {force: true});
    cy.get('#confirmation').type(userData.confirmation, {force: true});
});