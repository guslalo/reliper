import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SafePipe } from './../../pipes/safe.pipe';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';



@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxNumberSpinnerModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxNumberSpinnerModule,
    SafePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
