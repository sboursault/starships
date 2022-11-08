
import browser from "../support/browser"
import registerPage from "../pages/register.page"
import loginPage from "../pages/login.page"
import starshipListPage from "../pages/starship-list.page"

describe('User registration', () => {

  const username = 'test_user'
  const password = 'passwd'

  beforeEach(() => {
    cy.task('deleteUser', username)
  })

  /**
   * This is how a user registers and sign in.
   */
  specify('-- Happy path -- filling the registration form and signing in', () => {

    browser.gotoLoginPage()
    loginPage.getRegisterLink().click()

    registerPage.fillUsername(username)
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

  /**
   * Edge case
   */
  specify('username, password1 and password2 are mandatory', () => {

    registerPage.visit()
    registerPage.submit()

    registerPage.getUsernameErrorMessage().should('contain.text', 'This field is required.')
    registerPage.getPassword1ErrorMessage().should('contain.text', 'This field is required.')
    registerPage.getPassword2ErrorMessage().should('contain.text', 'This field is required.')
  })

  /**
   * Edge case
   */
  specify('password1 and password2 must be the same', () => {

    registerPage.visit()
    registerPage.fillUsername(username)
    registerPage.fillPassword1('test')
    registerPage.fillPassword2('zut')
    registerPage.submit()

    registerPage.getPassword2ErrorMessage().should('contain.text', 'The two password fields didn’t match.')
  })
})