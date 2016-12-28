import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pBoja'})
export class BojaPipe implements PipeTransform {
    transform(value: any, par1: string): any {
        return value.filter((n) => {
            return n.boja === par1 || par1.length === 0;
        });
    }
}

@Pipe({name: 'pUz'})
export class UzPipe implements PipeTransform {
    transform(value: any, par1: string): any {
        return value.filter((n) => {
            return ['ime', 'grad'].some((m) => {
              return n[m].includes(par1);
            });
        });
    }
}
