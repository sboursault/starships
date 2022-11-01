class StarshipListPage {

    getLoggedUserInfo() {
        return cy.testId('logged-user')
    }
}

export default new StarshipListPage();
