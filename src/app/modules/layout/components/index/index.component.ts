import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { QuotationService } from 'src/app/services/quotation.service';

declare var $:any

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
