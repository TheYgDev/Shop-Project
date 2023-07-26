import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchange'
})
export class ExchangePipe implements PipeTransform {

  transform(base: number = 1, rate: number = 1) {
    return base * rate;
  }

}
