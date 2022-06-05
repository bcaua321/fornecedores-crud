using Microsoft.EntityFrameworkCore;

namespace crudFornecedor.Models
{
    public class FornecedorDBContext : DbContext
    {
        public DbSet<Fornecedor> Fornecedores { get; set; }
        
        public FornecedorDBContext(DbContextOptions<FornecedorDBContext> options) : base(options) {}
    }
}