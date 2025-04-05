using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace SketchofilServer.Api.Controllers
{
    [Authorize]
    [Route("api/sketch")]
    [ApiController]
    public class SketchController : ControllerBase
    {

        [HttpGet("daily-idea")]
        public IActionResult GetDailySketchIdea()
        {
            string dailySketchIdea = "This is daily sketch idea";
            var json = JsonSerializer.Serialize(dailySketchIdea);
            return Ok(json);
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("admin-test")]
        public IActionResult GetAdminTest()
        {
            string adminTest = "This is an admin test";
            var json = JsonSerializer.Serialize(adminTest);
            return Ok(json);
        }
    }
}
