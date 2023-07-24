import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringShorten'
})
export class StringShortenPipe implements PipeTransform {

  transform(value: string, num: number = 5) {
    if (num <= value.length) {
      // do something
      return value.slice(0, num) +'...';
    }
    return value;
}

}
