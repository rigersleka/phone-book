import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  it('mounts', () => {
    cy.mount(AppComponent);
  });

  it('verify that WelcomeComponent is called', () => {
    cy.mount(AppComponent);
    cy.get('[data-cy="welcome-component"]');
  });

  it('verify that ContactDetailContainer is called', () => {
    cy.mount(AppComponent);
    cy.get('[data-cy="contact-detail"]');
  });
});
