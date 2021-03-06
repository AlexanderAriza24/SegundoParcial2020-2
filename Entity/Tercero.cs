﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Tercero
    {
        [Key]
        public string Identificacion { get; set; }
        public string TipoDocumento { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Pais { get; set; }
        public string Departamento { get; set; }
        public string Ciudad { get; set; }
    }
}
