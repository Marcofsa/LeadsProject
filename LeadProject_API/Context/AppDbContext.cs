using Microsoft.EntityFrameworkCore;
using LeadProject_API.BusinessObject;

namespace LeadProject_API.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<LeadBO> Leads { get; set; }
    }
}
