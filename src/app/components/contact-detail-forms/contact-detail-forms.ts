import { Component } from '@angular/core';

@Component({
  selector: 'contact-detail-forms',
  templateUrl: './contact-detail-forms.html',
  styleUrls: ['./contact-detail-forms.css'],
})
export class ContactDetailForms {
  multipleContactDetailForms: number[] = [1, 2, 3, 4];

  constructor() {}
}
