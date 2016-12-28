import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


@Injectable()

export class OskyService {
    headers: Headers;
    private _url= 'https://opensky-network.org/api/states/all';
    constructor(private _http: Http) {
        this.headers = new Headers({'Content-Type': 'application/json'});
    };
    getAll() {
        return this._http.get(this._url)
        .map((res: Response) =>  res.json())
        .map(data => data.states)
        .map((n) => {return n.filter((m) => {
             return m[5] > 8 && m[5] < 9 && m[6] > 47 && m[6] < 48; });
         });
    };
}

//   must enable cross-origin resorce sharing .....