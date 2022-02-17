import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(value: Project[], searchKey: string): Project[] {
    return searchKey != undefined ?
           value.filter(p=>p.name?.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()))
           :
           value;
  }

}
