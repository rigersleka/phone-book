import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

import { Component } from '@angular/core';
import { IPhoneBook } from 'src/app/models/phone-book.model';
import { PhoneBookService } from '../../service/phone-book.service';

@Component({
  selector: 'app-phone-book-search',
  templateUrl: './phone-book-search.component.html',
  styleUrls: ['./phone-book-search.component.css'],
})
export class PhoneBookSearchComponent {
  searchInput: string = '';

  private searchPhoneBook$$ = new BehaviorSubject<string>('');
  private phoneBookList$ = this.phoneBookService.phoneBook$;

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

  constructor(private phoneBookService: PhoneBookService) {}

  onSearchItems(searchContact: Event) {
    this.searchPhoneBook$$.next(
      (searchContact.target as HTMLInputElement).value
    );
  }
}
