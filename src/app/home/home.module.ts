import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeService } from './home/home.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, FavoritesComponent],
  providers: [HomeService]
})
export class HomeModule { }
