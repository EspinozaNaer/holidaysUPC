import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import { ToolbarComponent } from './holidays/components/toolbar/toolbar.component';
import { MainContentTableComponent } from './holidays/components/main-content-table/main-content-table.component';
import { FooterContentComponent } from './holidays/components/footer-content/footer-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainContentTableComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
