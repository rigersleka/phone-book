import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IContactDetail } from '../models/contact-detail.model';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailService {
  private contactDetailList: IContactDetail[] = [];
  private contactDetail$$ = new BehaviorSubject<IContactDetail[]>([]);
  contactDetail$ = this.contactDetail$$.asObservable();

  constructor() {}

  addPhoneBook(firstName: string, phoneNumber: string, gender: string) {
    this.contactDetailList.push({ firstName, phoneNumber, gender });
    this.contactDetail$$.next(this.contactDetailList);
  }
}
