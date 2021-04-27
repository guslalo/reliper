import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SafePipe } from './../../pipes/safe.pipe';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { QuoteComponent } from '../productos/components/quote/quote.component';
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
  declarations: [
    SafePipe, FilterPipe
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
    SafePipe, FilterPipe
  ],
  providers: [QuoteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
