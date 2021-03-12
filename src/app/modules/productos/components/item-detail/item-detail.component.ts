import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { QuotationService } from 'src/app/services/quotation.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() product:Product;
  constructor(private quotation:QuotationService) { }

  ngOnInit(): void {
  }

  change(id:any, value:any): void {
    this.quotation.addItem(id, value);
  }

}
