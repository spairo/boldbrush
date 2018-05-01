import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Observable } from 'rxjs/Observable';
import { HomeService } from './home.service';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  versions = env.versions;

  public artists: Observable<any[]>;

  constructor(
    private _artist: HomeService
  ) { }

  ngOnInit() {
    this._artist.getArtists({
      module : 'artists',
      method : 'get',
      params: {}
    }).subscribe(artists => {
      this.artists = artists.data;
    });
  }

}
