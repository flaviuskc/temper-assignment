/// <reference types="cypress" />

Cypress.Commands.add('getByData', selector => {
    return cy.get(`[data-cy=${selector}]`)
})

declare global {
  namespace Cypress {
    interface Chainable {
        getByData(selector: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

export {}
