# Este Dockerfile se construye con el contexto en la RAIZ del monorepo:

FROM node:22-alpine AS base
RUN corepack enable

# --- Dependencias + build ---
FROM base AS build
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY server/package.json ./server/
COPY client/package.json ./client/

RUN pnpm install --filter server...

COPY server ./server
RUN pnpm --filter server build

# --- Producción ---
FROM base AS production
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY server/package.json ./server/
COPY client/package.json ./client/

RUN pnpm install --filter server --prod

COPY --from=build /app/server/dist ./server/dist

WORKDIR /app/server
EXPOSE 3000

CMD ["node", "dist/server.js"]
