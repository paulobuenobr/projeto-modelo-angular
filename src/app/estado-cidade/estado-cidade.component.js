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
var estado_service_1 = require("../estado/estado.service");
var estado_1 = require("../estado/estado");
var cidade_1 = require("../cidade/cidade");
var cidade_service_1 = require("../cidade/cidade.service");
var EstadoCidadeComponent = /** @class */ (function () {
    function EstadoCidadeComponent(estadoService, cidadeService) {
        this.estadoService = estadoService;
        this.cidadeService = cidadeService;
        this.selectedEstado = new estado_1.Estado(0, "");
        this.selectedCidade = new cidade_1.Cidade(0, "", null);
        this.selectEstadoMessage = "--Selecione o estado--";
        this.selectCidadeMessage = "--Selecione a cidade--";
    }
    EstadoCidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.estadoService.getEstados()
            .subscribe(function (estados) { return _this.estados = estados; }, function (error) { return _this.errorMessage = error; });
    };
    EstadoCidadeComponent.prototype.onSelectEstado = function (idEstado) {
        var _this = this;
        this.cidadeService.getCidadesEstado(idEstado)
            .subscribe(function (cidades) { return _this.cidades = cidades; });
    };
    EstadoCidadeComponent.prototype.onSelectCidade = function (idCidade) {
        var _this = this;
        this.cidadeService.getCidade(idCidade)
            .subscribe(function (cidade) { return _this.selectedCidade = cidade; });
    };
    EstadoCidadeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'estado-cidade-select',
            templateUrl: './estado-cidade.component.html',
            styleUrls: ['../pessoa/pessoa.component.css'],
            providers: [estado_service_1.EstadoService, cidade_service_1.CidadeService]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [estado_service_1.EstadoService, cidade_service_1.CidadeService])
    ], EstadoCidadeComponent);
    return EstadoCidadeComponent;
}());
exports.EstadoCidadeComponent = EstadoCidadeComponent;
//# sourceMappingURL=estado-cidade.component.js.map