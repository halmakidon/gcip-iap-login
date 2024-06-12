FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm ci

ENTRYPOINT ["npx", "vite", "--host"]