import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(({ title }) => title.toLowerCase().includes(search));
  }
}
