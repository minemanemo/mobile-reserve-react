import path from 'path';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

const documentRoot = path.join(process.cwd(), '..', 'build');
const envPath = path.join(process.cwd(), '..', '.env');
dotenv.config({ path: envPath });

const PORT = process.env.SERVER_PORT || 5000;
const API_SERVER_URL = process.env.API_SERVER_URL;

if (!API_SERVER_URL) {
  throw new Error('API Server URL is not setting!!!');
}

const app: express.Application = express();
app.use(express.static(documentRoot));

app.use(
  '/api',
  createProxyMiddleware({ target: API_SERVER_URL, changeOrigin: true }),
);

app.get('*', function (request: express.Request, response: express.Response) {
  response.sendFile(path.resolve(documentRoot, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`start Web Server... ${PORT}`);
});
