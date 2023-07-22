import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from '../../service/contact-detail.service';

@Component({
  selector: 'contact-detail-form',
  templateUrl: './contact-detail-form.html',
  styleUrls: ['./contact-detail-form.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailForm implements OnInit {
  private contactDetailService = inject(ContactDetailService);
  contactDetailForm!: FormGroup;
  searchForm!: FormGroup;
  contactDetail: IContactDetail;
  initialGenders = of(['Male', 'Female']); //mock data of selection
  genderItems$: Observable<string[]>;

  constructor() {
    this.contactDetail = {} as IContactDetail;
    this.genderItems$ = this.getGenderItems();
  }

  getGenderItems() {
    return this.initialGenders;
  }

  ngOnInit() {
    this.contactDetailForm = new FormGroup({
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

  savePhoneBook(): void {
    this.contactDetail = this.contactDetailForm.value;
    console.log('Contact Details:', this.contactDetail);
    this.contactDetailService.addPhoneBook({
      firstName: this.contactDetail.firstName,
      phoneNumber: this.contactDetail.phoneNumber,
      gender: this.contactDetail.gender,
    });

    this.contactDetailForm.reset();
  }
}
