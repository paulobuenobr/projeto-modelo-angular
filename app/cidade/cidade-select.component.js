"use strict";
// NÃO FUNCIONA: ver componente EstadoCidadeComponent
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
var cidade_service_1 = require("./cidade.service");
var cidade_1 = require("./cidade");
var CidadeSelectComponent = (function () {
    function CidadeSelectComponent(cidadeService) {
        this.cidadeService = cidadeService;
        this.selectedCidade = new cidade_1.Cidade(0, "");
        this.selectMessage = "--Selecione a cidade--";
    }
    CidadeSelectComponent.prototype.getCidadesEstado = function (idEstado) {
        var _this = this;
        this.cidadeService.getCidadesEstado(idEstado)
            .subscribe(function (cidades) { return _this.cidades = cidades; }, function (error) { return _this.errorMessage = error; });
        console.log(this.cidades);
    };
    CidadeSelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cidade-select',
            templateUrl: './cidade-select.component.html',
            styleUrls: ['../pessoa/pessoa.component.css'],
            providers: [cidade_service_1.CidadeService]
        }),
        __metadata("design:paramtypes", [cidade_service_1.CidadeService])
    ], CidadeSelectComponent);
    return CidadeSelectComponent;
}());
exports.CidadeSelectComponent = CidadeSelectComponent;
//# sourceMappingURL=cidade-select.component.js.map