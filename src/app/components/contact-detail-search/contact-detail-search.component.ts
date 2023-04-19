import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

import { Component } from '@angular/core';
import { ContactDetailService } from 'src/app/service/contact-detail.service';
import { IPhoneBook } from 'src/app/models/phone-book.model';

@Component({
  selector: 'contact-detail-search',
  templateUrl: './contact-detail-search.html',
  styleUrls: ['./contact-detail-search.component.css'],
})
export class ContactDetailSearch {
  searchInput: string = '';

  private searchPhoneBook$$ = new BehaviorSubject<string>('');
  private phoneBookList$ = this.contactDetailService.phoneBook$;

  filteredItems$: Observable<IPhoneBook[]> = combineLatest([
    this.phoneBookList$,
    this.searchPhoneBook$$,
  ]).pipe(
    map(([phoneBookList, searchPhoneBook]) =>
      phoneBookList.filter(
        (phoneBook: IPhoneBook) =>
          `${phoneBook.firstName} ${phoneBook.phoneNumber}`
            .toLowerCase()
            .includes(searchPhoneBook.toLowerCase())
        // this.phoneBookService.getPhoneBook().filter((phoneBook: IPhoneBook) => `${phoneBook.firstName} ${phoneBook.phoneNumber}`
        //     .toLowerCase()
        //     .includes(searchPhoneBook.toLowerCase()))
      )
    )
  );

  constructor(private contactDetailService: ContactDetailService) {}

  onSearchItems(searchContact: Event) {
    this.searchPhoneBook$$.next(
      (searchContact.target as HTMLInputElement).value
    );
  }
}
