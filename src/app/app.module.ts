import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardMotoComponent } from './components/cards/card-moto/card-moto.component';
import { HomeComponent } from './pages/home/home.component';
import { MotoDetailsComponent } from './components/moto-details/moto-details.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardMotoComponent,
    HomeComponent,
    MotoDetailsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
