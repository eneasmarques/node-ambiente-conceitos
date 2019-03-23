const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World');
});

// url params /nome_param
app.get('/nome/:name', (req, res) => {
  return res.send(`Bem-vindo, ${req.params.name}, por url_param`);
});

// query params /?nome_param=valor
app.get('/nome/', (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}, por query_param`);
});

app.listen(3000);
