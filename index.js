const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

// informando extensao para arquivos nunjucks
app.set('view engine', 'njk');

const logMiddleware = (req, res, next) => {
  console.log(`URL: ${req.url}, Method: ${req.method}`);

  req.appName = 'Aplicativo X';

  // usando next() para não parar o fluxo
  return next();
};

// será chamado em todas as rotas
app.use(logMiddleware);

app.get('/', (req, res) => {
  // informando view que será renderizada e passando parâmetro
  return res.render('list', { name: req.appName });
});

// url params /nome_param
app.get('/nome/:name', (req, res) => {
  return res.send(
    `Bem-vindo ao ${req.nameSystem}, ${req.params.name}, por url_param`
  );
});

// query params /?nome_param=valor
app.get('/nome/', (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}, por query_param`);
});

app.listen(3000);
