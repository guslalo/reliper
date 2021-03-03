import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
//import * as moment from 'moment';
//import { Utils } from '../utils/util';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {} // private util: Utils
 
 public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
			case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
			case 'no-html': return this.strip_html_tags(value);
			case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      //case 'datetime': return this.getDateFormat(value, 'DD/MM/YYYY HH:mm');
      //case 'humans': return this.getDateFormat(value, 'humans');
      case 'storage': return this.getImageStorage(value);
      case 'percent': return String(value) + '%';
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
  }

  strip_html_tags(str: string)
  {
    if ((str===null) || (str===''))
        return false;
    else
    str = str.toString();
    return str.replace(/<[^>]*>/g, '');
  }

  /*
  getDateFormat(value: any, format: any){
    let date: any = moment()
    if(format == 'humans'){
      date = this.util.getHumansDate(value);
    }else{
      date = moment(value).format(format);
    }
    
    return date;
  }*/

  getImageStorage(filename: any){
    // console.log('pipe', filename);
    // return environment.filePath + filename;
    return 'file';
  }
}