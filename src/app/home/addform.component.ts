import { Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'addform-component',
  template: `
        <h2>Dobro vece, ... </h2>

        <form [formGroup]="form1" (ngSubmit)="addNa()">
            <div class="form-group">
                <label>Ime:</label>
                <input type="text" formControlName="ime" required class="form-control">
                <div class="alert alert-danger" id="errIme"
                    [hidden]="!form1.controls['ime'].errors?.required">
                    Obavezno polje</div>
            </div>
            <div class="form-group">
                <label>Grad:</label>
                <input type="text" formControlName="grad" class="form-control">
                <div class="bg-info" id="errGrad" [hidden]="!form1.hasError('krat', 'grad')" >
                        Prekratko</div>
            </div>
            <button class="btn btn-primary"  [disabled]="!form1.valid" 
                     type="Submit">
                Submit</button>
            <button class="btn" (click)="cons()"> Moj </button>     
        </form>
  `
})
export class AddformComponent {
@Output() buttSub = new EventEmitter();
form1: FormGroup;
constructor(private _fb: FormBuilder) {
};

ngOnInit() {
   this.form1 = this._fb.group({
      ime: ['Zoki', Validators.required],
      grad: ['Sinaj', MyValidators.krt]
    });
/*    this.form1.controls['grad'].valueChanges.subscribe(  
      (form: any) => {  
          console.log('control changed to:', form);  
      });
*/
};

addNa() {this.buttSub.emit(this.form1.value); }

cons() {console.log(this.form1); };
}
