import { AbstractControl } from '@angular/forms';

export class MyValidators {
    static krt(cnt: AbstractControl) {
        return (cnt.value.length < 5) ? {krat: true} : null;
    }
}
