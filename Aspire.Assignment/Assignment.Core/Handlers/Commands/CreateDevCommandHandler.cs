using MediatR;
using Assignment.Contracts.Data;
using Assignment.Contracts.DTO;
using Assignment.Contracts.Data.Entities;
using FluentValidation;
using System.Text.Json;
using Assignment.Core.Exceptions;
namespace Assignment.Providers.Handlers.Commands
{
    public class CreateDevCommand : IRequest<int>
    {
        
    }
}