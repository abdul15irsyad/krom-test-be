import express from 'express';
import cors from 'cors';
import { nodeENV, port } from './config';
import { router } from './routes/index.route';

const app = express();

app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
  console.log(`environment: ${nodeENV}`);
});
