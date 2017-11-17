import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Pessoa} from './pessoa';
import {Estado} from '../estado/estado';
import {Cidade} from '../cidade/cidade';
import {PessoaService} from './pessoa.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {EstadoCidadeComponent} from '../estado-cidade/estado-cidade.component';
import {CidadeService} from '../cidade/cidade.service';

@Component({
    /*
     Recursos relativos para componentes, como templateUrl e styleUrls no decorador @Component.
     ModuleId é usado para resolver caminhos relativos para suas folhas de estilo e templates, como está na documentação.
     */
    moduleId: module.id,
    selector: 'app-pessoa',
    templateUrl: './pessoa.component.html',
    styleUrls: ['./pessoa.component.css'],
    providers: [PessoaService, EstadoCidadeComponent, CidadeService]
})

export class PessoaComponent implements OnInit, AfterViewInit, AfterViewChecked {

    pessoa: Pessoa = new Pessoa();
    isNew: Boolean;

    @ViewChild(EstadoCidadeComponent) estadoCidadeComponent: EstadoCidadeComponent;

    constructor(private pessoaService: PessoaService,
                private route: ActivatedRoute,
                private cidadeService: CidadeService) {
    }

    savePessoa(): void {

        const pessoa: Pessoa = new Pessoa();

        this.pessoa.cidade = this.estadoCidadeComponent.selectedCidade;

        pessoa.id = this.pessoa.id;
        pessoa.nome = this.pessoa.nome.trim();
        pessoa.cpf = this.pessoa.cpf;
        pessoa.dataNascimento = this.pessoa.dataNascimento;
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
        this.estadoCidadeComponent.selectedEstado = new Estado(0, '');
        this.estadoCidadeComponent.selectedCidade = new Cidade(0, '', null);
        this.isNew = true;

    }

    ngAfterViewInit() {
        this.formatFields();
    }


    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) =>
                params['id'] ? this.pessoaService.getPessoa(params['id'])
                    : Observable.of(new Pessoa()))
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
    }

    private formatFields(): void {
    }
}
