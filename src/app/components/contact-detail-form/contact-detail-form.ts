import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from '../../service/contact-detail.service';

@Component({
  selector: 'contact-detail-form',
  templateUrl: './contact-detail-form.html',
  styleUrls: ['./contact-detail-form.css'],
})
export class ContactDetailForm implements OnInit {
  contactDetailForm!: FormGroup;
  searchForm!: FormGroup;
  contactDetail: IContactDetail;
  contactDetailList: IContactDetail[] = [];

  private optionsSubject$$ = new BehaviorSubject<string>('');
  optionsSubject$ = this.optionsSubject$$.asObservable();

  initialGenders = of(['Male', 'Female']);
  selectedOption = '';
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
      firstName: new FormControl(this.contactDetail.firstName, [
        Validators.required,
        Validators.minLength(2),
      ]),
      phoneNumber: new FormControl(this.contactDetail.phoneNumber, [
        Validators.required,
        Validators.pattern('^((\\+31-?)|0)?[0-9]{10}$'),
      ]),
      selectGender: new FormControl(this.contactDetail.gender, [
        Validators.required,
      ]),
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

  get selectGender() {
    return this.contactDetailForm.get('selectGender')!;
  }

  getGenderItems() {
    return this.initialGenders;
  }
  savePhoneBook(): void {
    //check validation of all the form
    if (this.contactDetailForm.invalid) {
      for (const control of Object.keys(this.contactDetailForm.controls)) {
        this.contactDetailForm.controls[control].markAsTouched();
      }
      return;
    }

    this.contactDetail = this.contactDetailForm.value;
    this.contactDetailService.addPhoneBook(
      this.contactDetail.firstName,
      this.contactDetail.phoneNumber,
      this.contactDetail.gender
    );

    this.contactDetailForm.reset();
  }
}
