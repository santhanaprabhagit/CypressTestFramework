import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../../e2e/pages/loginPage'

const loginPage = new LoginPage()

Given('User opens the automation Exercise website', () => {
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
