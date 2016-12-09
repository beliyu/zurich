import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OskyService } from '../osky.service';

@Component({
  selector: 'about',
  styles: [`
  `],
  template: `
    <h1>About</h1>
    <div>
      <button type="button" pButton label="New position" icon="fa-map-marker"
           (click)="newPosition()" style="float:right; margin: 10px;"></button>
    </div>
    <p-gmap [options]="options" [overlays]="overlays"
       [style]="{'width':'100%','height':'620px'}" ></p-gmap>
  `
})
export class AboutComponent {
  localState: any;
  wtemp: any;
  options: any;
  overlays: any;
  image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  constructor(public route: ActivatedRoute, private _osky: OskyService) {

  }

  ngOnInit() {
    this.newPosition();
    this.options = {
       center: {lat: 47.45, lng: 8.54},
       zoom: 10
    };
  }
  newPosition() {
    this._osky.getAll().subscribe((data: any) => {
      console.log(data);
      this.wtemp = data;
      this.overlays = [];
      for (let i = 0; i < this.wtemp.length; i++){
       this.overlays.push(new google.maps.Marker({
         position: {lat: this.wtemp[i][6], lng: this.wtemp[i][5]},
         title: this.wtemp[i][1],
         icon: this.image
        } ));
      }
    });
  }
}
