using System;
using Datos;
using Entity;

namespace Logica
{
    public class TerceroService
    {
        private readonly PagosContext _context;
        public TerceroService(PagosContext context)
        {
            _context=context;
        }

        public GuardarTerceroResponse Guardar(Tercero tercero)
        {
            try
            {
                _context.Terceros.Add(tercero);
                _context.SaveChanges();
                return new GuardarTerceroResponse(tercero);
            }
            catch (Exception e)
            {
                return new GuardarTerceroResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public Tercero VerificarExistencia(string Identificacion)
        {
            Tercero tercero = _context.Terceros.Find(Identificacion);
            return tercero;
        }

        /*public List<Tercero> ConsultarTodos()
        {
            List<Tercero> terceros = _context.Terceros.ToList();
            return terceros;
        }*/
    }

    public class GuardarTerceroResponse 
    {
        public GuardarTerceroResponse(Tercero tercero)
        {
            Error = false;
            Tercero = tercero;
        }
        public GuardarTerceroResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Tercero Tercero { get; set; }
    }
}