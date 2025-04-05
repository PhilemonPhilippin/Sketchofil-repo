using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace SketchofilServer.Api.Controllers;

[Authorize]
[Route("api/sketch")]
[ApiController]
public class SketchController : ControllerBase
{

    [HttpGet("daily-idea")]
    public IResult GetDailySketchIdea()
    {
        string dailySketchIdea = "This is daily sketch idea";
        var json = JsonSerializer.Serialize(dailySketchIdea);
        return Results.Ok(json);
    }

    [Authorize(Policy = "RequireAdminRole")]
    [HttpGet("admin-test")]
    public IResult GetAdminTest()
    {
        string adminTest = "This is an admin test";
        var json = JsonSerializer.Serialize(adminTest);
        return Results.Ok(json);
    }
}
