import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoConsultaComponent } from './pagos/pago-consulta/pago-consulta.component';
import { PagoRegistroComponent } from './pagos/pago-registro/pago-registro.component';
import { TerceroRegistroComponent } from './pagos/tercero-registro/tercero-registro.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'pagoConsulta',
  component: PagoConsultaComponent
  },
  {
  path: 'pagoRegistro',
  component: PagoRegistroComponent
  },
  {
    path: 'terceroRegistro',
    component: TerceroRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
