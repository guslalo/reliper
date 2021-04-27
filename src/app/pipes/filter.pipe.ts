import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
//import * as moment from 'moment';
//import { Utils } from '../utils/util';

@Pipe({
  name: 'filtered'
})
export class FilterPipe implements PipeTransform {

  constructor() {} // private util: Utils
 
 public transform(value: any, type: any): any{
    
    const product = value
    const filter = type

    // console.log('filter pipe', product.name, filter)

    if(filter['search']){
      if(String(String(product.name) + String(product.slug)).toLowerCase().search(String(filter['search']).toLowerCase()) != -1){
        return true
      }else{
        return false
      }
       
      // return false
    }
    if(filter['categories']){
      const category_ids = _.mapValues(product.categories, 'slug')
      const match = _.includes(category_ids, filter['categories'])
      if(match){
        return true
      }else{
        return false
      }
      // return false
    }

    
    return true
  }

}