import { AsyncState, toAsyncState } from '@ngneat/loadoff';
import {
  BehaviorSubject,
  Observable,
  shareReplay,
  tap
} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContactDetail } from '../models/contact-detail.model';

/**
  Design Pattern: : Stateless Observable based Services
  Service that only retrieve data from a request to backend, but doesn't do anything else. (StoreService does)
*/

@Injectable({
  providedIn: 'root',
})
export class ContactDetailService {
  private contactDetailList: IContactDetail[] = [];
  private contactDetail$$ = new BehaviorSubject<IContactDetail[]>([]);
  contactDetail$ = this.contactDetail$$.asObservable();
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  loadAllContactDetails$: Observable<AsyncState<IContactDetail[]>> = this.http
    .get<IContactDetail[]>(`${this.baseUrl}/contact-details`)
    .pipe(
      toAsyncState(),
      tap((a) => console.log(a)),
      shareReplay({ bufferSize: 1, refCount: true }) // for multiple subscription, do only one http-request
    );
  results$: Observable<AsyncState<IContactDetail[]>> =
    this.loadAllContactDetails$;

  addPhoneBook(firstName: string, phoneNumber: string, gender: string) {
    this.contactDetailList.push({ firstName, phoneNumber, gender });
    this.contactDetail$$.next(this.contactDetailList);
  }
}
