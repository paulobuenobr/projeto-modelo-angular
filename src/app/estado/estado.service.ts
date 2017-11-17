import {Injectable} from '@angular/core';
import {AppSettings} from '../app-settings';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import '../rxjs-extensions';
import {Estado} from './estado';

@Injectable()
export class EstadoService {

    private pessoaUrl = `${AppSettings.API_ENDPOINT}/`;

    constructor(private http: Http) {
    }

    getEstados(): Observable<Estado[]> {
        return this.http.get(this.pessoaUrl + 'estados/')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: Response) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
