import { BehaviorSubject, Observable, of } from 'rxjs';

import { IContactDetail } from '../models/contact-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailService {
  private contactDetailList: IContactDetail[] = [];
  private contactDetail$$ = new BehaviorSubject<IContactDetail[]>([]);
  contactDetail$ = this.contactDetail$$.asObservable();

  constructor() {}

  addPhoneBook(firstName: string, phoneNumber: string) {
    this.contactDetailList.push({ firstName, phoneNumber });
    this.contactDetail$$.next(this.contactDetailList);
  }
}
