<div align="center">

# DevHub

### Red social exclusiva para desarrolladores

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/express-%23000000.svg?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Sequelize](https://img.shields.io/badge/sequelize-%2352B0E7.svg?style=for-the-badge&logo=sequelize&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Integrantes - Grupo N-4

Iñaki Carcereny · Valentín De Pascale · Joaquín Marcilese

</div>

---

## Descripción

**DevHub** es una red social para desarrolladores. Cada usuario cuenta con un perfil integrado con la API de GitHub, donde se muestran sus repositorios y los lenguajes de programación que más utiliza. Además, permite crear publicaciones, incluyendo posts de código con syntax highlighting.

El proyecto es un **monorepo** con dos paquetes independientes:

- **`server`**: API REST en Express + Sequelize + PostgreSQL, escrita en TypeScript.
- **`client`**: aplicación en React + Vite + Tailwind CSS, escrita en TypeScript.

---

## Cómo levantar el proyecto

### Requisitos previos

- [Node.js](https://nodejs.org/) v20 o superior
- [pnpm](https://pnpm.io/) v9 o superior (`npm install -g pnpm`)
- [PostgreSQL](https://www.postgresql.org/) corriendo localmente, o [Docker](https://www.docker.com/) y Docker Compose (opcional, para levantar todo containerizado)

### 1. Clonar el repositorio

```bash
git clone https://github.com/InakiCarcereny/DevHub
cd DevHub
```

### 2. Instalar dependencias

```bash
pnpm install
```

Esto instala las dependencias de `server`, `client` y de la raíz (ESLint, Prettier, commitlint, lint-staged) en un solo paso, y configura automáticamente los git hooks de Husky (script `prepare`).

### 3. Configurar variables de entorno

Cada paquete tiene su propio `.env`, a partir de su `.env.example`:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

**`server/.env`**

```env
PORT=3000

DB_NAME=devhub_db
DB_USER=postgres
DB_PASSWORD=
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DIALECT=postgres

# Auth.js
AUTH_SECRET=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**`client/.env`**

```env
VITE_API_URL=http://localhost:3000/api
```

### 4. Levantar la base de datos

**Opción A — con Docker (recomendado):**

```bash
docker compose up -d db
```

**Opción B — Postgres instalado localmente:**

```bash
createdb devhub_db
```

Asegurate de que `server/.env` apunte correctamente a tu instancia.

### 5. Sincronizar los modelos

No hay migraciones manuales: al levantar el server, Sequelize sincroniza los modelos (`users`, `posts`) automáticamente contra la base de datos indicada en `.env`.

### 6. Levantar el proyecto en desarrollo
 
**Opción A — todo junto, en una sola terminal:**
 
```bash
pnpm dev
```
 
Levanta `server` (http://localhost:3000) y `client` (http://localhost:5173) en paralelo, con la salida de cada uno prefijada (`server dev:` / `client dev:`).
 
**Opción B — por separado, en dos terminales:**
 
```bash
# Terminal 1 - server (http://localhost:3000)
pnpm dev:server
 
# Terminal 2 - client (http://localhost:5173)
pnpm dev:client
```
 
Útil si querés reiniciar o filtrar los logs de uno de los dos sin afectar al otro.

### 7. (Opcional) Levantar todo con Docker

Si preferís correr la app completa (server + client + Postgres) en contenedores:

```bash
docker compose up --build
```

- `client` queda expuesto en `http://localhost:5173` (servido con nginx)
- `server` en `http://localhost:3000`
- `db` (Postgres) en el puerto `5432`

---

## Build de producción

```bash
pnpm build:server   # compila TS a server/dist
pnpm build:client   # compila TS + build de Vite a client/dist
```

---

## Flujo y metodología de trabajo

| Rama         | Descripción                             |
| ------------ | --------------------------------------- |
| `main`       | Versión final de producción             |
| `dev`        | Integración de todas las features       |
| `feature/*`  | Nuevas funcionalidades                  |
| `refactor/*` | Mejoras y reestructuración del código   |
| `docs/*`     | Cambios en documentación                |
| `fix/*`      | Corrección de errores                   |
| `chore/*`    | Tareas de mantenimiento y configuración |
| `test/*`     | Pruebas de código                       |

---

## Convención de commits

El proyecto usa [Conventional Commits](https://www.conventionalcommits.org/), validado automáticamente con **commitlint** en cada commit (hook `commit-msg` de Husky).

| Prefijo     | Uso                                                   |
| ----------- | ----------------------------------------------------- |
| `feat:`     | Nueva funcionalidad                                   |
| `fix:`      | Corrección de bug                                     |
| `docs:`     | Cambios en documentación                              |
| `style:`    | Cambios de formato o estilo de código                 |
| `refactor:` | Reorganización de código                              |
| `chore:`    | Configuración, dependencias o tareas de mantenimiento |
| `test:`     | Agregado o modificación de pruebas                    |

Además, el hook `pre-commit` corre `eslint --fix` y `prettier --write` sobre los archivos en stage (**lint-staged**).

```bash
pnpm lint        # lint de todo el repo
pnpm lint:fix     # lint con autofix
pnpm format       # formatea todo el repo con Prettier
```

---

## Tecnologías utilizadas

### Framework y lenguaje

- [Express](https://expressjs.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### Estilos

- [Tailwind CSS](https://tailwindcss.com/)
- [class-variance-authority](https://cva.style/)
- [clsx](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

### Base de datos

- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [pg](https://node-postgres.com/)

### Formularios y validación

- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [@hookform/resolvers](https://github.com/react-hook-form/resolvers)

### Autenticación

- [Auth.js](https://authjs.dev/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

### Estado

- [Zustand](https://zustand.docs.pmnd.rs/)

### Almacenamiento de archivos

- [Cloudinary](https://cloudinary.com/)

### Testing

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [jsdom](https://github.com/jsdom/jsdom)

### UI / Documentación de componentes

- [Storybook](https://storybook.js.org/)

### Calidad de código

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [Commitlint](https://commitlint.js.org/)

### Contenedores

- [Docker](https://www.docker.com/)

### Package manager

- [pnpm](https://pnpm.io/)

### Íconos

- [Lucide React](https://lucide.dev/)

### Notificaciones

- [Sileo](https://sileo.aaryan.design/)

### Deploy

- [Neon](https://neon.tech/)
- [Render](https://render.com/)
- [Vercel](https://vercel.com/)

<div align="center">

Proyecto Final Integrador — UTN (Universidad Tecnológica Nacional)
 
</div>
