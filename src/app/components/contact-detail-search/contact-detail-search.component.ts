import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from 'src/app/service/contact-detail.service';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'contact-detail-search',
  templateUrl: './contact-detail-search.html',
  styleUrls: ['./contact-detail-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailSearch implements OnInit {
  searchInput: string = '';

  private searchContactDetail$$ = new BehaviorSubject<string>('');
  private contactDetailList$ = this.contactDetailService.contactDetail$;

  private gendersSubject$$ = new BehaviorSubject<string>('');
  contactDetailData$: Observable<IContactDetail[]>;

  filteredItems$: Observable<IContactDetail[]> = combineLatest([
    this.contactDetailList$,
    this.searchContactDetail$$,
    this.gendersSubject$$,
  ]).pipe(
    map(([contactDetailList, searchContactDetail]) =>
      contactDetailList.filter((contactDetail: IContactDetail) =>
        `${contactDetail.firstName} ${contactDetail.phoneNumber} ${contactDetail.gender}`
          .toLowerCase()
          .includes(searchContactDetail.toLowerCase())
      )
    )
  );

  constructor(
    private contactDetailService: ContactDetailService,
    private LoadingService: LoadingService
  ) {
    this.contactDetailData$ = this.contactDetailService.loadAllContactDetails();
  }
  onSearchItems(searchContact: Event) {
    this.searchContactDetail$$.next(
      (searchContact.target as HTMLInputElement).value
    );
  }

  ngOnInit(): void {
    this.LoadingService.showLoaderUntilCompleted(this.contactDetailData$);
    /* this.LoadingService.loadingOn(); */ //let only on the loading
  }
}
