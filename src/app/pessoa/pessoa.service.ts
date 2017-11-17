import {AppSettings} from '../app-settings';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Pessoa} from './pessoa';
import '../rxjs-extensions';
import {Injectable} from '@angular/core';

@Injectable()
export class PessoaService {

    private pessoaUrl = `${AppSettings.API_ENDPOINT}/`;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    // HTTP GET com Observable
    getPessoas(): Observable<Pessoa[]> {
        return this.http.get(this.pessoaUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // HTTP GET com Promise
    // getPessoas(): Promise<Pessoa[]> {
    //     return this.http.get(this.pessoaUrl)
    //         .toPromise()
    //         .then(response => response.json().data as Pessoa[])
    //         .catch(this.handleError);
    // }

    addPessoa(pessoa: Pessoa): Observable<Pessoa[]> {
        const options = new RequestOptions({headers: this.headers});
        const json = JSON.stringify(pessoa);
        return this.http.post(this.pessoaUrl + 'incluir/', json, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPessoa(id: number): Observable<Pessoa> {
        const url = `${this.pessoaUrl}${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updatePessoa(pessoa: Pessoa): Observable<Pessoa[]> {
        const options = new RequestOptions({headers: this.headers});
        const json = JSON.stringify(pessoa);
        return this.http
            .put(this.pessoaUrl + 'alterar', json, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deletePessoa(id: number): Observable<void> {
        const url = `${this.pessoaUrl + 'excluir/'}${id}`;
        return this.http.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        body.dataNascimento = new Date(body.dataNascimento);
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
