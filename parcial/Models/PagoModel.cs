using System;
using Entity;

namespace parcial.Models
{
    public class PagoInputModel
    {
        public int Codigo { get; set; }
        public string TipoPago { get; set; }
        public DateTime Fecha { get; set; }
        public int ValorPago { get; set; }
        public int ValorIva { get; set; }
        public string Identificacion { get; set; }
    }

    public class PagoViewModel : PagoInputModel
    {
        public PagoViewModel()
        {

        }
        public PagoViewModel(Pago pago)
        {
            Codigo = pago.Codigo;
            Identificacion = pago.Identificacion;
            TipoPago = pago.TipoPago;
            Fecha = pago.Fecha;
            ValorPago = pago.ValorPago;
            ValorIva = pago.ValorIva;
        }
    }
}