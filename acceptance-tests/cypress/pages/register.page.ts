class RegisterPage {

    visit() {
        cy.visit('/register')
    }

    getRegisterForm() {
        return cy.testId('register-form')
    }

    getRegisterSuccessMessage() {
        return cy.testId('register-success-msg')
    }

    getLoginLink() {
        return cy.testId('register-success-login-link')
    }

    getUsernameInput() {
        return this.getRegisterForm()
            .find("input[name='username']")
    }

    getUsernameErrorMessage() {
        return this.getUsernameInput().next()
    }

    getPassword1Input() {
        return this.getRegisterForm()
            .find("input[name='password1']")
    }

    getPassword1ErrorMessage() {
        return this.getPassword1Input().next()
    }

    getPassword2Input() {
        return this.getRegisterForm()
            .find("input[name='password2']")
    }

    getPassword2ErrorMessage() {
        return this.getPassword2Input().next()
    }

    fillUsername(value: string) {
        this.getUsernameInput()
            .type(value)
    }

    fillPassword1(value: string) {
        this.getPassword1Input()
            .type(value)
    }

    fillPassword2(value: string) {
        this.getPassword2Input()
            .type(value)
    }

    submit() {
        this.getRegisterForm()
            .find("button[type='submit']")
            .click()
    }

}

export default new RegisterPage()
