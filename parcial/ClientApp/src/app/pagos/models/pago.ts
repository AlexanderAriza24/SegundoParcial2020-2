import { Tercero } from "./tercero";

export class Pago {
    tercero: Tercero;
    tipoPago: string;
    fecha: Date;
    valorPago: number;
    valorIva: number;
}
