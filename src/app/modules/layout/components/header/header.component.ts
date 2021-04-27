import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global.service'
import { ApiService } from '../../../../services/api.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { Auth } from 'src/app/services/auth.service';
import { Product } from 'src/app/models/product.model';
import * as _ from 'lodash';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


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
    private router: Router,
    public breakpointObserver: BreakpointObserver,
    ) { 

      // products listener
    this.auth.products.subscribe((products)=>{
      this.products_all = products;
    })
    }

  ngOnInit(): void {
 
    this.formSearch = new FormGroup({
      search: new FormControl(null, [Validators.required, Validators.minLength(1)] )
    });
    this.breakpointObserver.observe(['(min-width: 1280px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        // desktop
        this.menuStick();
      } else {
        // mobile
    
      }
    });

  }

  /**
   * Search text
   */
  search(event:any = null){
    console.log('valid', event)
    if(this.formSearch.valid){
      let search = ''
      let match = _.find(this.products_all, {'name': this.formSearch.value.search})
      if(match){
        search = match.slug
      }else{
        search = this.formSearch.value.search
      }
      console.log('search match', search)
      
      this.router.navigate([''], { queryParams: { search: search } })
    }
  }

  menuStick() {
    $(window).bind('scroll', function () {
      if ( $(window).scrollTop() > 54 ) {
        $(".header").stop().animate({'top':'-23px'}, 80, 'linear', function(){
        }); $('.header').addClass('fixed')
        $(".menu-container").stop().animate({'top':'85px', 'bottom': 0}, 80, 'linear', function(){
        });
      } else {
        $(".menu-container").stop().animate({'top':'125px', 'bottom': 0}, 80, 'linear', function(){
        });
        $(".header").stop().animate({'top':'0px'},80, 'linear', function(){
        }); $('.header').removeClass('fixed')
      
      }
    });
  }

  

}
