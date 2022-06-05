using System.Threading.Tasks;
using crudFornecedor.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace crudFornecedor.Controllers
{
    public class FornecedorController : Controller
    {
        private readonly FornecedorDBContext _context;

        public FornecedorController(FornecedorDBContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.Fornecedores.ToListAsync());
        }

        // Create
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(Fornecedor fornecedor)
        {
            await _context.Fornecedores.AddAsync(fornecedor);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }

        // Update
        [HttpGet]
        public async Task<IActionResult> Update(int? id)
        {
            Fornecedor fornecedor = await _context.Fornecedores.FindAsync(id);
            if (id.HasValue && fornecedor != null)
            {
                return View(fornecedor);
            }

            return RedirectToAction(nameof(Index));
        }
        
        [HttpPost]
        public async Task<IActionResult> Update(Fornecedor fornecedor)
        {
            _context.Fornecedores.Update(fornecedor);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }
        
        // Delete
        [HttpGet]
        public async Task<IActionResult> Delete(int? id)
        {
            if (!(id.HasValue && await _context.Fornecedores.AnyAsync(f => f.ID == id)))
            {
                return RedirectToAction(nameof(Index));
            }

            var fornecedor = await _context.Fornecedores.SingleAsync(f => f.ID == id);

            return View(fornecedor);
        }
        
        [HttpPost]
        public async Task<IActionResult> Delete(Fornecedor fornecedor)
        {
            _context.Fornecedores.Remove(fornecedor); 
            await _context.SaveChangesAsync();   
    
            return RedirectToAction(nameof(Index));
        }
    }
}