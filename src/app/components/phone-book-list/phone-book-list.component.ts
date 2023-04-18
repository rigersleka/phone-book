import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import { IPhoneBook } from 'src/app/models/phone-book.model';
import { Observable } from 'rxjs';
import { PhoneBookService } from '../../service/phone-book.service';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneBookListComponent implements OnInit {
  phoneBookList: IPhoneBook[] = [];
  searchPhoneBook: IPhoneBook[] = [];
  phoneBookList$: Observable<IPhoneBook[]> = this.phoneBookService.phoneBook$;

  constructor(private phoneBookService: PhoneBookService) {}

  ngOnInit(): void {
    this.searchPhoneBook = this.phoneBookList;
  }
}
