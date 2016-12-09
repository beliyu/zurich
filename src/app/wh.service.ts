import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class WhModel {
    constructor(
        public ime: string,
        public grad: string,
        public boja: string= 'bl',
        public id?: string
    ) {}
}
@Injectable()

export class WhmService {
    headers: Headers;
    private _url= 'http://localhost:3004/WhM';
    constructor(private _http: Http) {
        this.headers = new Headers({'Content-Type': 'application/json'});
    };
    getAll() {
        return this._http.get(this._url).map((res: Response) => res.json());
    };
    getOne(i) {
        return this._http.get(this._url + '/' + i).map(res => res.json());
    };
    del(i) {
        return this._http.delete(this._url + '/' + i).map(res => res.json());
    };
    add(w) {
        return this._http.post(this._url, JSON.stringify(w), {headers: this.headers})
        .map(res => res.json());
    };
    togg(w) {
        let nb = (w.boja === 'bl') ?  'rd'  :  'bl';
        return this._http.patch(this._url + '/' + w.id, JSON.stringify({'boja' : nb}),
          {headers: this.headers}).map(res => res.json());
    };
}
