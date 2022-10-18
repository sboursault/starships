class Browser {
    gotoLoginPage() {
        cy.visit('/')
    }
}
export default new Browser()
