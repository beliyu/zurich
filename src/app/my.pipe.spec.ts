import {
    inject,
    fakeAsync,
    TestBed
} from '@angular/core/testing';
import { 
    BojaPipe,
    UzPipe
} from './my.pipe';

describe('my.pipe - pBoja', () => {
    let pipe: BojaPipe;
    beforeEach(() => {
        pipe = new BojaPipe();
    });
    it('passes bl=bl', () => {
        let niz = [{boja: 'bl'}];
        expect(pipe.transform(niz, 'bl')).toContain({boja: 'bl'});
    });
    it('passes bb=', () => {
        let niz = [{boja: 'bb'}];
        expect(pipe.transform(niz, '')).toContain({boja: 'bb'});
    });
    it('does not pass bl=rd', () => {
        let niz = [{boja: 'bl'}];
        expect(pipe.transform(niz, 'rd')).toEqual([]);
    });
});

describe('my.pipe - pUz', () => {
    let pipe: UzPipe;
    let niz;
    beforeEach(() => {
        pipe = new UzPipe();
        niz = [{ime: 'beli', grad: 'Sirca'}];
    });
    it('passes beli-el', () => {
        expect(pipe.transform(niz, 'el')).toContain({ime: 'beli', grad: 'Sirca'});
    });
    it('passes Sirca-rca', () => {
        expect(pipe.transform(niz, 'rca')).toContain({ime: 'beli', grad: 'Sirca'});
    });
    it('does not pass beli,Sirca-rac', () => {
        expect(pipe.transform(niz, 'rac')).toEqual([]);
    });
});
