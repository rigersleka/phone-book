import { IPhoneBook } from '../models/phone-book.model';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhoneBookService {
  private phoneBookList: IPhoneBook[] = [];

  constructor() {}

  getPhoneBook() {
    return this.phoneBookList;
  }

  addPhoneBook(firstName: string, phoneNumber: string) {
    this.phoneBookList.push({ firstName, phoneNumber });
  }

  searchPhoneBook(searchValue: string) {
    const filterUsers: IPhoneBook[] = this.phoneBookList.filter(
      (phoneBook: IPhoneBook) =>
        `${phoneBook.firstName} ${phoneBook.phoneNumber}`
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
    return filterUsers;
  }
}
