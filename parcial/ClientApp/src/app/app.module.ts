import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TerceroRegistroComponent } from './pagos/tercero-registro/tercero-registro.component';
import { PagoRegistroComponent } from './pagos/pago-registro/pago-registro.component';
import { PagoConsultaComponent } from './pagos/pago-consulta/pago-consulta.component';
import { AppRoutingModule } from './app-routing.module';
import { TerceroService } from './services/tercero.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { FiltroPagosPipe } from './pipe/filtro-pagos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TerceroRegistroComponent,
    PagoRegistroComponent,
    PagoConsultaComponent,
    AlertModalComponent,
    FiltroPagosPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    NgbModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [TerceroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
