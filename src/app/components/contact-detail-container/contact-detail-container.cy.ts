import { ContactDetailContainer } from './contact-detail-container';
import { MountConfig } from 'cypress/angular';

describe(ContactDetailContainer.name, () => {
  const config: MountConfig<ContactDetailContainer> = {
    imports: [],
  };

  it('mounts ContactDetailContainer', () => {
    cy.mount(ContactDetailContainer, config);
  });
});
