import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

describe(AppComponent.name, () => {
  it('mounts', () => {
    cy.mount(AppComponent);
  });

  it('verify that HeaderComponent is called', () => {
    cy.mount(HeaderComponent);
    cy.get('[data-cy="header-component"]');
  });

  it('verify that ContactDetailContainer is called', () => {
    cy.mount(AppComponent);
    cy.get('[data-cy="contact-detail"]');
  });
});
