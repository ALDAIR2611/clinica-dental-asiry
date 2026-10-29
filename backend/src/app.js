import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import healthRoutes from './routes/health.routes.js';
import servicesRoutes from './routes/services.routes.js';

const app = express();

const allowedOrigins = (process.env.FRONTEND_URL ??
  'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim());

app.disable('x-powered-by');

app.use(helmet());

app.use(cors({
  origin(origin, callback) {
    // Las solicitudes sin Origin incluyen algunas herramientas locales.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Origen no autorizado por CORS.'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '20kb' }));

app.get('/api', (_req, res) => {
  res.json({
    name: 'Clínica Dental Asiry API',
    version: '1.0.0',
    status: 'online'
  });
});

app.use('/api/health', healthRoutes);
app.use('/api/services', servicesRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada.'
  });
});

app.use((error, _req, res, _next) => {
  if (error instanceof SyntaxError && 'body' in error) {
    return res.status(400).json({
      success: false,
      message: 'El cuerpo JSON no tiene un formato válido.'
    });
  }

  if (error.message === 'Origen no autorizado por CORS.') {
    return res.status(403).json({
      success: false,
      message: 'Origen no autorizado.'
    });
  }

  console.error(error);

  return res.status(500).json({
    success: false,
    message: 'Error interno del servidor.'
  });
});

export default app;
