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

  //First Name parameter
  it('displays First name input', () => {
    cy.wait(2000);
    cy.log('Waiting for firstName element to appear...');
    cy.get('input[name="firstName"]', { timeout: 5000 });

    /* Second Way of using get*/
    // cy.get('#firstName').type(firstName);
    // cy.contains('First name is required').should('not.exist');
    // cy.log(`${firstName}`);
  });

  it('should call onSave with firstName and phoneNumber when Save button is clicked', () => {
    cy.get('@firstName').type(firstName);
    cy.get('@phoneNumber').type(phoneNumber);
    cy.get('@saveContactDetail').click();
    cy.get('@saveContactDetail').should('have.been.calledWith', {
      firstName,
      phoneNumber,
    });
  });
});
