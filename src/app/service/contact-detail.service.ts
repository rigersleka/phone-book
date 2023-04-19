import { BehaviorSubject, Observable, of } from 'rxjs';

import { IPhoneBook } from '../models/phone-book.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailService {
  private phoneBookList: IPhoneBook[] = [];
  private phoneBook$$ = new BehaviorSubject<IPhoneBook[]>([]);
  phoneBook$ = this.phoneBook$$.asObservable();

  constructor() {}

  addPhoneBook(firstName: string, phoneNumber: string) {
    this.phoneBookList.push({ firstName, phoneNumber });
    this.phoneBook$$.next(this.phoneBookList);
  }

  searchPhoneBook(searchValue: string) {
    const filterUsers: IPhoneBook[] = this.phoneBookList.filter(
      (phoneBook: IPhoneBook) =>
        `${phoneBook.firstName} ${phoneBook.phoneNumber}`
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
    this.phoneBook$$.next(filterUsers);
  }
}
