import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PessoaComponent} from "./pessoa/pessoa.component";
import {PessoasComponent} from "./pessoa/pessoas-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoa',     component: PessoaComponent },
  { path: 'pessoas',    component: PessoasComponent },
  { path: 'pessoa/:id', component: PessoaComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
