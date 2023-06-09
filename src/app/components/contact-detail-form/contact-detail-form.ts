import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class ContactDetailForm implements OnInit {
  contactDetailForm!: FormGroup;
  searchForm!: FormGroup;
  contactDetail: IContactDetail;

  initialGenders = of(['Male', 'Female']); //mock data of selection
  genderItems$: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private contactDetailService: ContactDetailService
  ) {
    this.contactDetail = {} as IContactDetail;

    this.genderItems$ = this.getGenderItems();
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

    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  get firstName() {
    return this.contactDetailForm.get('firstName')!;
  }

  get phoneNumber() {
    return this.contactDetailForm.get('phoneNumber')!;
  }

  getGenderItems() {
    return this.initialGenders;
  }

  savePhoneBook(): void {
    this.contactDetail = this.contactDetailForm.value;
    console.log('contactDetail:', this.contactDetail)
    this.contactDetailService.addPhoneBook(
      this.contactDetail.firstName,
      this.contactDetail.phoneNumber,
      this.contactDetail.gender
    );

    this.contactDetailForm.reset();
  }

  onGenderSelected(value: string) {
    console.log('the selected value is ' + value);
  }
}
