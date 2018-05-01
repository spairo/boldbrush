import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment as env } from '@env/environment';

const proxy = 'https://cors-anywhere.herokuapp.com/';

@Injectable()
export class ApibuilderService {

  public config: any = {};

  constructor(
    private _http: HttpClient
  ) {}

  Build(service: any) {
    if (env.production) {
      service.url = env.hostname + service.module;
      return this.BuildRequest(service);
    }
  }
  BuildRequest(service) {
    if (service.method.match(/^(get)$/)) {
      return this._http[service.method](proxy + service.url, { params: service.params }, this.config)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
    } else {
      return this._http[service.method](service.url, service.params, this.config);
    }
  }
  errorHandler(error: any): void {
    console.log(error);
  }
}
