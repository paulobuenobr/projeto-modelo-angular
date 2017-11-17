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
var pessoa_service_1 = require("./pessoa.service");
var router_1 = require("@angular/router");
var PessoasComponent = /** @class */ (function () {
    function PessoasComponent(pessoaService, router) {
        this.pessoaService = pessoaService;
        this.router = router;
    }
    PessoasComponent.prototype.onSelect = function (pessoa) {
        this.selectedPessoa = pessoa;
    };
    PessoasComponent.prototype.getPessoas = function () {
        var _this = this;
        this.pessoaService.getPessoas()
            .subscribe(function (pessoas) { return _this.pessoas = pessoas; }, function (error) { return _this.errorMessage = error; });
    };
    PessoasComponent.prototype.deletePessoa = function (pessoa) {
        var _this = this;
        if (confirm("Confirma a exclusão?")) {
            // O método filter() cria um array com todos os elementos
            // que passam por um teste (fornecido como uma função).
            this.pessoaService
                .deletePessoa(pessoa.id)
                .subscribe(function () {
                _this.pessoas = _this.pessoas.filter(function (p) { return p !== pessoa; });
                if (_this.selectedPessoa === pessoa) {
                    _this.selectedPessoa = null;
                }
            });
        }
    };
    PessoasComponent.prototype.ngOnInit = function () {
        this.getPessoas();
    };
    PessoasComponent.prototype.busca = function () {
        var texto = this.textoBusca;
        this.pessoas = this.pessoasBusca.filter(function (pessoa) {
            return pessoa.nome.indexOf(texto) >= 0;
        });
    };
    PessoasComponent.prototype.gotoPessoa = function () {
        this.router.navigate(['/pessoa', this.selectedPessoa.id]);
    };
    PessoasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pessoas',
            templateUrl: './pessoas-list.component.html',
            styleUrls: ['./pessoas-list.component.css'],
            providers: [pessoa_service_1.PessoaService]
        }),
        __metadata("design:paramtypes", [pessoa_service_1.PessoaService,
            router_1.Router])
    ], PessoasComponent);
    return PessoasComponent;
}());
exports.PessoasComponent = PessoasComponent;
//# sourceMappingURL=pessoas-list.component.js.map