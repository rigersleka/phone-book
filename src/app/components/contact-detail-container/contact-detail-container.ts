import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ContactDetailService } from '../../service/contact-detail.service';
import { IPhoneBook } from 'src/app/models/phone-book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './contact-detail-container.html',
  styleUrls: ['./contact-detail-container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailContainer implements OnInit {
  phoneBookList: IPhoneBook[] = [];
  searchPhoneBook: IPhoneBook[] = [];
  phoneBookList$: Observable<IPhoneBook[]> =
    this.contactDetailService.phoneBook$;

  constructor(private contactDetailService: ContactDetailService) {}

  ngOnInit(): void {
    this.searchPhoneBook = this.phoneBookList;
  }
}
