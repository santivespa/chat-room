using ChatRoom.Hubs;
using ChatRoom.Repositories;

var customSpecificOrigin = "customSpecificOrigin";

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

builder.Services.AddSignalR();
builder.Services.AddRepositories();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: customSpecificOrigin,
        builder =>
        {
            builder.WithOrigins(configuration["AppSettings:Client_URL"].ToString())
                 .AllowAnyHeader()
                 .AllowAnyMethod()
                 .AllowCredentials();
        });
});

var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();
app.UseCors(customSpecificOrigin);

app.UseAuthorization();

app.MapControllers();
app.MapHub<ChatRoomHub>("/chatRoomHub");
app.Run();
