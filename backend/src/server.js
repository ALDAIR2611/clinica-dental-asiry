import 'dotenv/config';
import app from './app.js';

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, '127.0.0.1', () => {
  console.log(`Asiry API disponible en http://localhost:${PORT}`);
  console.log(`Entorno: ${process.env.NODE_ENV ?? 'development'}`);
});

function shutdown(signal) {
  console.log(`${signal}: cerrando servidor...`);

  server.close(() => {
    process.exit(0);
  });

  setTimeout(() => {
    process.exit(1);
  }, 5000).unref();
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
