import { Component, OnInit } from '@angular/core';
import { WhmService, WhModel } from '../wh.service';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import '../../assets/css/styles.css';

import { AppState } from '../app.service';

@Component({
  selector: 'home',
  providers: [ ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    WM= [] ;
    @select('iime') iime$: Observable<number>;

  constructor(private _whm: WhmService, private _ngRedux: NgRedux<any>) {  }

  ngOnInit() {
  this.whmGetAll();
  }

whmGetAll() {
    this._whm.getAll().subscribe(data => {
//      this.WM =[ ...data];
      this._ngRedux.dispatch({ type: 'IIME_ALL', payload : data });
    }, err => console.log(err));
  }
whmTogg(w) {
    this._whm.togg(w).subscribe(data => {
//        let wmx = [];
//        this.WM.forEach(n => {
//            wmx = (n.id!=w.id) ?  [...wmx, n] : [...wmx, data]
//        })
//        this.WM = wmx
      this._ngRedux.dispatch({ type: 'IIME_TOGG', payload : data });
    }, err => console.log(err));
  }
whmAdd(a) {
    let w = new WhModel(a.ime, a.grad);
    this._whm.add(w).subscribe(data => {
//      this.WM=[...this.WM, data] ;
      this._ngRedux.dispatch({ type: 'IIME_ADD', payload : data });
    }, err => console.log(err));
  }
whmDel(w) {
    this._whm.del(w.id).subscribe(data => {
//        let wmx = [];
//        this.WM.forEach(n => {if(n.id!=w.id) wmx = [...wmx, n]})
//        this.WM = wmx
      this._ngRedux.dispatch({ type: 'IIME_DEL', payload : w });
    }, err => console.log(err));
  }
}

// in comment line is version without redux .....