/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (path) {
    cy.visit(path);
});

Then("debería ver el texto {string}", function (text) {
    cy.contains(text).should("exist");
});