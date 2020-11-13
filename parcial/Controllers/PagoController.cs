using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using parcial.Models;

namespace parcial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagoController : ControllerBase
    {
        private readonly PagoService _pagoService;
        public PagoController(PagosContext context)
        {
            _pagoService = new PagoService(context);
        }

        // GET: api/Pago
        [HttpGet]
        public IEnumerable<PagoViewModel> Gets()
        {
            var pagos = _pagoService.ConsultarTodos().Select(p=> new PagoViewModel(p));
            return pagos;
        }

        [HttpGet("{tipoPago}")]
        public ActionResult<int> TotalPago(string tipoPago)
        {
            var total = _pagoService.Total(tipoPago);
            return total;
        }

        // POST: api/Pago
        [HttpPost]
        public ActionResult<PagoViewModel> Post(PagoInputModel pagoInput)
        {
            Pago pago = MapearPago(pagoInput);
            var response = _pagoService.Guardar(pago);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Pago);
        }

        private Pago MapearPago(PagoInputModel pagoInput)
        {
            var pago = new Pago
            {
                Codigo = pagoInput.Codigo,
                Identificacion = pagoInput.Identificacion,
                TipoPago = pagoInput.TipoPago,
                Fecha = pagoInput.Fecha,
                ValorPago = pagoInput.ValorPago,
                ValorIva = pagoInput.ValorIva,
            };
            return pago;
        }
    }
}