import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from '../../service/contact-detail.service';

@Component({
  selector: 'contact-detail-container',
  templateUrl: './contact-detail-container.html',
  styleUrls: ['./contact-detail-container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailContainer implements OnInit {
  contactDetailList: IContactDetail[] = [];
  searchContactDetail: IContactDetail[] = [];
  contactDetailList$: Observable<IContactDetail[]> =
    this.contactDetailService.contactDetail$;

  constructor(private contactDetailService: ContactDetailService) {}

  ngOnInit(): void {
    this.searchContactDetail = this.contactDetailList;
  }
}
