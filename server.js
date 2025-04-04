const express = require('express');
const next = require('next');
// Change this line to use the correct module name
const compression = require('compression-next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Apply compression for all requests
  server.use(compression());

  // Handle webpack hot update 404s silently in development
  server.use((req, res, next) => {
    if (dev && (req.path.includes('.hot-update.json') || req.path.includes('.hot-update.js'))) {
      return res.status(200).json({});
    }
    next();
  });

  // Static assets caching
  server.use(
    '/static',
    express.static('public', {
      maxAge: '1y',
      immutable: true,
    })
  );

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
