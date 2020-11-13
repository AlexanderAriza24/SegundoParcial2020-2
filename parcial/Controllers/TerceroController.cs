using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using parcial.Models;

namespace parcial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TerceroController : ControllerBase
    {
        private readonly TerceroService _terceroService;
        public TerceroController(PagosContext context)
        {
            _terceroService = new TerceroService(context);
        }

        [HttpGet("{identificacion}")]
        public ActionResult<TerceroViewModel> VerificarExistencia(string identificacion)
        {
            var tercero = _terceroService.VerificarExistencia(identificacion);
            if(tercero == null) return NotFound();
            var terceroViewModel = new TerceroViewModel(tercero);
            return terceroViewModel;
        }

        // POST: api/Persona
        [HttpPost]
        public ActionResult<TerceroViewModel> Post(TerceroInputModel terceroInput)
        {
            Tercero tercero = MapearTercero(terceroInput);
            var response = _terceroService.Guardar(tercero);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Tercero);
        }

        private Tercero MapearTercero(TerceroInputModel terceroInput)
        {
            var tercero = new Tercero
            {
                Identificacion = terceroInput.Identificacion,
                Nombre = terceroInput.Nombre,
                TipoDocumento = terceroInput.TipoDocumento,
                Direccion = terceroInput.Direccion,
                Telefono = terceroInput.Telefono,
                Pais = terceroInput.Pais,
                Departamento = terceroInput.Departamento,
                Ciudad = terceroInput.Ciudad,
            };
            return tercero;
        }
    }
}