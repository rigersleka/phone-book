import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { IPhoneBook } from 'src/app/models/phone-book.model';
import { PhoneBookService } from '../../../service/phone-book.service';

@Component({
  selector: 'app-phone-book-template',
  templateUrl: './phone-book-template.component.html',
  styleUrls: ['./phone-book-template.component.css'],
})
export class PhoneBookTemplateComponent implements OnInit {
  phoneBookForm!: FormGroup;
  searchForm!: FormGroup;
  phoneBook: IPhoneBook;
  phoneBookList: IPhoneBook[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private phoneBookService: PhoneBookService
  ) {
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
        Validators.pattern('^((\\+31-?)|0)?[0-9]{10}$'),
      ]),
    });

    this.searchForm = this.formBuilder.group({
      search: '',
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
    this.phoneBookService.addPhoneBook(
      this.phoneBook.firstName,
      this.phoneBook.phoneNumber
    );
    this.phoneBookForm.reset();
  }
}
