using Entity;

namespace parcial.Models
{
    public class TerceroInputModel
    {
        public string Identificacion { get; set; }
        public string TipoDocumento { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Pais { get; set; }
        public string Departamento { get; set; }
        public string Ciudad { get; set; }
    }

    public class TerceroViewModel : TerceroInputModel
    {
        public TerceroViewModel()
        {

        }
        public TerceroViewModel(Tercero tercero)
        {
            Identificacion = tercero.Identificacion;
            Nombre = tercero.Nombre;
            TipoDocumento = tercero.TipoDocumento;
            Direccion = tercero.Direccion;
            Telefono = tercero.Telefono;
            Pais = tercero.Pais;
            Departamento = tercero.Departamento;
            Ciudad = tercero.Ciudad;
        }
    }
}