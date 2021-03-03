import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.menuStick();
  }

  menuStick() {
    $(window).bind('scroll', function () {
      if ( $(window).scrollTop() > 54 ) {
        $(".header").stop().animate({'top':'-22px'}, 80, 'linear', function(){
         
        }); $('.header').addClass('fixed');
       
      } else {
        $(".header").stop().animate({'top':'0px'},80, 'linear', function(){
         
        }); $('.header').removeClass('fixed');
      
      }
    });
  }

  

}
