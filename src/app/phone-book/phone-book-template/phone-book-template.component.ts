import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IPhoneBook {
  firstName: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-phone-book-template',
  templateUrl: './phone-book-template.component.html',
  styleUrls: ['./phone-book-template.component.css'],
})
export class PhoneBookTemplateComponent implements OnInit {
  phoneBookForm!: FormGroup;
  phoneBook: IPhoneBook;

  constructor() {
    this.phoneBook = {} as IPhoneBook;
  }

  ngOnInit() {
    this.phoneBookForm = new FormGroup({
      firstName: new FormControl(this.phoneBook.firstName, [
        Validators.required,
        Validators.minLength(2),
      ]),
      phoneNumber: new FormControl(this.phoneBook.phoneNumber, [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  get firstName() {
    return this.phoneBookForm.get('firstName')!;
  }

  get phoneNumber() {
    return this.phoneBookForm.get('phoneNumber')!;
  }

  savePhoneBook(): void {
    //check validation of all the form
    if (this.phoneBookForm.invalid) {
      for (const control of Object.keys(this.phoneBookForm.controls)) {
        this.phoneBookForm.controls[control].markAsTouched();
      }
      return;
    }

    this.phoneBook = this.phoneBookForm.value;
  }
}
