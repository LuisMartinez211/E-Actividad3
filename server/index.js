const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para manejar CORS y JSON
app.use(cors());
app.use(bodyParser.json());

// Ruta principal para el API
app.get('/', (req, res) => {
  res.send('Servidor Express en funcionamiento');
});

// Ruta para manejar el envío de formularios de contacto
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Aquí manejarías el almacenamiento de datos, enviar emails, etc.
  console.log(`Contacto recibido de: ${name}, Email: ${email}, Mensaje: ${message}`);

  res.status(200).send({ message: 'Contacto recibido con éxito' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
