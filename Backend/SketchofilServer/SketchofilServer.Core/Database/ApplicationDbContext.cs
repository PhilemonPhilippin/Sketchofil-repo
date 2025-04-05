using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SketchofilServer.Core.Database.Models;

namespace SketchofilServer.Core.Database;
public class ApplicationDbContext : IdentityDbContext<CustomUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
        base(options)
    { }
}