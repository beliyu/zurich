import { Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'table-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  
    <rwa #rwa></rwa><br/>
    <table class="table">
    <tr>
      <th>#</th>
      <th>Id</th>
      <th>Ime</th>
      <th>Grad</th>
      <th>Boja</th>
      <th>Del</th>
    </tr>
    <tr *ngFor="let w of data | async | pBoja:rwa.pb|pUz:rwa.pu   
      let i=index" [ngClass]="{'bl':w.boja=='bl', 'rd':w.boja=='rd'}"
      [@anBoja]="'in'" >
      <td>{{i+1}}</td>
      <td>{{w.id}}</td>
      <td>{{w.ime}}</td>
      <td>{{w.grad}}</td>
      <td><button pButton  label="{{w.boja}}" 
        (click)="buttBoja.emit(w)"></button></td>
      <td><button class="btn btn-primary" (click)="buttDel.emit(w)">X</button></td>
    </tr>
  </table>
  `,
  animations: [
    trigger('anBoja', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),

      transition('* => void',
        [animate('0.3s 0.3s ease-in',
           style({opacity: 0, transform: 'translateX(50px)'}))
        ]),
      transition('void => *',
        [style({ opacity: '0', transform: 'translateY(-50px)'}),
                animate('300ms ')
      ])
    ])
  ],
    styles: [`
        .bl{color: blue;}
        .rd{color: red;}
    `]
})
export class TableComponent {
@Input() data;
@Output() buttBoja = new EventEmitter();
@Output() buttDel = new EventEmitter();

// whTogg(w){this.buttBoja.emit(w);}
// whDel(w){this.buttDel.emit(w);}
}
