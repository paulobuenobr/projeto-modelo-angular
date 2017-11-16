// NÃO FUNCIONA: ver componente EstadoCidadeComponent

import {Component, OnInit} from "@angular/core";
import {CidadeService} from "./cidade.service";
import {Cidade} from "./cidade";

@Component({
    moduleId: module.id,
    selector: 'cidade-select',
    templateUrl: './cidade-select.component.html',
    styleUrls: ['../pessoa/pessoa.component.css'],
    providers: [CidadeService]

})

export class CidadeSelectComponent {

    errorMessage: string;
    selectedCidade: Cidade = new Cidade(0, "");
    selectMessage: string = "--Selecione a cidade--";
    cidades: Cidade[];

    constructor(private cidadeService: CidadeService) {
    }

    getCidadesEstado(idEstado): Cidade[] {
        this.cidadeService.getCidadesEstado(idEstado)
            .subscribe(cidades => this.cidades = cidades,
                error => this.errorMessage = <any>error);
        console.log(this.cidades);
    }

}
