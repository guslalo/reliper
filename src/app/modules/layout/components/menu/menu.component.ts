import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  public menuCategory = []
  public menuCategoryChilds = []
  public idCategory:any;

  constructor(
    public apiService:ApiService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void  {
    this.routerActive()
  }

  ngOnChanges(){

  }

  routerActive(){
    this.route.params.subscribe((params) => {
      this.idCategory = params.id
      this.getCategories(params.id);
    });
  }

  
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
  }

}
