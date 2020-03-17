const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const i18nInstance = require('./i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await i18nInstance.initPromise;
  server.use(nextI18NextMiddleware(i18nInstance));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
})();
