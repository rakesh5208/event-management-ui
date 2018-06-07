import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeconverter'
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const durationInMin = parseInt(value, 10);
    const hr = Math.floor(durationInMin / 60);
    const min = durationInMin % 60;
    let result = '';
    if (hr > 0) {
      result = hr + ' hr ';
    }
    if (min > 0) {
      result += min + ' min ';
    }
    return result;
  }

}
