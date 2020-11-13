import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/services/pago.service';
import { Pago } from '../models/pago';

@Component({
  selector: 'app-pago-consulta',
  templateUrl: './pago-consulta.component.html',
  styleUrls: ['./pago-consulta.component.css']
})
export class PagoConsultaComponent implements OnInit {

  pagos: Pago[];
  searchText: string;
  totalGastos: number;
  constructor(private pagoService: PagoService) { }

  ngOnInit(){

    this.pagoService.get().subscribe(result => {
      this.pagos = result;
    });
  }

  cambio(){
    this.pagoService.totalPago(this.searchText).subscribe(r => {
      this.totalGastos = r;
    });
  }

}
