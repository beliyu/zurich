import { Rwa } from './rwa.component';
import { Input, Output, EventEmitter, ChangeDetectionStrategy, style, ViewEncapsulation } from '@angular/core';
import { Component, trigger, state, animate, transition } from '@angular/core';

@Component({
  selector: 'table2-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
   
    <rwa #rwa></rwa><br/>

  <p-dataTable [value]="data|async|pBoja:rwa.pb|pUz:rwa.pu"
      [rowStyleClass]="wPro1" > 
      <header>List</header> 
      <p-column field="id" header="Id" [style]="{'width':'100px'}"></p-column>
      <p-column field="ime" header="Ime" [sortable]="true"
           filterMatchMode="contains" [filter]="true" ></p-column>
      <p-column field="grad" header="Grad" [sortable]="true"
           filterMatchMode="contains" [filter]="true" ></p-column>
      <p-column field="boja" [style]="{'width':'60px'}">
        <template pTemplate type="header" >
            <span >Color</span>
        </template>
        <template let-col let-rDat="rowData" pTemplate type="body">
            <button type="text" pButton (click)="buttBoja.emit(rDat)" 
                [label]="rDat[col.field]" class="colButt">               
            </button> 
        </template>
      </p-column>  
      <p-column header="Del" [style]="{'width':'50px'}">
        <template let-rDat="rowData" pTemplate type="body">
            <button type="button" pButton class="delButt"
                 (click)="buttDel.emit(rDat)" icon="fa-remove">
            </button>
        </template>
      </p-column>

  </p-dataTable>
  `,
    styles: [`
        .bl{color: black;}
        .rd{color: red;}
    `]
})
export class Table2Component {
@Input() data;
@Output() buttBoja = new EventEmitter();
@Output() buttDel = new EventEmitter();

// whTogg(w){this.buttBoja.emit(w);}
// whDel(w){this.buttDel.emit(w);}
wPro1(a, b){
  return a.boja === 'bl' ? 'bl' : 'rd';
}

}
