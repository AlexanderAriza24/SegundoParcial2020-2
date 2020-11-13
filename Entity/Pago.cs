using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Pago
    {
        [Key]
        public int Codigo { get; set; }
        public string TipoPago { get; set; }
        public DateTime Fecha { get; set; }
        public int ValorPago { get; set; }
        public int ValorIva { get; set; }
        public string Identificacion { get; set; }
    }
}