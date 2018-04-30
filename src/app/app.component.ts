import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

import { routerTransition } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {

  title = 'app';

  navigation = [
    { link: 'about', label: 'test' },
    { link: 'portafolios', label: 'Portafolios'},
    { link: 'programas', label: 'Programas'},
    { link: 'features', label: 'Features' },
    { link: 'examples', label: 'Examples' }
  ];


  constructor(
    public overlayContainer: OverlayContainer,
    private router: Router,
    private titleService: Title
  ) {}
}
