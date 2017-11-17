import {Component, Injectable, OnInit} from '@angular/core';
import {EstadoService} from '../estado/estado.service';
import {Estado} from '../estado/estado';
import {Cidade} from '../cidade/cidade';
import {CidadeService} from '../cidade/cidade.service';
import {MatFormFieldControl} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'app-estado-cidade-select',
    templateUrl: './estado-cidade.component.html',
    styleUrls: ['../pessoa/pessoa.component.css'],
    providers: [EstadoService, CidadeService, {provide: MatFormFieldControl, useExisting: EstadoCidadeComponent}]
})

@Injectable()
export class EstadoCidadeComponent implements OnInit {

    errorMessage: string;
    selectedEstado: Estado = new Estado(0, '');
    selectedCidade: Cidade = new Cidade(0, '', null);
    estados: Estado[];
    cidades: Cidade[];
    selectEstadoMessage = '--Selecione o estado--';
    selectCidadeMessage = '--Selecione a cidade--';

    constructor(private estadoService: EstadoService, private cidadeService: CidadeService) {
    }

    ngOnInit(): void {
        this.estadoService.getEstados()
            .subscribe(
                estados => this.estados = estados,
                error => this.errorMessage = <any>error);
    }

    onSelectEstado(idEstado) {
        this.cidadeService.getCidadesEstado(idEstado)
            .subscribe(cidades => this.cidades = cidades);
    }

    onSelectCidade(idCidade) {
        this.cidadeService.getCidade(idCidade)
            .subscribe(cidade => this.selectedCidade = cidade);
    }

}
