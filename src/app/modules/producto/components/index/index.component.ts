import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public categoryActive:any;
  public idCategoryActive:any;
  public products = [ ]
  public product = { }
  public menuCategory = []

  constructor(
    private route: ActivatedRoute,
    public apiService:ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCategoryActive = params.id
      console.log(this.idCategoryActive)
      this.getProducts(this.idCategoryActive);
    });
    
  }

  getProducts(categoryId?){
    this.apiService.getProducts(categoryId).subscribe(
      data => {
        console.log(data)
        this.products = data
      },
      error => {
        console.log(error)
      }
    )
  }
  
  getDetails(id?){
    this.product = this.products.find(x => x.id === id);
    console.log(this.product)
  }




}
