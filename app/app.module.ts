import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule, JsonpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {PessoaComponent} from "./pessoa/pessoa.component";
import {PessoasComponent} from "./pessoa/pessoas-list.component";
import {PessoaService} from "./pessoa/pessoa.service";
import {TextMaskModule} from "angular2-text-mask";
import {UiSwitchModule} from "angular2-ui-switch";
import {CommonModule} from "@angular/common";
import {DpDatePickerModule} from "ng2-date-picker";
import {Md2DatepickerModule} from "md2-datepicker";
import {CustomDatePickerComponent} from "./utils/custom-date-picker.component";
import {CustomDatePickerComponent2} from "./utils/custom-date-picker2.component";
import {PessoasFilter} from './pessoa/pessoas-filter.pipe'
import {CidadeSelectComponent} from "./cidade/cidade-select.component";
import {CidadeService} from "./cidade/cidade.service";
import {EstadoSelectComponent} from "./estado/estado-select.component";
import {EstadoService} from "./estado/estado.service";
import {EstadoCidadeComponent} from "./estado-cidade/estado-cidade.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule,
        CommonModule,
        DpDatePickerModule,
        Md2DatepickerModule.forRoot(),
        TextMaskModule,
        UiSwitchModule
    ],
    declarations: [
        AppComponent,
        PessoaComponent,
        PessoasComponent,
        CustomDatePickerComponent,
        CustomDatePickerComponent2,
        PessoasFilter,
        EstadoCidadeComponent,
        EstadoSelectComponent,
        CidadeSelectComponent
    ],
    providers: [
        PessoaService,
        CidadeService,
        EstadoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
