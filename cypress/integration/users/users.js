/*
* @Author: fatoni
* @Date:   2019-07-01 21:26:10
* @Last Modified by:   fatoni
* @Last Modified time: 2019-07-01 22:26:58
*/
// context('Index', () => {
//   beforeEach(() => {
//     cy.visit('https://example.cypress.io/commands/actions')
//   })
// });

import faker from 'faker'

describe('Users', function() {
	const email = faker.internet.email()
	const name = faker.name.findName()

	const email2 = faker.internet.email()
	const name2 = faker.name.findName()
  it('Visits list page', function() {
    cy.visit('localhost:3000/users')
    cy.contains('User Management')
    cy.wait(1000)
  })
  it('Show add form', function() {
    cy.contains('Add User').click()
    cy.contains('Add Data User')
  })
  it('Add data', function() {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#submit').click()
  })
  it('See new data', function() {
    cy.contains(name)
    cy.contains(email)
    cy.wait(1000)
  })
  it('Show Edit form', function() {
    cy.contains('Edit').click()
    cy.contains('Edit Data User')
  })
  it('Update data', function() {
    cy.get('#name').clear().type(name2)
    cy.get('#email').clear().type(email2)
    cy.wait(1000)
    cy.get('#submit').click()
  })
  it('See updated data', function() {
    cy.contains(name2)
    cy.contains(email2)
    cy.wait(1000)
  })
  it('Delete data', function() {
  	cy.wait(1000)
    cy.contains('Delete').click()
  })
})