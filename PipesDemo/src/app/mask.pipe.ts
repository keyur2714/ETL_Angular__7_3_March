import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: any, maskingChar:string='*',numOfChar:number=4): any {
    ///alert(value+" "+maskingChar+" "+numOfChar);
    let newValue = value.substring(0,value.length-numOfChar);        
    for(let i=1;i<=numOfChar;i++){
      newValue = newValue + maskingChar;
    }
    return newValue;
  }

}
