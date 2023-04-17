import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    value: { firstName: string; phoneNumber: string }[],
    search: any
  ): any {
    if (!value) return null;
    if (!search) return value;

    search = search.toLowerCase();
    if (value) {
      const regexp = new RegExp(search, 'i');
      const properties = Object.keys(value[0]);
      return [
        ...value.filter((item: any) => {
          return properties.some((property) => regexp.test(item[property]));
        }),
      ];
    }
  }
}
