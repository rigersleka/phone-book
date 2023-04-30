import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'contact-detail-forms',
  templateUrl: './contact-detail-forms.html',
  styleUrls: ['./contact-detail-forms.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailForms {
  multipleContactDetailForms: number[] = [1, 2];

  constructor() {}
}
