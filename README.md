# nuria-API

Pequeño servidor Node.js (Express) con un endpoint GET.

## Endpoint

| Método | Ruta | Respuesta        |
|--------|------|------------------|
| GET    | `/`  | `HOLA SOY NURIA` |

## Ejecutar en local

```bash
npm install
npm start
```

Abrir http://localhost:3000

## Despliegue

Desplegado en Render.com como Web Service:

- Build Command: `npm install`
- Start Command: `npm start`
- Versión de Node: 26 (definida en `.node-version` y en `engines` de `package.json`)
