
# Clínica Dental Asiry

Aplicación web informativa desarrollada con React, TypeScript, Vite,
Tailwind CSS, Node.js y Express.

## Requisitos

- Node.js LTS compatible con Vite
- npm
- Git (recomendado)

## Backend

Desde la carpeta backend:

```bash
npm install
npm run dev
```

API: http://localhost:3000/api

Comprobación: http://localhost:3000/api/health

Servicios: http://localhost:3000/api/services

## Frontend

Desde la carpeta frontend:

```bash
npm install
npm run dev
```

Web: http://localhost:5173

## Variables de entorno

Copia `.env.example` como `.env` en cada carpeta
y configura los valores de tu entorno local.

No publiques archivos `.env` ni credenciales.

## Compilación

Desde frontend:

```bash
npm run build
npm run preview
```

La carpeta `dist` contiene los archivos estáticos compilados.

## Estado actual

La aplicación muestra información de la clínica y permite abrir
conversaciones de WhatsApp. No incluye aún una base de datos,
autenticación, gestión de citas ni almacenamiento de historias clínicas.
