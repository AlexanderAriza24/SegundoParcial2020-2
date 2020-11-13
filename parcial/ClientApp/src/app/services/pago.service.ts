import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError  } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Pago } from '../pagos/models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService)
    { 
      this.baseUrl = baseUrl;
    }

    get(): Observable<Pago[]> {
      return this.http.get<Pago[]>(this.baseUrl + 'api/PAgo')
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Pago[]>('Consulta Pago', null))
          );
    }
    
    post(pago: Pago): Observable<Pago> {
      return this.http.post<Pago>(this.baseUrl + 'api/Pago', pago)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Pago>('Registrar Pago', null))
          );
    }

    totalPago(tipo: string): Observable<number> {
      return this.http.get<number>(this.baseUrl + 'api/Total/' + tipo)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<number>('Total Pagos', null))
          );
    }
}
