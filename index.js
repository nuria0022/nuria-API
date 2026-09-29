const express = require('express');

const app = express();
// Render asigna el puerto en la variable de entorno PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('HOLA SOY NURIA');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
