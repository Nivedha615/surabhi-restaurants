describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('SURABHI RESTAURANTS')
    cy.contains('User Login')
    cy.contains('Admin Login')
  })
})
describe('uSER Login Test',()=> {
  it('Visits loginPage',()=>{
    cy.visit('/userlogin')
  })

describe(' user registration tests',()=>{
  it('Visits registrationPage',()=>{
    cy.visit('/register')
})
describe('admindashboard page tests',()=>{
  it('Visits Admin dash boardPage',()=>{
    cy.visit('/admindashboard')
})
describe('usermenu page tests',()=>{
  it('Visits usermenuPage',()=>{
    cy.visit('/usermenu')
})
describe('addcart page tests',()=>{
  it('Visits add cartPage',()=>{
    cy.visit('/addcart')
})

})
})
})
})
})


