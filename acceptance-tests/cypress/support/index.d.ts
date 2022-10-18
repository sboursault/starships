declare namespace Cypress {
	interface Chainable {
		/**
		 * Custom command to select DOM element by data-testid attribute.
		 * @example cy.testId('greeting')
		 */
		testId(value: string): Chainable<JQuery<HTMLElement>>
	}
}
