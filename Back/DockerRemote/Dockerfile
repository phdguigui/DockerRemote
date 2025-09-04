FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
LABEL org.opencontainers.image.source https://github.com/phdguigui/DockerRemote

WORKDIR /app

COPY . ./
RUN dotnet restore

RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

EXPOSE 8080

ENTRYPOINT ["dotnet", "DockerRemote.dll"]