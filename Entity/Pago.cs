using System;

namespace Entity
{
    public class Pago
    {
        public int Codigo { get; set; }
        public string TipoPago { get; set; }
        public DateTime Fecha { get; set; }
        public int ValorPago { get; set; }
        public int ValorIva { get; set; }
        public Tercero Tercero { get; set; }
    }
}