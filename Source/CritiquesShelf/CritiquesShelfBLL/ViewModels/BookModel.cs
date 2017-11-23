using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;

namespace CritiquesShelfBLL.ViewModels
{
    public class BookModel
    {
        public string Title{ get; set; }
        public string Description { get; set; }
        public List<string> AuthorsNames { get; set; }
        public double Rateing { get; set; }
        public List<string> Tags { get; set; }
        public int? DatePublished { get; set; }
        public string Cover { get; set; }
    }
}
