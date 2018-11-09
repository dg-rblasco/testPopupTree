import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { DxTemplateModule } from 'devextreme-angular/core/template';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      DxPopoverModule,
      DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
