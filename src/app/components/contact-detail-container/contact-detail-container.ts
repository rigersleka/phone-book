import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'contact-detail-container',
  templateUrl: './contact-detail-container.html',
  styleUrls: ['./contact-detail-container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailContainer {
  constructor() {}
}
