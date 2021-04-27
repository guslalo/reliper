import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'src/app/services/auth.service';
import { Categories } from 'src/app/models/product.model';
import * as _ from 'lodash';

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
  public categoryActive:Categories;
  categories: Categories[];

  constructor(
    public apiService:ApiService,
    private auth:Auth,
    private router: Router
    ) {
      // categories listener
      this.auth.categories.subscribe(categories => {
        this.categories = categories;
        this.menuCategory = _.filter(categories, {'parent': null});
      })
    }

  ngOnInit(): void  {}

  /**
   * Get category childs
   * @param item 
   */
  getChilds(item: any, clickeable=true){
    if(clickeable){
      this.showPatern = false
      this.showChild = true  
      this.categoryActive = item
    }
    console.log(this.showPatern, this.showChild,  this.categoryActive)

    this.router.navigate([''], { queryParams: { categories: item.slug} });
  }

  /**
   * back to patern categories
   */
  back(){
    this.showPatern = true
    this.showChild = false 
    // this.categoryActive = false
    let param = {}
    if(this.categoryActive.parent){

      let newActive = _.find(_.cloneDeep(this.categories), {'id':this.categoryActive.parent.id})
      console.log('newActive', newActive, this.categoryActive.parent.id)
      this.categoryActive = newActive
      this.showPatern = false
      this.showChild = true 
      param = {'categories': this.categoryActive.slug}
    }
    console.log('param categories', param, this.categoryActive)
    this.router.navigate([''], { queryParams: param });
  }
}