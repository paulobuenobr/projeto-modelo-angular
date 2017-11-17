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
var EstadoService = /** @class */ (function () {
    function EstadoService(http) {
        this.http = http;
        this.pessoaUrl = app_settings_1.AppSettings.API_ENDPOINT + "/";
    }
    EstadoService.prototype.getEstados = function () {
        return this.http.get(this.pessoaUrl + 'estados/')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EstadoService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EstadoService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    EstadoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EstadoService);
    return EstadoService;
}());
exports.EstadoService = EstadoService;
//# sourceMappingURL=estado.service.js.map