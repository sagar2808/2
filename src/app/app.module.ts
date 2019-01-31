import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/home/home.component';
import { HomeServiceService } from './Services/home-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { ContactUsComponent } from './Modules/contact-us/contact-us.component';
import { ProductsComponent } from './Modules/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactUsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
