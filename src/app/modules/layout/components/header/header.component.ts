import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global.service'
import { ApiService } from '../../../../services/api.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { Auth } from 'src/app/services/auth.service';
import { Product } from 'src/app/models/product.model';

declare var $:any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public formSearch:FormGroup;
  products_all:Product[] = [];

  constructor(
    public auth:Auth,
    public apiService:ApiService,
    public globalService:GlobalService,
    private router: Router
    ) { 

      // products listener
    this.auth.products.subscribe((products)=>{
      this.products_all = products;
    })
    }

  ngOnInit(): void {
    this.menuStick();
    this.formSearch = new FormGroup({
      search: new FormControl(null, [Validators.required, Validators.minLength(1)] )
    });
  }

  /**
   * Search text
   */
  search(){
    if(this.formSearch.valid){
      console.log('valid')
      this.router.navigate([''], { queryParams: { search: this.formSearch.value.search } })
    }
  }

  menuStick() {
    $(window).bind('scroll', function () {
      if ( $(window).scrollTop() > 54 ) {
        $(".header").stop().animate({'top':'-23px'}, 80, 'linear', function(){
        }); $('.header').addClass('fixed')
        $(".menu-container").stop().animate({'top':'85px'}, 80, 'linear', function(){
        });
      } else {
        $(".header").stop().animate({'top':'0px'},80, 'linear', function(){
        }); $('.header').removeClass('fixed')
      }
    });
  }

  

}
