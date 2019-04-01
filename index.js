const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

const users = ['Enéas', 'Marques', 'Alves']

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// para informações de formulário html
app.use(express.urlencoded({ extended: false }))

// informando extensao para arquivos nunjucks
app.set('view engine', 'njk')

const logMiddleware = (req, res, next) => {
  console.log(`URL: ${req.url}, Method: ${req.method}`)

  req.appName = 'Aplicativo X'

  // usando next() para não parar o fluxo
  return next()
}

// será chamado em todas as rotas
app.use(logMiddleware)

app.get('/', (req, res) => {
  // informando view que será renderizada e passando parâmetro
  return res.render('list', { users: users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  // req.body -> app.use(express.urlencoded({ extended: false }));
  users.push(req.body.user)
  return res.redirect('/')
})

// url params /nome_param
app.get('/nome/:name', (req, res) => {
  return res.send(
    `Bem-vindo ao ${req.nameSystem}, ${req.params.name}, por url_param`
  )
})

// query params /?nome_param=valor
app.get('/nome/', (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}, por query_param`)
})

app.listen(3000)
