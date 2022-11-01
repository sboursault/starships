
import browser from "../support/browser"
import registerPage from "../pages/register.page"
import loginPage from "../pages/login.page"
import starshipListPage from "../pages/starship-list.page"

describe('User registration', () => {
  it('registers users', () => {

    const username = 'test_user'
    const password = 'passwd'

    cy.task('deleteUser', username)

    browser.gotoLoginPage()
    loginPage.getRegisterLink().click()

    registerPage.fillLogin(username)
    registerPage.fillPassword1(password)
    registerPage.fillPassword2(password)
    registerPage.submit()
    registerPage.getRegisterSuccessMessage().should("be.visible")

    // now login
    registerPage.getLoginLink().click()
    
    loginPage.fill(username, password)
    loginPage.submit()

    starshipListPage.getLoggedUserInfo().should('have.text', username)
    // TODO: actually login through cy.request
  })
})