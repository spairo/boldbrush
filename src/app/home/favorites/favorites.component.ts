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
  public _overview: any;
  public image_large: string;

  constructor() { }

  ngOnInit() {}

  selected(id) {
    this.selected_artist = _.find(this.myfavs, {id});
    this.artworks = this.selected_artist.artworks;
  }

  overview(id) {
    this._overview = _.find(this.artworks, {id});
    this._overview._links.image.href = _.replace(
      this._overview._links.image.href, new RegExp('{image_version}'), this._overview.image_versions[0]
    );
    console.log(this._overview._links.image.href);
  }


}
