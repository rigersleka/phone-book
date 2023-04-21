import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder,
    private contactDetailService: ContactDetailService
  ) {
    this.contactDetail = {} as IContactDetail;
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
      this.contactDetail.phoneNumber
    );
    this.contactDetailForm.reset();
  }
}