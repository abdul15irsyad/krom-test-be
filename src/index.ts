import express from 'express';
import { nodeENV, port } from './config';
import { router } from './routes/index.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
  console.log(`environment: ${nodeENV}`);
});
