import { Express, Request, Response } from 'express';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import apiRouter from './routes/api';
import { corsConfig } from './config';

dotenv.config({ path: __dirname + '/.env' });

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors(corsConfig));
app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ data: '⚡️ Express + TypeScript Server' });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
