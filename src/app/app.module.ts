import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
