"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var pessoa_component_1 = require("./pessoa/pessoa.component");
var pessoas_list_component_1 = require("./pessoa/pessoas-list.component");
var pessoa_service_1 = require("./pessoa/pessoa.service");
var angular2_text_mask_1 = require("angular2-text-mask");
var angular2_ui_switch_1 = require("angular2-ui-switch");
var common_1 = require("@angular/common");
var ng2_date_picker_1 = require("ng2-date-picker");
var md2_datepicker_1 = require("md2-datepicker");
var custom_date_picker_component_1 = require("./utils/custom-date-picker.component");
var custom_date_picker2_component_1 = require("./utils/custom-date-picker2.component");
var pessoas_filter_pipe_1 = require("./pessoa/pessoas-filter.pipe");
var cidade_select_component_1 = require("./cidade/cidade-select.component");
var cidade_service_1 = require("./cidade/cidade.service");
var estado_select_component_1 = require("./estado/estado-select.component");
var estado_service_1 = require("./estado/estado.service");
var estado_cidade_component_1 = require("./estado-cidade/estado-cidade.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                common_1.CommonModule,
                ng2_date_picker_1.DpDatePickerModule,
                md2_datepicker_1.Md2DatepickerModule.forRoot(),
                angular2_text_mask_1.TextMaskModule,
                angular2_ui_switch_1.UiSwitchModule
            ],
            declarations: [
                app_component_1.AppComponent,
                pessoa_component_1.PessoaComponent,
                pessoas_list_component_1.PessoasComponent,
                custom_date_picker_component_1.CustomDatePickerComponent,
                custom_date_picker2_component_1.CustomDatePickerComponent2,
                pessoas_filter_pipe_1.PessoasFilter,
                estado_cidade_component_1.EstadoCidadeComponent,
                estado_select_component_1.EstadoSelectComponent,
                cidade_select_component_1.CidadeSelectComponent
            ],
            providers: [
                pessoa_service_1.PessoaService,
                cidade_service_1.CidadeService,
                estado_service_1.EstadoService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map