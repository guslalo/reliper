import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global.service'
import { ApiService } from '../../../../services/api.service'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router"

declare var $:any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public formSearch:FormGroup;

  constructor(
    public apiService:ApiService,
    public globalService:GlobalService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.menuStick();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
  }

  search(){
    console.log(this.formSearch.controls.search.value)
    this.apiService.searchProducts(this.formSearch.controls.search.value).subscribe(
      data => {
        this.globalService.searchResults = data;
        this.router.navigate(['/resultados-de-busqueda'])
        console.log(data)
      }, 
      error => {
        console.log(error)
      }
    )
  }

  menuStick() {
    $(window).bind('scroll', function () {
      if ( $(window).scrollTop() > 54 ) {
        $(".header").stop().animate({'top':'-23px'}, 80, 'linear', function(){
         
        }); $('.header').addClass('fixed');
       
      } else {
        $(".header").stop().animate({'top':'0px'},80, 'linear', function(){
         
        }); $('.header').removeClass('fixed');
      
      }
    });
  }

  

}
