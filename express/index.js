import express from 'express';
import path from 'path';
import { requestTime, logger } from './middlewares.js';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000; //позволяет изменить порт с помощью консоли set PORT = 3500 && node index
const app = express();

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(requestTime);
app.use(logger);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

app.get('/', (req, res) => {
  res.render('index', { title: 'MAin page' });
});

app.get('/features', (req, res) => {
  res.render('features', { title: 'feature page' });
});

app.listen(PORT, () => {
  console.log(`ready on port ${PORT}`);
});
