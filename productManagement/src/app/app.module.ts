import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitService } from './produit/produit.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    ContentComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
