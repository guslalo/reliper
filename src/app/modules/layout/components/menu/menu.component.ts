import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'src/app/services/auth.service';

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
    private auth:Auth,
    private router: Router
    ) {
      // categories listener
      this.auth.categories.subscribe(categories => {
        this.menuCategory = categories;
      })
    }

  ngOnInit(): void  {}

  /**
   * Get category childs
   * @param item 
   */
  getChilds(item: any){
    this.showPatern = false
    this.showChild = true  
    this.categoryActive = item
    console.log(this.showPatern, this.showChild,  this.categoryActive)
    this.router.navigate([''], { queryParams: { categories: item.name} });
  }

  /**
   * back to patern categories
   */
  back(){
    this.showPatern = true
    this.showChild = false 
    this.categoryActive = false
    this.router.navigate([''], { queryParams: {} });
  }
}