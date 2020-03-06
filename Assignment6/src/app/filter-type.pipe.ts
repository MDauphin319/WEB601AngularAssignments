import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './content-card/content-card-helper';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(bandList: Content[], typeName: string): Content[] {
    return bandList.filter(band => band.type === typeName ? band : null);
  }
}
