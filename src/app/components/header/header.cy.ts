import { MountConfig } from 'cypress/angular';
import { HeaderComponent } from './header.component';

describe(HeaderComponent.name, () => {
  const config: MountConfig<HeaderComponent> = {
    imports: [],
  };

  it('mounts HeaderComponent', () => {
    cy.mount(HeaderComponent, config);
  });
});
