class RegisterPage {

    getRegisterForm() {
        return cy.testId('register-form')
    }

    getRegisterSuccessMessage() {
        return cy.testId('register-success-msg')
    }

    getLoginLink() {
        return cy.testId('register-success-login-link')
    }

    fillLogin(value: string) {
        this.getRegisterForm()
            .find("input[name='username']")
            .type(value)
    }

    fillPassword1(value: string) {
        this.getRegisterForm()
            .find("input[name='password1']")
            .type(value)
    }

    fillPassword2(value: string) {
        this.getRegisterForm()
            .find("input[name='password2']")
            .type(value)
    }

    submit() {
        this.getRegisterForm()
            .find("button[type='submit']")
            .click()
    }

}

export default new RegisterPage()
