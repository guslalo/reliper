import { Component } from '@angular/core';
import { Auth } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reliper';
  constructor(private auth:Auth){
    this.auth.getCategories()
    this.auth.getProducts()
  }
}
