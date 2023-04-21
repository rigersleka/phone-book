import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { IPhoneBook } from 'src/app/models/phone-book.model';
import { PhoneBookService } from '../../service/phone-book.service';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css'],
})
export class PhoneBookListComponent implements OnInit {
  phoneBookList: IPhoneBook[] = [];
  searchPhoneBook: IPhoneBook[] = [];
  searchInput: string = '';
  multipleFormsList: number[] = [1, 2, 3, 4];

  constructor(private phoneBookService: PhoneBookService) {}

  ngOnInit(): void {
    this.phoneBookList = this.phoneBookService.getPhoneBook();
    this.searchPhoneBook = this.phoneBookList;
  }
  onSearchItems() {
    this.searchPhoneBook = this.phoneBookService.searchPhoneBook(
      this.searchInput
    );
  }
}
