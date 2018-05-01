import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  @Input() myfavs = [];
  public selected_artist: any;
  public artworks: any;

  constructor() { }

  ngOnInit() {}

  selected(id) {
    this.selected_artist = _.find(this.myfavs, {id});
    this.artworks = this.selected_artist.artworks;
  }


}
