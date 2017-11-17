"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_settings_1 = require("../app-settings");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("../rxjs-extensions");
var core_1 = require("@angular/core");
var PessoaService = /** @class */ (function () {
    function PessoaService(http) {
        this.http = http;
        this.pessoaUrl = app_settings_1.AppSettings.API_ENDPOINT + "/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // HTTP GET com Observable
    PessoaService.prototype.getPessoas = function () {
        return this.http.get(this.pessoaUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // HTTP GET com Promise
    // getPessoas(): Promise<Pessoa[]> {
    //     return this.http.get(this.pessoaUrl)
    //         .toPromise()
    //         .then(response => response.json().data as Pessoa[])
    //         .catch(this.handleError);
    // }
    PessoaService.prototype.addPessoa = function (pessoa) {
        var options = new http_1.RequestOptions({ headers: this.headers });
        var json = JSON.stringify(pessoa);
        return this.http.post(this.pessoaUrl + 'incluir/', json, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PessoaService.prototype.getPessoa = function (id) {
        var url = "" + this.pessoaUrl + id;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PessoaService.prototype.updatePessoa = function (pessoa) {
        var options = new http_1.RequestOptions({ headers: this.headers });
        var json = JSON.stringify(pessoa);
        return this.http
            .put(this.pessoaUrl + 'alterar', json, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PessoaService.prototype.deletePessoa = function (id) {
        var url = "" + (this.pessoaUrl + 'excluir/') + id;
        return this.http.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PessoaService.prototype.extractData = function (res) {
        var body = res.json();
        body.dataNascimento = new Date(body.dataNascimento);
        return body || {};
    };
    PessoaService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    PessoaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PessoaService);
    return PessoaService;
}());
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map