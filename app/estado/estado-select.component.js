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
// NÃO FUNCIONA: ver componente EstadoCidadeComponent
var core_1 = require("@angular/core");
var estado_service_1 = require("./estado.service");
var estado_1 = require("./estado");
var cidade_select_component_1 = require("../cidade/cidade-select.component");
var EstadoSelectComponent = (function () {
    function EstadoSelectComponent(estadoService, cidadeSelectComponent) {
        this.estadoService = estadoService;
        this.cidadeSelectComponent = cidadeSelectComponent;
        this.selectedEstado = new estado_1.Estado(0, "");
        this.selectMessage = "--Selecione o estado--";
    }
    EstadoSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.estadoService.getEstados()
            .subscribe(function (estados) { return _this.estados = estados; }, function (error) { return _this.errorMessage = error; });
    };
    EstadoSelectComponent.prototype.onSelect = function (idEstado) {
        this.cidadeSelectComponent.getCidadesEstado(idEstado);
    };
    EstadoSelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'estado-select',
            templateUrl: './estado-select.component.html',
            styleUrls: ['../pessoa/pessoa.component.css'],
            providers: [estado_service_1.EstadoService, cidade_select_component_1.CidadeSelectComponent]
        }),
        __metadata("design:paramtypes", [estado_service_1.EstadoService,
            cidade_select_component_1.CidadeSelectComponent])
    ], EstadoSelectComponent);
    return EstadoSelectComponent;
}());
exports.EstadoSelectComponent = EstadoSelectComponent;
//# sourceMappingURL=estado-select.component.js.map