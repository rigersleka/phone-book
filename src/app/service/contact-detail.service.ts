import { BehaviorSubject, Observable, of } from 'rxjs';

import { IContactDetail } from '../models/contact-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailService {
  private contactDetailList: IContactDetail[] = [];
  private phoneBook$$ = new BehaviorSubject<IContactDetail[]>([]);
  phoneBook$ = this.phoneBook$$.asObservable();

  constructor() {}

  addPhoneBook(firstName: string, phoneNumber: string) {
    this.contactDetailList.push({ firstName, phoneNumber });
    this.phoneBook$$.next(this.contactDetailList);
  }

  searchContactDetail(searchValue: string) {
    const filterUsers: IContactDetail[] = this.contactDetailList.filter(
      (phoneBook: IContactDetail) =>
        `${phoneBook.firstName} ${phoneBook.phoneNumber}`
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
    this.phoneBook$$.next(filterUsers);
  }
}
