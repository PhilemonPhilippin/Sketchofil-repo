using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SketchofilServer.Core.Database;
using SketchofilServer.Core.Database.Models;

public class Program
{
    public static async Task Main(string[] args)
    {
        string adminRole = "Admin";

        var builder = WebApplication.CreateBuilder(args);

        string dbServerPwEnvironmentVariable = "PostgreSQLpw";
        string dbServerPw = Environment.GetEnvironmentVariable(dbServerPwEnvironmentVariable, EnvironmentVariableTarget.User) ?? "Environment variable was not found.";

        string connectionString = $"Host=localhost;Port=5432;Database=Sketchofil;User ID=postgres;Password={dbServerPw};";

        builder.Services.AddDbContext<ApplicationDbContext>(
        options => options.UseNpgsql(connectionString));

        builder.Services.AddAuthorization( options =>
        {
            options.AddPolicy("RequireAdminRole", policy => policy.RequireRole(adminRole));
        });

        builder.Services.AddIdentityApiEndpoints<CustomUser>()
        .AddRoles<IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>();

        builder.Services.AddControllers();

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        app.MapGroup("/api/auth").MapIdentityApi<CustomUser>();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();


        app.UseAuthorization();

        app.MapControllers();

        using (var scope = app.Services.CreateScope())
        {
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var roles = new[] { adminRole, "User" };

            foreach (var role in roles)
            {
                if (!await roleManager.RoleExistsAsync(role))
                {
                    await roleManager.CreateAsync(new IdentityRole(role));
                }
            }
        }

        using (var scope = app.Services.CreateScope())
        {
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<CustomUser>>();
            string email = "philemon@admin.com";
            string adminPwEnvironmentVariable = "adminPw";
            string adminPw = Environment.GetEnvironmentVariable(adminPwEnvironmentVariable, EnvironmentVariableTarget.User) ?? "Environment variable was not found.";

            if (await userManager.FindByEmailAsync(email) is null)
            {
                CustomUser user = new()
                {
                    UserName = email,
                    Email = email
                };
                await userManager.CreateAsync(user, adminPw);
                await userManager.AddToRoleAsync(user, adminRole);
            }
        }

        app.Run();
    }
}