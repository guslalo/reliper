import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {
  public menuCategory = []

  constructor() { }

  change(value): void {
    console.log(value)
  }
  ngOnInit(): void {
        
  }



}
