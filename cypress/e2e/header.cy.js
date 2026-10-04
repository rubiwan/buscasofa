/// <reference types="Cypress" />
// Pruebas del header de la aplicación

describe('Visualización del header de la aplicación', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('El usuario ve un enlace a la página de información', () => {
        cy.get('nav a.about')
            .should('exist')
            .should('have.attr', 'href', '/about')
            .contains('Quienes somos')
            .click();
        cy.url().should('include', '/about');   // hemos navegado a la página correctamente
    });

    it('El usuario ve un enlace al buscador', () => {
        cy.get('nav a.buscador')
            .should('exist')
            .should('have.attr', 'href', '/lista')
            .contains('Buscador')
            .click();
        cy.url().should('include', '/lista');   // hemos navegado a la página correctamente
    });

    it('El usuario ve un enlace al mapa', () => {
        cy.get('nav a.mapa')
            .should('exist')
            .should('have.attr', 'href', '/mapa')
            .contains('Mapa')
            .click();
        cy.url().should('include', '/mapa');   // hemos navegado a la página correctamente
    });

    it('El usuario ve un enlace a la página de registro', () => {
        cy.get('nav a.registro')
            .should('exist')
            .should('have.attr', 'href', '/registro')
            .contains('Registro')
            .click();
        cy.url().should('include', '/registro');   // hemos navegado a la página correctamente
    });


    it('El usuario ve un enlace a la página de login', () => {
        cy.get('nav a.login')
            .should('exist')
            .should('have.attr', 'href', '/login')
            .contains('Login')
            .click();
        cy.url().should('include', '/login');   // hemos navegado a la página correctamente
    });
});