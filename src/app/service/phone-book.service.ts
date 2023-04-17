import { IPhoneBook } from '../models/phone-book.model';
import { Injectable } from '@angular/core';

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

  getSearchPhoneBook(phoneBookListAll: IPhoneBook[], searchValue: string) {
    return phoneBookListAll.filter((phoneBook) =>
      `${phoneBook.firstName} ${phoneBook.phoneNumber}`
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  }
}
