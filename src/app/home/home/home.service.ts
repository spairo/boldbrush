import { Injectable } from '@angular/core';
import { ApibuilderService } from '@app/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(
    private _api: ApibuilderService
  ) {}

  getArtists(service : any): Observable<any> {
    return this._api.Build(service);
  }
}
