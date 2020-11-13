import { Pipe, PipeTransform } from '@angular/core';
import { Pago } from '../pagos/models/pago';

@Pipe({
  name: 'filtroPagos'
})
export class FiltroPagosPipe implements PipeTransform {

  transform(pago:Pago[], searchText:string): any {
    if (searchText == null) return pago;
      return pago.filter(p =>
      p.tipoPago.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
    }
}
