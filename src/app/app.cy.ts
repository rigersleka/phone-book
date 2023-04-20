import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  it('mounts', () => {
    cy.mount(AppComponent);
  });
});
