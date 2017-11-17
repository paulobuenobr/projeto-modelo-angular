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
var core_1 = require("@angular/core");
var app_settings_1 = require("../app-settings");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("../rxjs-extensions");
var CidadeService = /** @class */ (function () {
    function CidadeService(http) {
        this.http = http;
        this.pessoaUrl = app_settings_1.AppSettings.API_ENDPOINT + "/";
    }
    CidadeService.prototype.getCidade = function (id) {
        var url = "" + (this.pessoaUrl + "cidade/") + id;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CidadeService.prototype.getCidadesEstado = function (id) {
        var url = "" + (this.pessoaUrl + 'cidades-estado/') + id;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CidadeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CidadeService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    CidadeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CidadeService);
    return CidadeService;
}());
exports.CidadeService = CidadeService;
//# sourceMappingURL=cidade.service.js.map