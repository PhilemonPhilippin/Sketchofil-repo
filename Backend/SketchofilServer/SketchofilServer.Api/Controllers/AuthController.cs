using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SketchofilServer.Core.Database.Models;

namespace SketchofilServer.Api.Controllers;

[Authorize]
[Route("api/auth")]
[ApiController]
public class AuthController(SignInManager<CustomUser> signInManager) : ControllerBase
{
    private readonly SignInManager<CustomUser> _signInManager = signInManager;

    [HttpPost("logout")]
    public IResult Logout([FromBody] object empty)
    {
        if (empty is not null)
        {
            _signInManager.SignOutAsync();
            return Results.Ok();
        }
        return Results.Unauthorized();
    }
}
