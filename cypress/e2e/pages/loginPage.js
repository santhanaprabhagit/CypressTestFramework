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
export default LoginPage