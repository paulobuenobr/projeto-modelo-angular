import {Component, OnInit} from '@angular/core';
import {Pessoa} from './pessoa';
import {PessoaService} from './pessoa.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-pessoas-list',
    templateUrl: './pessoas-list.component.html',
    styleUrls: ['./pessoas-list.component.css'],
    providers: [PessoaService]
})

export class PessoasComponent implements OnInit {

    errorMessage: string;
    selectedPessoa: Pessoa;
    pessoas: Pessoa[];
    textoBusca: string;
    pessoasBusca: Pessoa[];

    constructor(private pessoaService: PessoaService,
                private router: Router) {
    }

    onSelect(pessoa: Pessoa): void {
        this.selectedPessoa = pessoa;
    }

    getPessoas() {
        this.pessoaService.getPessoas()
            .subscribe(
                pessoas => this.pessoas = pessoas,
                error => this.errorMessage = <any>error);
    }

    deletePessoa(pessoa: Pessoa): void {
        if (confirm('Confirma a exclusão?')) {
            // O método filter() cria um array com todos os elementos
            // que passam por um teste (fornecido como uma função).
            this.pessoaService
                .deletePessoa(pessoa.id)
                .subscribe(() => {
                    this.pessoas = this.pessoas.filter(p => p !== pessoa);
                    if (this.selectedPessoa === pessoa) {
                        this.selectedPessoa = null;
                    }
                });
        }
    }

    ngOnInit(): void {
        this.getPessoas();
    }

    busca(): void {
        const texto = this.textoBusca;
        this.pessoas = this.pessoasBusca.filter(function (pessoa) {
            return pessoa.nome.indexOf(texto) >= 0;
        });
    }

    gotoPessoa(): void {
        this.router.navigate(['/pessoa', this.selectedPessoa.id]);
    }


}
