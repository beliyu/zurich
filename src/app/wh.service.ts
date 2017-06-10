import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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
    public getAll(): Observable<WhModel[]> {
        return this._http.get(this._url).map((res: Response) => res.json())
        .catch(this.handleError);
    };
    public getOne(i: string): Observable<WhModel> {
        return this._http.get(this._url + '/' + i).map(res => res.json())
        .catch(this.handleError);
    };
    public del(i: string): Observable<null> {
        return this._http.delete(this._url + '/' + i).map(res => res.json())
        .catch(this.handleError);
    };
    public add(w: WhModel): Observable<any> {
        return this._http.post(this._url, JSON.stringify(w), {headers: this.headers})
        .map(res => res.json())
        .catch(this.handleError);
    };
    public togg(w: WhModel): Observable<any> {
        let nb = (w.boja === 'bl') ?  'rd'  :  'bl';
        return this._http.patch(this._url + '/' + w.id, JSON.stringify({'boja' : nb}),
          {headers: this.headers}).map(res => res.json())
        .catch(this.handleError);
    };

    private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
