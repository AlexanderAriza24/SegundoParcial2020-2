using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class PagoService
    {
        private readonly PagosContext _context;
        public PagoService(PagosContext context)
        {
            _context=context;
        }

        public GuardarPagoResponse Guardar(Pago pago)
        {
            try
            {
                Pago paguito = MapearPago(pago);
                _context.Pagos.Add(paguito);
                _context.SaveChanges();
                return new GuardarPagoResponse(pago);
            }
            catch (Exception e)
            {
                return new GuardarPagoResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<Pago> ConsultarTodos()
        {
            List<Pago> pagos = _context.Pagos.ToList();
            return pagos;
        }

        public Pago MapearPago(Pago pago)
        {
            Pago prueba = new Pago();
            prueba.Identificacion = pago.Identificacion;
            prueba.Fecha = pago.Fecha;
            prueba.ValorIva = pago.ValorIva;
            prueba.ValorPago = pago.ValorPago;
            prueba.TipoPago = pago.TipoPago;
            return prueba;
        }
    }

    public class GuardarPagoResponse 
    {
        public GuardarPagoResponse(Pago pago)
        {
            Error = false;
            Pago = pago;
        }
        public GuardarPagoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Pago Pago { get; set; }
    }
}