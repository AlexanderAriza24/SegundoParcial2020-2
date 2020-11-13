import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PagoService } from 'src/app/services/pago.service';
import { TerceroService } from 'src/app/services/tercero.service';
import { Pago } from '../models/pago';

@Component({
  selector: 'app-pago-registro',
  templateUrl: './pago-registro.component.html',
  styleUrls: ['./pago-registro.component.css']
})
export class PagoRegistroComponent implements OnInit {

  formGroup: FormGroup;
  pago: Pago;
  searchText: string;
  constructor(
    private pagoService: PagoService,
    private terceroService: TerceroService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(){
    this.buildForm();
  }

  private buildForm() {
    this.pago = new Pago();
    this.pago.identificacion = '';
    this.pago.tipoPago = '';
    this.pago.valorPago;
    this.pago.valorIva;
    this.pago.fecha;

    this.formGroup = this.formBuilder.group({
      identificacion: [this.pago.identificacion, Validators.required],
      tipoPago: [this.pago.tipoPago, Validators.required],
      fecha: [this.pago.fecha, Validators.required],
      valorPago: [this.pago.valorPago, [Validators.required, Validators.min(1)]],
      valorIva: [this.pago.valorIva, [Validators.required, Validators.min(1)]]
    });
  }

  get controlPago() {
    return this.formGroup.controls;
  }

  onSubmit(){
    if(this.formGroup.invalid){
      return;
    }
    this.add();
  }

  add() {
    this.pago = this.formGroup.value;
    this.pagoService.post(this.pago).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Pago Registrado Exitosamente!!! :-)';
        this.pago = p;
      }
    });
  }

  consultar(){
    this.terceroService.verificarExistencia(this.searchText).subscribe(p => {
      if(p != null){
        if(p.identificacion == this.searchText) {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'El tercero si se encuentra en la base de datos';
        }
      }else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'El tercero no se encuentra en la base de datos, debe Registrarlo';
      }
    });
  }

}
