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
  templateUrl: './about.component.html' 
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

//     get data, filtered plane around Zurich
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
//     make plane image
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

//      m/s >> km/h 
  speedKm(){
    return Math.floor(this.wTab[9] * 3.6 );
  }
//     time stamp >> local time
  tsDate(){
    let st = new Date( this.wTab[3] * 1000 );
    return st.toLocaleTimeString();
  }
}
