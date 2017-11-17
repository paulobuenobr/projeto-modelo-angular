import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PessoaComponent} from './pessoa/pessoa.component';
import {PessoasComponent} from './pessoa/pessoas-list.component';
import {EstadoCidadeComponent} from './estado-cidade/estado-cidade.component';
import {PessoaService} from './pessoa/pessoa.service';
import {CidadeService} from './cidade/cidade.service';
import {EstadoService} from './estado/estado.service';
import {
  MatButtonModule,
  MatDatepickerModule, MatError, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatOptionModule,
  MatRadioModule,
  MatSelectModule, MatToolbarModule, MatToolbarRow
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {PessoasFilter} from './pessoa/pessoas-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'pessoa', component: PessoaComponent },
  { path: 'pessoas', component:  PessoasComponent}
];

@NgModule({
  declarations: [
    AppComponent, PessoaComponent, PessoasComponent, EstadoCidadeComponent, PessoasFilter
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), MatFormFieldModule, FormsModule, HttpClientModule, HttpModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatOptionModule, BrowserAnimationsModule, MatRadioModule, MatButtonModule,
    MatToolbarModule
  ],
  providers: [PessoaService, CidadeService, EstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
