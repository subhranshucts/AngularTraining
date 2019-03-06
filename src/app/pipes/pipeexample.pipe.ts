import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeexample'
})
export class PipeexamplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
