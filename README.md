# nuria-API – API con Node.js y Express

## Descripción

Servidor creado con **Node.js** y **Express** que ofrece una pequeña API REST con usuarios y productos, y sirve una página HTML que consume esa API con `fetch()` para mostrar los datos automáticamente.

Práctica de FP: Node.js + Postman + GitHub + Render.

**Autora:** Nuria Ruiz de Azua Montero

## Tecnologías utilizadas

- Node.js
- Express
- HTML, CSS y JavaScript (fetch API)
- Postman (pruebas de la API)
- Git y GitHub (control de versiones)
- Render (despliegue)

## Cómo ejecutar el proyecto localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/nuria0022/nuria-API.git
   cd nuria-API
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Arrancar el servidor:
   ```bash
   npm start
   ```
4. Abrir en el navegador: <http://localhost:3000>

## Endpoints

| Método | Ruta              | Descripción                          | Código |
|--------|-------------------|--------------------------------------|--------|
| GET    | `/`               | Página HTML (`public/index.html`)    | 200    |
| GET    | `/saludo`         | Texto "HOLA SOY NURIA"               | 200    |
| GET    | `/usuarios`       | Lista de todos los usuarios          | 200    |
| GET    | `/usuarios/:id`   | Un usuario por su id                 | 200 / 404 |
| GET    | `/productos`      | Lista de productos                   | 200    |

Ejemplos:

- `GET /usuarios/1` → `{ "id": 1, "nombre": "Juan" }`
- `GET /usuarios/99` → `404` `{ "mensaje": "Usuario no encontrado" }`

## URL de Render

https://nuria-api.onrender.com

- https://nuria-api.onrender.com/usuarios
- https://nuria-api.onrender.com/usuarios/1
- https://nuria-api.onrender.com/productos

## Qué se ha realizado

- Pruebas de los endpoints con Postman, revisando la respuesta y el código HTTP (200, 404).
- Endpoint `GET /usuarios` que devuelve un array de usuarios en JSON.
- Endpoint `GET /usuarios/:id` que busca un usuario por id y devuelve `404` si no existe.
- Endpoint `GET /productos` con nombre y precio.
- Carpeta `public` con un `index.html` servido por Express con `express.static`.
- La página usa `fetch()` para pedir `/usuarios` y `/productos` y mostrarlos en listas.
- Proyecto subido a GitHub y desplegado en Render.

## Estructura

```
nuria-API/
├── public/
│   └── index.html
├── index.js
├── package.json
├── .node-version
└── README.md
```
