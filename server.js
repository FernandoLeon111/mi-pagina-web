const express = require('express');
const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
  // Capturar la IP del cliente
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(`IP del cliente: ${ip}`);  // Muestra la IP en la consola del servidor

  // Respuesta al usuario
  res.send(`Tu dirección IP es: ${ip}`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
