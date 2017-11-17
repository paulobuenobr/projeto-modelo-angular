import {Injectable} from '@angular/core';
import {AppSettings} from '../app-settings';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import '../rxjs-extensions';
import {Cidade} from './cidade';

@Injectable()
export class CidadeService {

    private pessoaUrl = `${AppSettings.API_ENDPOINT}/`;

    constructor(private http: Http) {
    }

    getCidade(id: number): Observable<Cidade> {
        const url = `${this.pessoaUrl + 'cidade/'}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCidadesEstado(id: number): Observable<Cidade[]> {
        const url = `${this.pessoaUrl + 'cidades-estado/'}${id}`;
        return this.http.get(url)
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
