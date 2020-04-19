import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], text: string): Product[] {
    text = text ? text.toLocaleLowerCase() : null;

    return text? value.filter(
          (p: Product) => p.name.toLocaleLowerCase().indexOf(text) !== -1)
      : value;
  }
}
