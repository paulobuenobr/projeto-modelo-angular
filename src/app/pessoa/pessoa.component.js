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
var pessoa_1 = require("./pessoa");
var estado_1 = require("../estado/estado");
var cidade_1 = require("../cidade/cidade");
var pessoa_service_1 = require("./pessoa.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var Observable_1 = require("rxjs/Observable");
var estado_cidade_component_1 = require("../estado-cidade/estado-cidade.component");
var cidade_service_1 = require("../cidade/cidade.service");
var PessoaComponent = /** @class */ (function () {
    function PessoaComponent(pessoaService, route, cidadeService) {
        this.pessoaService = pessoaService;
        this.route = route;
        this.cidadeService = cidadeService;
        this.pessoa = new pessoa_1.Pessoa();
    }
    PessoaComponent.prototype.savePessoa = function () {
        var pessoa = new pessoa_1.Pessoa();
        this.pessoa.cidade = this.estadoCidadeComponent.selectedCidade;
        pessoa.id = this.pessoa.id;
        pessoa.nome = this.pessoa.nome.trim();
        pessoa.cpf = $("#cpf").data().mask.getCleanVal();
        pessoa.dataNascimento = $("#dataN").datepicker("getDate");
        pessoa.maiorIdade = this.pessoa.maiorIdade;
        pessoa.cidade = this.pessoa.cidade;
        // Double check
        if (!this.pessoa.nome || !this.pessoa.cpf || !this.pessoa.dataNascimento) {
            return;
        }
        if (this.isNew) {
            this.pessoaService.addPessoa(pessoa)
                .subscribe();
        }
        else {
            this.pessoaService.updatePessoa(pessoa)
                .subscribe();
        }
        this.pessoa = new pessoa_1.Pessoa();
        this.estadoCidadeComponent.selectedEstado = new estado_1.Estado(0, "");
        this.estadoCidadeComponent.selectedCidade = new cidade_1.Cidade(0, "", null);
        this.isNew = true;
    };
    PessoaComponent.prototype.ngAfterViewInit = function () {
        this.formatFields();
    };
    PessoaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return params['id'] ? _this.pessoaService.getPessoa(params['id'])
                : new Observable_1.Observable.of(new pessoa_1.Pessoa());
        })
            .subscribe(function (p) {
            _this.pessoa = p;
            if (_this.pessoa.id) {
                _this.isNew = false;
                _this.estadoCidadeComponent.selectedEstado = _this.pessoa.cidade.estado;
                _this.cidadeService
                    .getCidadesEstado(_this.pessoa.cidade.estado.id)
                    .subscribe(function (cidades) { return _this.estadoCidadeComponent.cidades = cidades; });
                _this.estadoCidadeComponent.selectedCidade = _this.pessoa.cidade;
            }
            else {
                _this.isNew = true;
            }
        });
    };
    PessoaComponent.prototype.ngAfterViewChecked = function () {
        if (this.pessoa.dataNascimento && this.pessoa.dataNascimento instanceof Date) {
            $('#dataN').datepicker('setDate', this.pessoa.dataNascimento.toLocaleDateString("pt-BR"));
            //$('#dataN').datepicker('setDate', this.pessoa.dataNascimento);
        }
        if (this.pessoa.cpf && this.pessoa.cpf.toString().length == 11) {
            $("#cpf").val(this.pessoa.cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4"));
        }
    };
    PessoaComponent.prototype.formatFields = function () {
        // PB: Máscara para CPF jQuery
        var $cpf = $("#cpf");
        $cpf.mask('000.000.000-00', { reverse: true });
        /* PB: Date Picker jQuery (para usar os componentes de data,
         comentar aqui e alterar a página do componente) */
        var dateFormat = $(".selector").datepicker("option", "dateFormat");
        $("#dataN").datepicker("option", "dateFormat", "dd/mm/yy");
        $("#dataN").datepicker({
            dateFormat: "dd/mm/yy",
        });
        // Getter
        var dayNamesMin = $("#dataN").datepicker("option", "dayNamesMin");
        // Setter
        $("#dataN").datepicker("option", "dayNamesMin", ["Seg",
            "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]);
        // Getter
        var monthNames = $("#dataN").datepicker("option", "monthNames");
        // Setter
        $("#dataN").datepicker("option", "monthNames", ["Jan",
            "Fev", "Mar", "Abr", "Mai", "Jun", "Jul",
            "Ago", "Set", "Out", "Nov", "Dez"]);
    };
    __decorate([
        core_1.ViewChild(estado_cidade_component_1.EstadoCidadeComponent),
        __metadata("design:type", estado_cidade_component_1.EstadoCidadeComponent)
    ], PessoaComponent.prototype, "estadoCidadeComponent", void 0);
    PessoaComponent = __decorate([
        core_1.Component({
            /*
             Recursos relativos para componentes, como templateUrl e styleUrls no decorador @Component.
             ModuleId é usado para resolver caminhos relativos para suas folhas de estilo e templates, como está na documentação.
             */
            moduleId: module.id,
            selector: 'pessoa',
            templateUrl: './pessoa.component.html',
            styleUrls: ['./pessoa.component.css'],
            providers: [pessoa_service_1.PessoaService, estado_cidade_component_1.EstadoCidadeComponent, cidade_service_1.CidadeService]
        }),
        __metadata("design:paramtypes", [pessoa_service_1.PessoaService,
            router_1.ActivatedRoute,
            cidade_service_1.CidadeService])
    ], PessoaComponent);
    return PessoaComponent;
}());
exports.PessoaComponent = PessoaComponent;
//# sourceMappingURL=pessoa.component.js.map