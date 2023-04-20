import { ContactDetailForms } from './contact-detail-forms';
import { MountConfig } from 'cypress/angular';

describe(ContactDetailForms.name, () => {
  const config: MountConfig<ContactDetailForms> = {
    imports: [],
  };

  it('mounts ContactDetailForms', () => {
    cy.mount(ContactDetailForms, config);
  });
});
