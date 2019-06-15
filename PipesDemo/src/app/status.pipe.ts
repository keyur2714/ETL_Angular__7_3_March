import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 'DIST'){
      value = 'D';
    }else if(value === 'FIRST'){
      value = 'F';
    }
    return value;
  }

}
