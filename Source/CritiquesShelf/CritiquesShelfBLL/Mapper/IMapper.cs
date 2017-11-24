﻿using System;
using CritiquesShelfBLL.Entities;
using CritiquesShelfBLL.ViewModels;

namespace CritiquesShelfBLL.Mapper
{
    public interface IMapper
    {
        BookModel MapBookEntityToModel(Book book);
    }
}
