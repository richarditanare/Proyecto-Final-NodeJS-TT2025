import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './src/routes/products.routes.js';
import rutasLog from './src/routes/auth.routes.js';
import { authentication } from './src/middleware/authentication.js';

const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = {
  origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
  exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
  credentials: true,                                          // habilitar credenciales
  maxAge: 600,                                                // tiempo de caché en segundos (cache preflight)
  optionsSuccessStatus: 204                                   // respuesta preflight exitosa
};

app.use(cors(corsConfig));
app.use(bodyParser.json()); // lectura amable de JSON en cada peticion

app.use("/auth", rutasLog) // login sin token previo
app.use("/api/auth", rutasLog) // alias por si llaman con prefijo /api
app.use(authentication);

//rutas
app.use("/api/products", productRoutes);

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada, verifica la direccion y vuelve a intentar.');
}); 

app.use((err, req, res, next) => {
    console.error('Error interno detectado:', err);
    res.status(err.status || 500).json({
        message: 'Ocurrió un problema procesando tu solicitud. Inténtalo nuevamente o verifica los datos enviados.',
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log('Servidor iniciado correctamente, ingresa en http://localhost:3000');
    console.log('Endpoint de login listo en http://localhost:' + PORT + '/auth/login (POST)');
    console.log('Presiona Ctrl+C para detener el servidor');
    console.log('Visita http://localhost:' + PORT + '/api/products para ver los productos');
});

