import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactDetailForm } from './contact-detail-form';
import { ContactDetailService } from 'src/app/service/contact-detail.service';
import { MountConfig } from 'cypress/angular';

describe(ContactDetailForm.name, () => {
  const firstName = 'Rigers';
  const phoneNumber = '123456789';

  const config: MountConfig<ContactDetailForm> = {
    imports: [FormsModule, ReactiveFormsModule],
    providers: [ContactDetailService],
  };

  it('mounts ContactDetailForm', () => {
    cy.mount(ContactDetailForm, config);
  });

  it('should not show any validation errors before contact detail is attempted', () => {
    cy.contains('First Name is required').should('not.exist');
    cy.contains('Phone Number is required').should('not.exist');
  });

  it('get First Name input', () => {
    cy.mount(ContactDetailForm, config);

    cy.get('[data-cy="firstName"]').type(firstName);
    cy.get('[data-cy="firstName"]').should('have.value', 'Rigers');
    cy.log(`${firstName}`);
  });

  it('get Phone Number input', () => {
    cy.mount(ContactDetailForm, config);

    cy.get('[data-cy="phoneNumber"]').type(phoneNumber);
    cy.get('[data-cy="phoneNumber"]').should('have.value', '123456789');
    cy.log(`${phoneNumber}`);
  });

  it('get Button to be clicked', () => {
    cy.mount(ContactDetailForm, config);
    cy.get('[data-cy="save-button"]').click({ force: true });

    cy.log(`${phoneNumber}`);
  });
});
