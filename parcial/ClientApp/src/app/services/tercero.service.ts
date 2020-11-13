import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tercero } from '../pagos/models/tercero';
import { tap, catchError  } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class TerceroService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService)
    {
      this.baseUrl = baseUrl;
    }

    post(tercero: Tercero): Observable<Tercero> {
      return this.http.post<Tercero>(this.baseUrl + 'api/Tercero', tercero)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Tercero>('Registrar Tercero', null))
          );
    }
    
    verificarExistencia(identificacion: string): Observable<Tercero> {
      return this.http.get<Tercero>(this.baseUrl + 'api/Tercero/' + identificacion)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Tercero>('Verificar Tercero', null))
          );
    }
}
