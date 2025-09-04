# Usa uma imagem oficial do Node como base para build
FROM node:18 AS build

LABEL org.opencontainers.image.source=https://github.com/phdguigui/DockerRemote

# Cria o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Compila o app para produção
RUN npm run build 

# Usa uma imagem leve do Nginx para servir os arquivos
FROM nginx:alpine

# Copia o build da etapa anterior para a pasta pública do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta padrão do Nginx
EXPOSE 80

# Inicializa o Nginx
CMD ["nginx", "-g", "daemon off;"]

# Build: docker build -t react-image .
# Run: docker run -p 8080:80 react-image
