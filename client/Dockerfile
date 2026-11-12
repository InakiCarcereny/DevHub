# Este Dockerfile se construye con el contexto en la RAIZ del monorepo:

FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY server/package.json ./server/
COPY client/package.json ./client/

RUN pnpm install --filter client...

COPY client ./client
RUN pnpm --filter client build

# --- Producción ---
FROM nginx:alpine

COPY --from=build /app/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
