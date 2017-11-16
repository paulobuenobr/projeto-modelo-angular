import {Component, OnInit, ViewChild} from "@angular/core";
import {Pessoa} from "./pessoa";
import {Estado} from "../estado/estado";
import {Cidade} from "../cidade/cidade";
import {PessoaService} from "./pessoa.service";
import {ActivatedRoute, Params} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Observable} from "rxjs/Observable";
import {EstadoCidadeComponent} from "../estado-cidade/estado-cidade.component";
import {CidadeService} from "../cidade/cidade.service";

declare var $: any;

@Component({
    /*
     Recursos relativos para componentes, como templateUrl e styleUrls no decorador @Component.
     ModuleId é usado para resolver caminhos relativos para suas folhas de estilo e templates, como está na documentação.
     */
    moduleId: module.id,
    selector: 'pessoa',
    templateUrl: './pessoa.component.html',
    styleUrls: ['./pessoa.component.css'],
    providers: [PessoaService, EstadoCidadeComponent, CidadeService]
})

export class PessoaComponent implements OnInit {

    pessoa: Pessoa = new Pessoa();
    isNew: Boolean;

    @ViewChild(EstadoCidadeComponent) estadoCidadeComponent: EstadoCidadeComponent;

    constructor(private pessoaService: PessoaService,
                private route: ActivatedRoute,
                private cidadeService: CidadeService) {
    }

    savePessoa(): void {

        let pessoa: Pessoa = new Pessoa();

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
        } else {
            this.pessoaService.updatePessoa(pessoa)
                .subscribe();
        }
        this.pessoa = new Pessoa();
        this.estadoCidadeComponent.selectedEstado = new Estado(0, "");
        this.estadoCidadeComponent.selectedCidade = new Cidade(0, "", null);
        this.isNew = true;

    }

    ngAfterViewInit() {
        this.formatFields();
    }


    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) =>
                params['id'] ? this.pessoaService.getPessoa(params['id'])
                    : new Observable.of(new Pessoa()))
            .subscribe(p => {
                this.pessoa = p;
                if (this.pessoa.id) {
                    this.isNew = false;
                    this.estadoCidadeComponent.selectedEstado = this.pessoa.cidade.estado;
                    this.cidadeService
                        .getCidadesEstado(this.pessoa.cidade.estado.id)
                        .subscribe(cidades => this.estadoCidadeComponent.cidades = cidades);
                    this.estadoCidadeComponent.selectedCidade = this.pessoa.cidade;
                } else {
                    this.isNew = true;
                }
            });

    }

    ngAfterViewChecked(): void {
        if (this.pessoa.dataNascimento && this.pessoa.dataNascimento instanceof Date) {
            $('#dataN').datepicker('setDate', this.pessoa.dataNascimento.toLocaleDateString("pt-BR"));
            //$('#dataN').datepicker('setDate', this.pessoa.dataNascimento);
        }
        if (this.pessoa.cpf && this.pessoa.cpf.toString().length==11) {
            $("#cpf").val(this.pessoa.cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4"));

        }
    }

    private formatFields(): void {
        // PB: Máscara para CPF jQuery
        var $cpf = $("#cpf");
        $cpf.mask('000.000.000-00', {reverse: true});

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

    }
}
