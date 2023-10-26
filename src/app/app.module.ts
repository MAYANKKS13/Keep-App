import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule}  from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {HttpClientModule} from '@angular/common/http'
import{MatCardModule} from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,MatExpansionModule,BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, FormsModule, MatFormFieldModule, 
    MatInputModule,MatButtonModule,HttpClientModule, MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
