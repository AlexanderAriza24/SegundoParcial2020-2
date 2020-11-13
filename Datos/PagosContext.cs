using System;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class PagosContext : DbContext
    {
        public PagosContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Tercero> Terceros { get; set; }
        public DbSet<Pago> Pagos {get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pago>()
            .HasOne<Tercero>()
            .WithMany()
            .HasForeignKey(p => p.Identificacion);
        }
    }
}
