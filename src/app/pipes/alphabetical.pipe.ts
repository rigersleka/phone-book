import { Pipe, PipeTransform } from '@angular/core';
import { IContactDetail } from '../models/contact-detail.model';

@Pipe({
  name: 'alphabetical',
})
export class AlphabeticalPipe implements PipeTransform {
  transform(users: IContactDetail[]): IContactDetail[] {
    return users.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }
}
