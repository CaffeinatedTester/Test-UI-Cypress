# MG | Test | UI Framework | Cypress

## Versions / Dependencies

```
NVM:    v0.33.8       
Node:   8.9.4        
NPM:    1.2.1         
```

__IMPORTANT:__ Whilst the the nature of cypress is to be accessible, there are some concepts that need following. I suggest reading these prior to usage:

* https://docs.cypress.io/guides/getting-started/writing-your-first-test.html
* https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Asynchronous
* https://docs.cypress.io/guides/references/best-practices.html
* https://docs.cypress.io/guides/references/trade-offs.html


__Todo:__ Frontend Developers to review, teak and assess viability

__Notes:__ 
* No local evironment has been set up, so manual installation is nessasary at the moment. Docker images are available for CI from cypress.io
* Cypress feels very much like 'Testing on Rails'. Its designed to work in a specifc way and it very easy to get running. However it has drawbacks due to this in that it makes a lot of assumptions when interacting with elements, such as failing on elements with 'labels'. I recommend reading up the links above before writing any tests.


## Getting up and running

```bash
# Pre: Ensure dependancies are installed

# 1: Create new folder in desired location and move into it
$ mkdir MG-Test-UI-Framework-Cypress
$ cd MG-Test-UI-Framework

# 2: Clone the repo
$ git clone https://github.com/dskinnerMg/Test-UI-Cypress.git

# 3: Install dependencies
$ npm install
```

## Commands

```bash
# Opens up the cypress app UI
$ npm run cypress:open

# Runs the tests headlessly
$ npm run cypress:run --browser electron

# See the cypress CLI page for more info

```

## Configuring for environments

The environment details are stored in the `cypress.json` file. To change environment, change the `baseUrl` to your desired env.

To enable the framework work with products, a product url path needs to be added into `cyress/fixtures/productData.json`, with the key of `productUrl`.

## Tech Details

* Cypress - Self proclaiming E2E test framework. Designed to keep UI tests simple and reliable. https://www.cypress.io/

* Cypress/Mocha + Chai - Cypress uses the Mocha & Chai combination for test runner and assertion library.

## Project Structure

```bash
# All the test code lives in here
./cypress/

# New commands and supporting helpers are stored in this directory
./cypress/support/

# Page helpers are stored in here. This is where custom cypress commands
# are stored such as: cy.visitProductPage();
./cypress/support/pages/

# Storage of static data. Can be accessed by cy.fixtures('filename') command. I suggest a read up on the async nature of Cypress prior to this. An example of its use resides in the ./cypress/pages/product.js file, the cy.visitProductPage() function...
./cypress/fixtures/

# Cypress plugins
./cypress/plugins/

# Location of all test files
./cypress/integration/