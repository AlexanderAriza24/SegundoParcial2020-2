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
                _context.Pagos.Add(pago);
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