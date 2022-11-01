export class BasePage {

    getLoggedUserInfo() {
        return cy.testId('logged-user')
    }
}
