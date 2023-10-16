import { BehaviorSubject, Observable, ReplaySubject, share } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IContactDetail } from '../models/contact-detail.model';

/**
  Design Pattern: : Stateless Observable based Services
  Service that only retrieve data from a request to backend, but doesn't do anything else. (StoreService does_check check course)
*/

@Injectable({
  providedIn: 'root',
})
export class ContactDetailService {
  private http = inject(HttpClient);
  private baseUrl = `http://localhost:3000`;
  private contactDetailList: IContactDetail[] = [];
  private addContactDetailElement$$ = new BehaviorSubject<IContactDetail[]>([]);
  readonly addContactDetailElement$ = this.addContactDetailElement$$.asObservable();

  loadAllResultContactDetails$: Observable<IContactDetail[]> = this.http
    .get<IContactDetail[]>(`${this.baseUrl}/contact-details`)
    .pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnRefCountZero: true,
      })
      //shareReplay({ bufferSize: 1, refCount: true }) // for multiple subscription, do only one http-request
    );

  addPhoneBook(param: {id: number, firstName: string, phoneNumber: string, gender: string}) {
    this.contactDetailList = [...this.contactDetailList, param as IContactDetail]
    // this.contactDetailList.push({ firstName, phoneNumber, gender }); -> better using spread operator instead of push
    console.log('this.contactDetailList:', this.contactDetailList)
    this.addContactDetailElement$$.next(this.contactDetailList);
  }
}

/**
  shareReplay() & share() have the same behavior
  Should use share() instead of shareReply().
  Why? shareReply() will be deprecated
 */
