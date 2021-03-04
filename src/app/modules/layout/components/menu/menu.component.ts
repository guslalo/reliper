import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  public menuCategory = []
  public menuCategoryChilds = []
  public idCategory:any;
  public showPatern:boolean = true;
  public showChild:boolean = false;
  public categoryActive:any;

  constructor(
    public apiService:ApiService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void  {
    this.routerActive()
    this.getCategories()
  }

  

  routerActive(){
    this.route.params.subscribe((params) => {
      this.idCategory = params.id
      //this.getCategories(params.id);
    });
  }

  getChilds(item){

  
    this.showPatern = false
    this.showChild = true  
    this.categoryActive = item
    console.log(this.showPatern, this.showChild,  this.categoryActive)
    this.router.navigate(['/categoria/'+ item.id])
    /*this.menuCategoryChilds = []
   
    this.menuCategoryChilds = item.childs*/
  }
  
  getCategories(){ 
    this.apiService.getCategories().subscribe(
      data => {
        this.menuCategory = data
      },
      error => {
        console.log(error)
      }
    )
  }

  
 /*
  getCategories(id?){
    this.menuCategory = [ ];
    this.apiService.getCategories(id).subscribe(
      data => {
        console.log(data)
        if(data.length > 0) {
          this.menuCategory = data
        } else {
          this.menuCategory.push(data);
          this.menuCategoryChilds = this.menuCategory[0].childs
          console.log(this.menuCategory)
        }
      },
      error => {
        console.log(error)
      }
    )
  } /**/

}
