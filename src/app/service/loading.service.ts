import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

/**
  LoadingService -> Share Service where decoupled component communicate with each other
 */

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable(); // creates a new observable with this Subject as the source

  constructor() {
    console.log('Loading service created ...');
  }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.loadingOn()),
      concatMap(() => obs$), // rxjs operator is going to take the values emitted by the source observable
      finalize(() => this.loadingOff()) //rxjs operator used to perform a side effect when an Observable sequence is completed or terminated
    );
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }
}
