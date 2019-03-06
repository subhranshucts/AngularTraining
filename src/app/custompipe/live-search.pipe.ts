import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveSearch'
})
export class LiveSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
