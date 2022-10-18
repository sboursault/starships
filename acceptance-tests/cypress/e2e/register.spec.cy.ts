
import browser from "../support/browser"
import registerPage from "../pages/register.page"
import loginPage from "../pages/login.page"

describe('User registration', () => {
  it('passes', () => {
    
    // remove user with api call
    
    browser.gotoLoginPage()
    loginPage.getRegisterLink().click()
    
    registerPage.fillLogin("seb78")
    registerPage.fillPassword1("complex_password!")
    registerPage.fillPassword2("complex_password!")
    registerPage.submit()
    registerPage.getRegisterSuccessMessage().should("be.visible")

    // now login
    registerPage.getLoginLink().click()

  })
})