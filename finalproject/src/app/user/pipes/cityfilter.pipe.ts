import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityfilter'
})
export class CityfilterPipe implements PipeTransform {

  transform( weddingvenues:any, city: string): any {
    if(city=="All")
       return weddingvenues;

    return weddingvenues.filter((x:any)=>x.city == city)
  }
}
