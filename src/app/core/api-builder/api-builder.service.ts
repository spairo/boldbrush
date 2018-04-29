import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment as env } from '@env/environment';

@Injectable()
export class ApibuilderService {

  public config: any = {};

  constructor(
    private _http: HttpClient
  ) {}

  Build(service : any) {
    if (env.production) {
      service.url = env.hostname + service.module;
      return this.BuildRequest(service);
    }
  }
  BuildRequest(service) {
    if (service.method.match(/^(get)$/)) {
      return this._http[service.method](service.url, { params: service.params }, this.config);
    } else {
      return this._http[service.method](service.url, service.params, this.config);
    }
  }
}
