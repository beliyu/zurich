import { Component } from '@angular/core';

@Component({
    selector: 'rwa',
    template: `
    <div>
        <span>Color: </span>
        <select [(ngModel)]="pb">
            <option *ngFor="let b of boje" [value]="b.b">{{b.a}}</option>
        </select>
        <span>Text: </span>
        <input type="text" [(ngModel)]="pu" ><br> 
    </div>`,
    styles: [
        `select {padding: 3px;}
        span {font-weight: 600;}`
    ]
})
export class Rwa {
    pb: string = '';
    pu: string = '';
    boje= [{a: 'All', b: ''}, {a: 'Black', b: 'bl'}, {a: 'Red', b: 'rd'}];
}
