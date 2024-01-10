# Cypress Framework Template 
## By **Prabha Devaraj** |
---
## Description:
Using the "Automation Exericise" sample application to create this automation framework

Url : https://automationexercise.com/

Using Cypress, we will create a test automation framework with the following features:

- The Page Object Model is a pattern
- BDD (Cucumber) support
- multi-browser testing support
- Create reports that include videos and screenshots
- Test results dashboard with options to compare, analyze history, and generate graphs.
- CI integration



```
## 🚀 Lets get started...

## 🟩 PART 1️⃣

## 1. Create an empty repo in VCS (e.g. GitHub) and clone
## 2. Initialize node project and install cypress

```
npm init -y
npm install cypress --save-dev
npx cypress open
```

## 3. Add BDD support (Gherkin syntax)

### Install

```
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```

### add to config

`cypress.config.js`

```javascript
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
	specPattern: "**/*.feature",
  },
});

```

### configure the cypress-cucumber-preprocessor to using global step definitions

`package.json`

```javascript
"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/step_definitions/",
    "nonGlobalStepDefinitions": false
  }
```

## 4. Create Page Objects

`e2e/pages/elements.js`

```javascript
module.exports = {
    SIGNUPORLOGIN:{
        LOGIN_EMAIL: "[data-qa='login-email']",
        LOGIN_PASSWORD: "[data-qa='login-password']",
        LOGIN_BUTTON: "button[data-qa='login-button']"
    }
}
```

`e2e/pages/loginPage.js`

```javascript
var elements = require('./elements')

class LoginPage {
  typeInToEmailField(value) {
    return cy.get(elements.SIGNUPORLOGIN.LOGIN_EMAIL).type(value)
  }
  typeInToPasswordField(value) {
    return cy.get(elements.SIGNUPORLOGIN.LOGIN_PASSWORD).type(value)
  }
  clickLoginButton() {
    return cy.get(elements.SIGNUPORLOGIN.LOGIN_BUTTON).click()
  }
}
export default LoginPage```

## 5. Add Step Definitions

`cypress/support/step_definitions/steps.js`

```javascript
import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../../e2e/pages/loginPage'

const loginPage = new LoginPage()

Given('User opens the automation Exercise website', () => {
    //cy.visit('/')
    cy.visit('https://automationexercise.com/')
 })

Then('User sees the home page' , () => {
    cy.contains(' Signup / Login')
})

When('User login with correct email id and password', () => {
    cy.contains(' Signup / Login').click()
    loginPage.typeInToEmailField("cytestuser@gmail.com")
    loginPage.typeInToPasswordField("Test123")
    loginPage.clickLoginButton()
})

Then('User can see the logged in user name on the page', () => {
    cy.contains("cytestuser")
})

```

## 6. Add feature files

`e2e/features/LoginToAE.feature`

```gherkin
Feature: Login to automation exercise website
    Scenario: Login user with correct email id and password
        Given User opens the automation Exercise website
        And User sees the home page
        When User login with correct email id and password
        Then User can see the logged in user name on the page
    



```
## 7. Add IDE plugin for `.feature` files

## 🟩 PART 2️⃣

## 8. Run aginst Multiple Browsers  --- Work in Progress

## 9. Define report  - Work in progress

## THANK YOU 🙂
