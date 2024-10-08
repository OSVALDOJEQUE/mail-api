# API de Envio de Emails

## Descrição
Esta API permite o envio de emails de forma eficiente e escalável, utilizando filas gerenciadas pelo Redis. Ideal para aplicações que precisam lidar com grandes volumes de emails e garantir o envio sem sobrecarregar o servidor.

## Finalidade
O objetivo principal desta API é gerenciar o envio de emails através de filas, assegurando que os emails sejam processados de forma assíncrona e eficiente.

## Tecnologias Utilizadas
- **Linguagem:** JavaScript
- **Containerização:** Docker
- **Gerenciamento de Filas:** Redis

### Passos de Instalação
1. **Clone o repositório:**
2. **Configure o ficheiro .env:**
   ```bash
   MAIL_USER
   REDIS_HOST
   REDIS_PORT
   CLIENT_ID
   CLEINT_SECRET
   REDIRECT_URI
   REFRESH_TOKEN
   
3. **Construa a imagem Docker:**
   ```bash
   docker build -t email-api .
3.**Suba o container Docker  e Inicie a API**
A API estará acessível em http://localhost:3008.





