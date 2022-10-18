class LoginPage {

    getRegisterLink() {
        return cy.testId('register-link')
    }

}

export default new LoginPage();
