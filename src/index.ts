import express from 'express';
import HomeController from './controllers/home_controller'
import RecursosController from './controllers/recursos_controller';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/', HomeController.index);
app.get('/api/recursos', RecursosController.index);

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
