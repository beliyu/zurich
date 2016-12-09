import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OskyService } from '../osky.service';

@Component({
  selector: 'about',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .flBac{background-color:#000; color:pink; font-size: 1.7em; text-align: center;}
  .ui-dialog .ui-dialog-titlebar {margin: 0;}
  .ui-dialog {background-color: #999;}
  p-dialog table { border: 1px solid; width: 100%;}
  p-dialog table td { padding-right: 15px; padding-left: 15px;}
  `],
  template: `
    <h1>About </h1> 
    <p-dialog [(visible)]="displayDia" width="250" [header]="'Flight  ' + wTab[1]">
      <div class="flBac"> {{wTab[2]}} </div>
      <table><tbody>
        <tr>
          <td class="col-md-6">
            icao24
          </td>
          <td class="col-md-6">
            {{wTab[0]}}
          </td>
        </tr>
        <tr>
          <td class="col-md-6">
             Velocity
          </td>
          <td class="col-md-6">
             {{speedKm()}} km/h
          </td>
        </tr>
        <tr>
          <td class="col-md-6">
             Heading
          </td>
          <td class="col-md-6">
             {{wTab[10]}} °
          </td>
        </tr>
        <tr>
          <td class="col-md-6">
             Altitude
          </td>
          <td class="col-md-6">
             {{wTab[7]}} m
          </td>
        </tr>
        <tr>
          <td >
             Vertical Rate
          </td>
          <td >
            {{wTab[11]}} m/s
          </td>
        </tr>
      </tbody></table>
        <footer>
          {{tsDate()}}
        </footer>
    </p-dialog>
    <div>
      <button type="button" pButton label="New position" icon="fa-map-marker"
           (click)="newPosition()" style="float:right; margin: 10px;"></button> 
     </div>

    <p-gmap [options]="options" [overlays]="overlays"
        (onOverlayClick)="handleOverlayClick($event)" 
       [style]="{'width':'100%','height':'620px'}" ></p-gmap>
  `
})
export class AboutComponent {
  localState: any;
  wtemp: any;
  wTab = [];
  options: any;
  overlays: any;
  image: any ;
  displayDia: boolean = false;

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
      this.wtemp = data;
      this.overlays = [];
      for (let i = 0; i < this.wtemp.length; i++){
       this.image = this.dajImg(this.wtemp[i][10]);
       this.overlays.push(new google.maps.Marker({
         position: {lat: this.wtemp[i][6], lng: this.wtemp[i][5]},
         title: this.wtemp[i][1],
         icon: this.image
        } ));
      }
    });
  }
  dajImg(l){
    let j = Math.floor((l + 6) / 12);
    let wImage = {
      url:'https://opensky-network.org/components/com_opensky/css/images/newplanes/planes_large.png',
      size: new google.maps.Size(60, 60),
      origin: new google.maps.Point(j * 60, 180),
      anchor: new google.maps.Point(30, 30)
    };
    return wImage;
  }
  handleOverlayClick(event) {
     let tit = event.overlay.title;
     let tw = this.wtemp.filter(n => n[1] === tit );
     this.wTab = tw[0];
     this.displayDia = true;
  }
  speedKm(){
    return Math.floor(this.wTab[9] * 3.6 );
  }
  tsDate(){
    let st = new Date( this.wTab[3]*1000 );
    return st.toLocaleTimeString();
  }
}
