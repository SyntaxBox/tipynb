import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('⚡️ Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
