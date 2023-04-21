import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

import { Component } from '@angular/core';
import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from 'src/app/service/contact-detail.service';

@Component({
  selector: 'contact-detail-search',
  templateUrl: './contact-detail-search.html',
  styleUrls: ['./contact-detail-search.component.css'],
})
export class ContactDetailSearch {
  searchInput: string = '';

  private searchContactDetail$$ = new BehaviorSubject<string>('');
  private contactDetailList$ = this.contactDetailService.contactDetail$;

  filteredItems$: Observable<IContactDetail[]> = combineLatest([
    this.contactDetailList$,
    this.searchContactDetail$$,
  ]).pipe(
    map(([contactDetailList, searchContactDetail]) =>
      contactDetailList.filter((phoneBook: IContactDetail) =>
        `${phoneBook.firstName} ${phoneBook.phoneNumber}`
          .toLowerCase()
          .includes(searchContactDetail.toLowerCase())
      )
    )
  );

  constructor(private contactDetailService: ContactDetailService) {}

  onSearchItems(searchContact: Event) {
    this.searchContactDetail$$.next(
      (searchContact.target as HTMLInputElement).value
    );
  }
}
