import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from '../../service/contact-detail.service';

@Component({
  selector: 'contact-detail-form',
  templateUrl: './contact-detail-form.html',
  styleUrls: ['./contact-detail-form.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailForm {
  private contactDetailService = inject(ContactDetailService);
  contactDetailForm!: FormGroup;
  searchForm!: FormGroup;
  contactDetail: IContactDetail = {} as IContactDetail;
  genderItems$: Observable<string[]> = of(['Male', 'Female']); //mock data of selection;

  constructor(private fb: FormBuilder) {
    this.initializeContactDetailForm();
  }

  public initializeContactDetailForm() {
    //instead of this.fb.group -> can add new FromGroup
    this.contactDetailForm = this.fb.group({

      firstName: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      phoneNumber: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('^((\\+31-?)|0)?[0-9]{10}$'),
      ]),
      gender: new FormControl<string>('', [Validators.required]),
    });
  }

  onGenderSelected(value: string) {
    console.log('The Gender selected is: ' + value);
  }

  public resetForm() {
    this.contactDetailForm.reset();
  }

  savePhoneBook(): void {
    this.contactDetail = this.contactDetailForm.value;
    console.log('Contact Details:', this.contactDetail);
    this.contactDetailService.addPhoneBook({
      id: Math.random(),
      firstName: this.contactDetail.firstName,
      phoneNumber: this.contactDetail.phoneNumber,
      gender: this.contactDetail.gender,
    });

    this.resetForm();
  }
}
