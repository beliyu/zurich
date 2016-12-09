/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
  <p-toolbar >
    <div class="ui-toolbar-group-left">
      <a [routerLink]=" ['./home'] "> beliPro </a>        
         <button pButton type="button" label="home" 
          icon="fa-table" [routerLink]=" ['./home'] "></button>
        <button pButton type="button" label="Zurich Air Trafic" 
           icon="fa-plane"  [routerLink]=" ['./about'] "></button>
    </div>
    
    <div class="ui-toolbar-group-right">
        <button pButton type="button" icon="fa-refresh"></button>
        <button pButton type="button" icon="fa-trash"></button>
    </div>
  </p-toolbar> 

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>WebPack Angular 2 Starter </span>
    </footer>  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
  }

}
