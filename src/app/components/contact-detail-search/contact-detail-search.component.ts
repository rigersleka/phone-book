import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';

import { IContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailService } from 'src/app/service/contact-detail.service';

@Component({
  selector: 'contact-detail-search',
  templateUrl: './contact-detail-search.html',
  styleUrls: ['./contact-detail-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailSearch {
  private searchContactDetail$$ = new BehaviorSubject<string>('');
  loadAllResultContactDetails$ =
    this.contactDetailService.loadAllResultContactDetails$;
  addContactDetailElement$ = this.contactDetailService.addContactDetailElement$;

  /**
    Filter only based on firstName and phoneNumber
        a) Tuple -> combineLAtest([a, b, c)] with map([a,b, c]), property type have to match based on the position
        b) map(([a,b,c]) => ); Brackets [] meaning creating an array
        b) filter -> filter based on 2 properties
   */
  filteredItems$: Observable<IContactDetail[]> = combineLatest([
    this.loadAllResultContactDetails$,
    this.addContactDetailElement$,
    this.searchContactDetail$$,
  ]).pipe(
    tap((a) => console.log(a)),
    map(
      ([loadAllResultContactAlResult, addContactDetail, searchContactDetail]) =>
        loadAllResultContactAlResult
          .concat(addContactDetail)
          .filter((contactDetail: IContactDetail) =>
            `${contactDetail.firstName} ${contactDetail.phoneNumber}`
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

  edit(id: number) {
    console.log(`ID is ${id}`);
  }

}
