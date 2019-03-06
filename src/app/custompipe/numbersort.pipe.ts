import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersort'
})
export class NumbersortPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(args === 'asc'){
        return value.sort((a,b)=>{
          return a-b
        })
    } else if (args === 'dsc'){
        return value.sort((a,b)=>{
          return b-a
        })
    }
    return value
    }
  }
  
  
