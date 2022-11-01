class LoginPage {

    getLoginForm() {
        return cy.testId('login-form')
    }

    getRegisterLink() {
        return cy.testId('register-link')
    }

    fill(login: string, password: string) {
        this.getLoginForm()
            .find("input[name='username']")
            .type(login)
        this.getLoginForm()
            .find("input[name='password']")
            .type(password)
    }

    submit() {
        this.getLoginForm()
            .find("button[type='submit']")
            .click()
    }
}

export default new LoginPage();
