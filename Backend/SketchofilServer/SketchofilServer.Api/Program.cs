using Microsoft.EntityFrameworkCore;
using SketchofilServer.Core.Database.Models;

var builder = WebApplication.CreateBuilder(args);

string environmentVariableName = "PostgreSQLpw";
string dbServerPw = Environment.GetEnvironmentVariable(environmentVariableName, EnvironmentVariableTarget.User) ?? "Environment variable was not found.";

string connectionString = $"Host=localhost;Port=5432;Database=Sketchofil;User ID=postgres;Password={dbServerPw};";

builder.Services.AddDbContext<ApplicationDbContext>(
    options => options.UseNpgsql(connectionString));

builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<CustomUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.MapIdentityApi<CustomUser>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
