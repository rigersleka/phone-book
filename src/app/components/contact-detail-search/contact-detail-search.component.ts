import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from 'src/app/service/contact-detail.service';

@Component({
  selector: 'contact-detail-search',
  templateUrl: './contact-detail-search.html',
  styleUrls: ['./contact-detail-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailSearch {
  searchInput: string = '';

  private searchContactDetail$$ = new BehaviorSubject<string>('');
  private contactDetailList$ = this.contactDetailService.contactDetail$;

  private gendersSubject$$ = new BehaviorSubject<string>('');
  results$ = this.contactDetailService.results$;

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

  constructor(private contactDetailService: ContactDetailService) {}

  onSearchItems(searchContact: Event) {
    this.searchContactDetail$$.next(
      (searchContact.target as HTMLInputElement).value
    );
  }
}
