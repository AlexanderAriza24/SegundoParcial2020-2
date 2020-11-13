import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TerceroService } from 'src/app/services/tercero.service';
import { Tercero } from '../models/tercero';

@Component({
  selector: 'app-tercero-registro',
  templateUrl: './tercero-registro.component.html',
  styleUrls: ['./tercero-registro.component.css']
})
export class TerceroRegistroComponent implements OnInit {

  formGroup: FormGroup;
  tercero: Tercero;
  constructor(
    private terceroService: TerceroService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(){
    this.buildForm();
  }

  private buildForm(){
    this.tercero = new Tercero();
    this.tercero.tipoDocumento = '';
    this.tercero.identificacion = '';
    this.tercero.nombre = '';
    this.tercero.direccion = '';
    this.tercero.telefono = '';
    this.tercero.pais = '';
    this.tercero.departamento = '';
    this.tercero.ciudad = '';

    this.formGroup = this.formBuilder.group({
      tipoDocumento: [this.tercero.tipoDocumento, Validators.required],
      identificacion: [this.tercero.identificacion, Validators.required],
      nombre: [this.tercero.nombre, Validators.required],
      direccion: [this.tercero.direccion, Validators.required],
      telefono: [this.tercero.telefono, Validators.required],
      pais: [this.tercero.pais, Validators.required],
      departamento: [this.tercero.departamento, Validators.required],
      ciudad: [this.tercero.ciudad, Validators.required]
    });
  }

  get control() { 
    return this.formGroup.controls;
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.terceroService.verificarExistencia(this.tercero.identificacion).subscribe(p => {
      if(p) {
        alert('El tercero si se encuentra en la base de datos');
      }else{
        this.tercero = this.formGroup.value;
        this.terceroService.post(this.tercero).subscribe(p => {
          if (p != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'Tercero Registrado!!! :-)';
            this.tercero = p;
          }
        })
      }
    });
  }

}
