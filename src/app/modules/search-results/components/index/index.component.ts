import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  public products = [ ]
  public product = { }

  constructor(public globalService:GlobalService) { }

  ngOnInit(): void {
    console.log(this.globalService.searchResults)
    this.products = this.globalService.searchResults
  }

  change(value): void {
    console.log(value)
  }

}
