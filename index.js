// 1. Importamos Express (la librería que nos facilita crear el servidor)
const express = require("express");
const path = require("path");

// 2. Creamos la aplicación
const app = express();

// 3. Puerto: Render nos da uno en process.env.PORT; en local usamos el 3000
const PORT = process.env.PORT || 3000;

// 4. Servimos los archivos de la carpeta "public" (index.html, css, js...)
//    Así, al entrar en "/" se muestra automáticamente public/index.html
app.use(express.static(path.join(__dirname, "public")));

// ---------------- DATOS ----------------
// De momento los datos están "en memoria" (en un array).
// Más adelante esto vendría de una base de datos.
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Maria" },
  { id: 3, nombre: "Pedro" },
];

const productos = [
  { id: 1, nombre: "Pizza", precio: 18 },
  { id: 2, nombre: "Hamburguesa", precio: 12 },
  { id: 3, nombre: "Coca-Cola", precio: 2 },
];

// ---------------- ENDPOINTS ----------------

// GET /saludo -> el mensaje que antes salía en "/"
// (ahora "/" muestra la página HTML de la carpeta public)
app.get("/saludo", (req, res) => {
  res.send("HOLA SOY NURIA");
});

// GET /usuarios -> devuelve la lista completa de usuarios
app.get("/usuarios", (req, res) => {
  res.json(usuarios); // por defecto el código es 200 (OK). devuelve en formato json
});

// GET /usuarios/:id -> devuelve un usuario concreto
// ":id" es un PARÁMETRO: en /usuarios/2 vale "2"
app.get("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id); // viene como texto, lo pasamos a número
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    // Si no existe, devolvemos código 404 (Not Found) y un mensaje
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  res.json(usuario);
});

// GET /productos -> devuelve la lista de productos
app.get("/productos", (req, res) => {
  res.json(productos);
});

// Cualquier otra ruta que no exista -> 404
app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no encontrada" });
});

// 5. Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
