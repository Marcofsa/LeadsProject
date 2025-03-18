using LeadProject_API.Context;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data.Entity;

namespace LeadProject_API.Controllers
{
        [ApiController]
        [Route("api/leads")]
        public class LeadsController : ControllerBase
        {
            private readonly AppDbContext _context;

            public LeadsController(AppDbContext context) => _context = context;

            [HttpGet("{status}")]
            public async Task<IActionResult> GetLeads(string status)
            {
                return Ok(await _context.Leads.Where(l => l.Status == status).ToListAsync());
            }

            [HttpPost("accept/{id}")]
            public async Task<IActionResult> AcceptLead(int id)
            {
                var lead = await _context.Leads.FindAsync(id);
                if (lead == null) return NotFound();

                lead.Status = "accepted";
                if (lead.Price > 500) lead.Price *= 0.9M; // Cálculo que aplica 10% de desconto
                await _context.SaveChangesAsync();

                return Ok();
            }

            [HttpPost("decline/{id}")]
            public async Task<IActionResult> DeclineLead(int id)
            {
                var lead = await _context.Leads.FindAsync(id);
                if (lead == null) return NotFound();

                lead.Status = "declined";
                await _context.SaveChangesAsync();

                return Ok();
            }
        }

    }
