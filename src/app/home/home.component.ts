import { Component, OnInit } from '@angular/core';
import { WhmService, WhModel } from '../wh.service';
import { ImeActions } from '../store/ime.action';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import '../../assets/css/styles.css';

import { AppState } from '../app.service';

@Component({
  selector: 'home',
  providers: [ ImeActions ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    WM= [] ;
    @select('ime') ime$: Observable<number>;

  constructor(private _whm: WhmService,
      private _imeAct: ImeActions) {  }

  ngOnInit() {
  this.whmGetAll();
  }

whmGetAll() {
    this._whm.getAll().subscribe(data => {
//      this.WM =[ ...data];
      this._imeAct.aAll(data);
    }, err => console.log(err));
  }
whmTogg(w) {
    this._whm.togg(w).subscribe(data => {
//        let wmx = [];
//        this.WM.forEach(n => {
//            wmx = (n.id!=w.id) ?  [...wmx, n] : [...wmx, data]
//        })
//        this.WM = wmx
      this._imeAct.aTogg(data);
    }, err => console.log(err));
  }
whmAdd(a) {
    let w = new WhModel(a.ime, a.grad);
    this._whm.add(w).subscribe(data => {
//      this.WM=[...this.WM, data] ;
      this._imeAct.aAdd(data);
    }, err => console.log(err));
  }
whmDel(w) {
    this._whm.del(w.id).subscribe(data => {
//        let wmx = [];
//        this.WM.forEach(n => {if(n.id!=w.id) wmx = [...wmx, n]})
//        this.WM = wmx
      this._imeAct.aDel(w);
    }, err => console.log(err));
  }
}

// in comment line is version without redux ..... 
