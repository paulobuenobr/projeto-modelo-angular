// NÃO FUNCIONA: ver componente EstadoCidadeComponent
import {Component, OnInit, ViewChild} from "@angular/core";
import {EstadoService} from "./estado.service";
import {Estado} from "./estado";
import {CidadeSelectComponent} from '../cidade/cidade-select.component';
import {CidadeService} from "../cidade/cidade.service";

@Component({
    moduleId: module.id,
    selector: 'estado-select',
    templateUrl: './estado-select.component.html',
    styleUrls: ['../pessoa/pessoa.component.css'],
    providers: [EstadoService, CidadeSelectComponent]
})

export class EstadoSelectComponent implements OnInit {

    errorMessage: string;
    selectedEstado: Estado = new Estado(0, "");
    estados: Estado[];
    selectMessage: string = "--Selecione o estado--";

    constructor(private estadoService: EstadoService,
                private cidadeSelectComponent: CidadeSelectComponent) {
    }

    ngOnInit(): void {
        this.estadoService.getEstados()
            .subscribe(
                estados => this.estados = estados,
                error => this.errorMessage = <any>error);
    }

    onSelect(idEstado) {
        this.cidadeSelectComponent.getCidadesEstado(idEstado);
    }

}
