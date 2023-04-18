import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-book-multiple',
  templateUrl: './phone-book-multiple.component.html',
  styleUrls: ['./phone-book-multiple.component.css'],
})
export class PhoneBookMultipleComponent {
  multipleFormsList: number[] = [1, 2, 3, 4];

  constructor() {}
}
