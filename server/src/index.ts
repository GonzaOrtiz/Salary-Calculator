import express from 'express';
import { log } from 'debug';

const app: express.Application = express();

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hola');
})

app.listen(3000, () => {
  log('Server listening on port 3000');
});